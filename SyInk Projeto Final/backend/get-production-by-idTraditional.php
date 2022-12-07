<?php
    require('database.php');

    try{
        $id = '';
        if(isset($_GET['id'])){
            $id = $_GET['id'];
        }
        
        $stmt = $conn->prepare("SELECT * FROM artetradicional WHERE id  = :id ");
        $stmt->bindParam(':id',$id);
        $stmt->execute();

        $count = $stmt->rowCount();
        
        if($count == 1){
            $tradicional = $stmt->fetch(PDO::FETCH_ASSOC);
            $result["success"]["message"] = "Projeto encontrado com sucesso!";
            $result["data"] = $tradicional;
        } else {
            $result["error"]["message"] = "ID: $id não encontrado!";
        }

        header('Content-Type: text/jason');
        echo json_encode($result);
 
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>
