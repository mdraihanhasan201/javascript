<?php
include 'connect.php';
if (isset($_GET['deleteid'])){
$name = $_GET['deleteid'];
$sql = "DELETE FROM info WHERE name = '$name'";
$result = mysqli_query($conn, $sql);
if ($result) {
    header('location:display.php');
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
        }
        
}


?>