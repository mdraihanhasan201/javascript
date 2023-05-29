<?php
include 'connect.php';


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['eamil'];
    $pasword = $_POST['pasword'];
    $id = $_POST['id'];

    $sql = "insert into info (name,email,pasword,id) values ('$name','$email','$pasword','$id')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        header('location:display.php');
    } else {
        die(mysqli_error($conn));
    }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>c_operation</title>
</head>

<body>

    <form action="#" method="POST">
        <div class="container">

            <label for="name">name</label>
            <input type="text" name="name">
            <br>

            <label for="eamil">eamil</label>
            <input type="email" name="eamil">
            <br>

            <label for="pasword">pasword</label>
            <input type="pasword" name="pasword">
            <br>

            <label for="id">id</label>
            <input type="id" name="id">
        </div>

        <input type="submit" name="submit">

    </form>



</body>

</html>