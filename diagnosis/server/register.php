<?php
$servername = "localhost";
$db_username = "physicz9_up_admin";
$db_password = "^x9)eQ8XGSJ{[1";
$database = "physicz9_up_dev";

require('../wp-load.php');
require('../wp-includes/pluggable.php');

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//create data parameters for SQL query
$user_email = $_REQUEST['user_email'];
$user_login = $_REQUEST['username'];
$user_password = $_REQUEST['password'];

// create and get SQL query
$sql = "SELECT * FROM `_SXA_users` WHERE `user_email` LIKE '" . $user_email . "'" . " OR `user_login` LIKE '" . $user_login . "'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // if email or username already exists, then sign up is invalid
    while($row = $result->fetch_assoc()) {
        echo "An account has already been created for this email or username. Try again.";
    }
} else {
    // create user
    $mysqltime = date('Y-m-d H:i:s');
    $wp_hasher = new PasswordHash(8, True);
    $user_pass = wp_hash_password($user_password);
    $insertSQL = "INSERT INTO `_SXA_users` ('user_login`, `user_pass`, `user_nicename`, `user_email`, `user_registered`) VALUES ('" . $user_login . "', '" . $user_pass . "')";
    echo "Sign up successful";
}

// close the connection
$conn->close();
?>