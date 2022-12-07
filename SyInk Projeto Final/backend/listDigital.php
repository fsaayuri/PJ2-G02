<?php
    require('database.php');

    try{
        $stmt = $conn->prepare("SELECT id, titulo, marcacao, ferramenta, categoria, capa FROM artedigital;");
        $stmt->execute();

        $digital = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $result["success"]["message"] = "Cadastrado com sucesso!";
        $result["data"] = $digital;


        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>
