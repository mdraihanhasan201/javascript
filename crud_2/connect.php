<?php
$conn = new mysqli('localhost','root','','c2');

if ($conn){
    echo "dabase connected";
}
else{
    die(mysqli_errno($conn));
}



?>