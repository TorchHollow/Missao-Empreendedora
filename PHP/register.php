<?php if (isset($_POST['register'])) {

    // Connect to the database 
    $mysqli = new mysqli("localhost", "username", "password", "login_system");

    // Check for errors 
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Prepare and bind the SQL statement 
    $stmt = $mysqli->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    // Get the form data 
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password 
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Execute the SQL statement 
    if ($stmt->execute()) {
        echo "Nova conta criada com sucesso!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the connection 
    $stmt->close();
    $mysqli->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br>
    <br>
    <a href="../index.html">Voltar</a>
</body>
</html>