<?php
    require('database.php');

    try{
        $stmt = $conn->prepare("SELECT id, titulo, marcacao, ferramenta, categoria, capa FROM artetradicional;");
        $stmt->execute();

        $traditional = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $result["success"]["message"] = "Cadastrado com sucesso!";
        $result["data"] = $traditional;


        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>
