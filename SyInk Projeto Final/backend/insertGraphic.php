<?php
    require('database.php');

    $titleGraphic = $_POST["titleGraphic"];
    $tagGraphic = $_POST["tagGraphic"];
    $toolsGraphic = $_POST["toolsGraphic"];
    $categoryGraphic = $_POST["categoryGraphic"];
    $coverGraphic = $_POST["coverGraphic"];

    try{
        $stmt = $conn->prepare("INSERT INTO designgrafico (titulo, marcacao, ferramenta, categoria, capa)
    VALUES (:titulo, :marcacao, :ferramenta, :categoria, :capa)");
        $stmt->bindParam(':titulo', $titleGraphic);
        $stmt->bindParam(':marcacao', $tagGraphic);
        $stmt->bindParam(':ferramenta', $toolsGraphic);
        $stmt->bindParam(':categoria', $categoryGraphic);
        $stmt->bindParam(':capa', $coverGraphic);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["titleGraphic"] = $titleGraphic;
        $result["data"]["tagGraphic"] = $tagGraphic;
        $result["data"]["toolsGraphic"] = $toolsGraphic;
        $result["data"]["categoryGraphic"] = $categoryGraphic;
        $result["data"]["coverGraphic"] = $coverGraphic;

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>