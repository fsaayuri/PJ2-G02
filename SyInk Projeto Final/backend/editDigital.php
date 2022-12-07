<?php
    require('database.php');
    
    $id = $_POST["id"];
    $titleDigital = $_POST["titleDigital"];
    $tagDigital = $_POST["tagDigital"];
    $toolsDigital = $_POST["toolsDigital"];
    $categoryDigital = $_POST["categoryDigital"];
    $coverDigital = $_POST["coverDigital"];

    try{
        $stmt = $conn->prepare("UPDATE artedigital SET titulo = :titulo, marcacao = :marcacao, ferramenta = :ferramenta, categoria = :categoria, capa = :capa WHERE id = :id;");

        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':titulo', $titleDigital);
        $stmt->bindParam(':marcacao', $tagDigital);
        $stmt->bindParam(':ferramenta', $toolsDigital);
        $stmt->bindParam(':categoria', $categoryDigital);
        $stmt->bindParam(':capa', $coverDigital);

        $stmt->execute();

        $count = $stmt->rowCount();

        if($count == 1){
            $result["success"]["message"] = "Editado com sucesso!";

            $result["data"]["id"] = $id;
            $result["data"]["titleDigital"] = $titleDigital;
            $result["data"]["tagDigital"] = $tagDigital;
            $result["data"]["toolsDigital"] = $toolsDigital;
            $result["data"]["categoryDigital"] = $categoryDigital;
            $result["data"]["coverDigital"] = $coverDigital;

        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/json');
        echo json_encode($result);


    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>