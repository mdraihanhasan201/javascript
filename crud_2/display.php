<?php

include 'connect.php';
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Page Title</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  
</head>

<body>
  <div class="container my-5">
    <button><a href="index.php" class="text-light  ">Add User</a></button>
    <table class="table">
      
        <tr>
          <th scope="col">name</th>
          <th scope="col">Email</th>
          <th scope="col">pasword</th>
          
          <th scope="col">ID</th>
          <th scope="col">options</th>
        </tr>
      
     
        <?php
        $sql = "select * from `info`";
        $result = mysqli_query($conn, $sql);
        if ($result) {
          while ($row = mysqli_fetch_assoc($result)) {
            $name = $row['name'];
            $email = $row['email'];
            $pasword = $row['pasword'];
            
            $id = $row['id'];

            echo '<tr>
                    <th scope="row">' . $name . '</th>
                    <td>' . $email . '</td>
                    <td>' . $pasword . '</td>
                   
                    <td>' . $id . '</td>
            
                    <td>
                    <button ><a href="update.php? updateid=' . $name . '" class=>update</a></button>


                    <button ><a href="delete.php?   deleteid=' . $name . '"class=>delete</a></button>
                    </td>

                  


                  </tr>';
          }
        }
        ?>




  </div>
</body>

</html>