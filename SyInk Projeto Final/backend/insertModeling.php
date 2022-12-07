<?php
    require('database.php');

    $titleModeling = $_POST["titleModeling"];
    $tagModeling = $_POST["tagModeling"];
    $toolsModeling = $_POST["toolsModeling"];
    $categoryModeling = $_POST["categoryModeling"];
    $coverModeling = $_POST["coverModeling"];

    try{
        $stmt = $conn->prepare("INSERT INTO modelagem3d (titulo, marcacao, ferramenta, categoria, capa)
    VALUES (:titulo, :marcacao, :ferramenta, :categoria, :capa)");
        $stmt->bindParam(':titulo', $titleModeling);
        $stmt->bindParam(':marcacao', $tagModeling);
        $stmt->bindParam(':ferramenta', $toolsModeling);
        $stmt->bindParam(':categoria', $categoryModeling);
        $stmt->bindParam(':capa', $coverModeling);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["titleModeling"] = $titleModeling;
        $result["data"]["tagModeling"] = $tagModeling;
        $result["data"]["toolsModeling"] = $toolsModeling;
        $result["data"]["categoryModeling"] = $categoryModeling;
        $result["data"]["coverModeling"] = $coverModeling;

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>