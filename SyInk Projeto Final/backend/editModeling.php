<?php
    require('database.php');
    
    $id = $_POST["id"];
    $titleModeling = $_POST["titleModeling"];
    $tagModeling = $_POST["tagModeling"];
    $toolsModeling = $_POST["toolsModeling"];
    $categoryModeling = $_POST["categoryModeling"];
    $coverModeling = $_POST["coverModeling"];

    try{
        $stmt = $conn->prepare("UPDATE modelagem3d SET titulo = :titulo, marcacao = :marcacao, ferramenta = :ferramenta, categoria = :categoria, capa = :capa WHERE id = :id;");

        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titleModeling);
        $stmt->bindParam(':marcacao', $tagModeling);
        $stmt->bindParam(':ferramenta', $toolsModeling);
        $stmt->bindParam(':categoria', $categoryModeling);
        $stmt->bindParam(':capa', $coverModeling);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titleModeling"] = $titleModeling;
            $result["data"]["tagModeling"] = $tagModeling;
            $result["data"]["toolsModeling"] = $toolsModeling;
            $result["data"]["categoryModeling"] = $categoryModeling;
            $result["data"]["coverModeling"] = $coverModeling;

        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>