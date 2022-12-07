<?php
    require('database.php');
    
    $id = $_POST["id"];
    $titleTraditional = $_POST["titleTraditional"];
    $tagTraditional = $_POST["tagTraditional"];
    $toolsTraditional = $_POST["toolsTraditional"];
    $categoryTraditional = $_POST["categoryTraditional"];
    $coverTraditional = $_POST["coverTraditional"];

    try{
        $stmt = $conn->prepare("UPDATE artetradicional SET titulo = :titulo, marcacao = :marcacao, ferramenta = :ferramenta, categoria = :categoria, capa = :capa WHERE id = :id;");

        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titleTraditional);
        $stmt->bindParam(':marcacao', $tagTraditional);
        $stmt->bindParam(':ferramenta', $toolsTraditional);
        $stmt->bindParam(':categoria', $categoryTraditional);
        $stmt->bindParam(':capa', $coverTraditional);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titleTraditional"] = $titleTraditional;
            $result["data"]["tagTraditional"] = $tagTraditional;
            $result["data"]["toolsTraditional"] = $toolsTraditional;
            $result["data"]["categoryTraditional"] = $categoryTraditional;
            $result["data"]["coverTraditional"] = $coverTraditional;

        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>