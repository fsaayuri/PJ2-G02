<?php
    require('database.php');
    
    $id = $_POST["id"];
    $titleGraphic = $_POST["titleGraphic"];
    $tagGraphic = $_POST["tagGraphic"];
    $toolsGraphic = $_POST["toolsGraphic"];
    $categoryGraphic = $_POST["categoryGraphic"];
    $coverGraphic = $_POST["coverGraphic"];

    try{
        $stmt = $conn->prepare("UPDATE designgrafico SET titulo = :titulo, marcacao = :marcacao, ferramenta = :ferramenta, categoria = :categoria, capa = :capa WHERE id = :id;");

        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titleGraphic);
        $stmt->bindParam(':marcacao', $tagGraphic);
        $stmt->bindParam(':ferramenta', $toolsGraphic);
        $stmt->bindParam(':categoria', $categoryGraphic);
        $stmt->bindParam(':capa', $coverGraphic);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titleGraphic"] = $titleGraphic;
            $result["data"]["tagGraphic"] = $tagGraphic;
            $result["data"]["toolsGraphic"] = $toolsGraphic;
            $result["data"]["categoryGraphic"] = $categoryGraphic;
            $result["data"]["coverGraphic"] = $coverGraphic;

        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>