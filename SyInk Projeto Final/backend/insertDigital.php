<?php
    require('database.php');

    $titleDigital = $_POST["titleDigital"];
    $tagDigital = $_POST["tagDigital"];
    $toolsDigital = $_POST["toolsDigital"];
    $categoryDigital = $_POST["categoryDigital"];
    $coverDigital = $_POST["coverDigital"];

    try{
        $stmt = $conn->prepare("INSERT INTO artedigital (titulo, marcacao, ferramenta, categoria, capa)
    VALUES (:titulo, :marcacao, :ferramenta, :categoria, :capa)");
        $stmt->bindParam(':titulo', $titleDigital);
        $stmt->bindParam(':marcacao', $tagDigital);
        $stmt->bindParam(':ferramenta', $toolsDigital);
        $stmt->bindParam(':categoria', $categoryDigital);
        $stmt->bindParam(':capa', $coverDigital);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["titleDigital"] = $titleDigital;
        $result["data"]["tagDigital"] = $tagDigital;
        $result["data"]["toolsDigital"] = $toolsDigital;
        $result["data"]["categoryDigital"] = $categoryDigital;
        $result["data"]["coverDigital"] = $coverDigital;

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>