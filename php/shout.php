<?php
$hostname = 'localhost';
$username = 'admin';
$password = '123';
$dbname = 'shoutbox';
try {
    $dbh = new PDO("mysql:host=$hostname; dbname=$dbname", $username, $password);
if($_POST['name']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $rating = $_POST['reviewStars'];
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO shoutbox (date_time, name, message, email, rating)
            VALUES (NOW(), :name, :message, :email, :rating)";
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':message', $message, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':rating', $rating, PDO::PARAM_STR);
    if ($stmt->execute()) {
        populate_shoutbox();
    }
}
}
catch(PDOException $e) {
    echo $e->getMessage();
}
if($_POST['refresh']) {
    populate_shoutbox();
}

function populate_shoutbox() {
    global $dbh;
    $sql = "select * from shoutbox order by date_time desc limit 10";
function raiting_count($rating){
        for($i = 1; $i <= $rating; $i++) echo '<img src="./Pictures/star.svg">';
}
$container_class = '0';
        // echo '<div class="left-slide" id="rts">';
        // echo '<img src="Pictures/left-arrow-angle.svg" alt="" width="40px" height="40px">';
        // echo '</div>';
    foreach ($dbh->query($sql) as $row) {
        global $container_class;
        echo '<div class="nondisplay container-'.++$container_class.'">';
        echo '<ul>';
        echo '<li>';
        echo '<div class="shout-in">';
        echo '<div class="foto-div">';
        echo '<img src="./Pictures/user.svg" alt="">';
        echo '</div>';
        echo  '<div class="name-div">';
        echo '<span class="name">'.$row['name'].'</span>';
        echo ' </div>';
        echo '<div class="email-div">';
        echo '<span class="email">'.$row['email'].'</span>';
        echo '</div>';
        echo '<div class="rating-div">';
        echo '<span class="rating"></span>';
        raiting_count($row['rating']);
        echo '</div>';
        echo   '<div class="email-div">';
        echo  '</div>';
        echo  '<div class="message-div">';
        echo '<span class="message">'.$row['message'].'</span>';
        echo '</div>';
        echo '<div class="date-div">';
        echo '<span class="date">'.date("d.m.Y H:i", strtotime($row['date_time'])).'</span>';
        echo ' </div>';
        echo  '</div>';
        echo '</li>';
        echo '</ul>';
        echo '</div>';
    }
    // echo '<div class="right-slide" id="rts">';
    // echo '<img src="Pictures/right-arrow-angle.svg" alt="" width="40px" height="40px" id="rts">';
    // echo '</div>';
}
?>
