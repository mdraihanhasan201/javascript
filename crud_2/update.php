<?php
include 'connect.php';
$id=$_GET['updateid'];
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pasword = $_POST['pasword'];
    $id = $_POST['id'];

   $sql = " update info  set name='$name',email='$email',pasword=$pasword where id=$id" ; 

   $result=mysqli_query($conn,$sql);
if ($result){
   
    header('location:display.php');

}
else{
    die(mysqli_error($conn));
}



}



?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    
    <title>Hello, world!</title>
</head>

<body>
    <div class="container my-5">
        <form method="POST">
            <div class="mb-3" >
                <label for="name" >Email address:</label>
                <input type="text"  name="name" placeholder="enter your name">
                
            </div>
            <div >
                <label for="eamil">email:</label>
                <input type="name" name="email" placeholder="enter your email">
                
            </div>
            <div>
                <label for="pasword">pasword:</label>
                <input type="pasword"  name="pasword" placeholder="enter your pass">
                
            </div>
            <div>
                <label for="id">id:</label>
                <input type="id" name="id" placeholder="enter your id">
                
            </div>



            
            <button type="submit"  name="submit">update</button>
        </form>

    </div>


</body>

</html>