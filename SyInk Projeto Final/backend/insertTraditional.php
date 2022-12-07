<?php
    require('database.php');

    $titleTraditional = $_POST["titleTraditional"];
    $tagTraditional = $_POST["tagTraditional"];
    $toolsTraditional = $_POST["toolsTraditional"];
    $categoryTraditional = $_POST["categoryTraditional"];
    $coverTraditional = $_POST["coverTraditional"];

    try{
        $stmt = $conn->prepare("INSERT INTO artetradicional (titulo, marcacao, ferramenta, categoria, capa)
    VALUES (:titulo, :marcacao, :ferramenta, :categoria, :capa)");
        $stmt->bindParam(':titulo', $titleTraditional);
        $stmt->bindParam(':marcacao', $tagTraditional);
        $stmt->bindParam(':ferramenta', $toolsTraditional);
        $stmt->bindParam(':categoria', $categoryTraditional);
        $stmt->bindParam(':capa', $coverTraditional);

        $stmt->execute();
        $id = $conn->lastInsertId();

        $result["success"]["message"] = "Cadastrado com sucesso!";

        $result["data"]["titleTraditional"] = $titleTraditional;
        $result["data"]["tagTraditional"] = $tagTraditional;
        $result["data"]["toolsTraditional"] = $toolsTraditional;
        $result["data"]["categoryTraditional"] = $categoryTraditional;
        $result["data"]["coverTraditional"] = $coverTraditional;

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>