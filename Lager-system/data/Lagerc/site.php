<html>
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!--<script src="script.js"></script>-->
    <script src="scripts/jsonSort.js"></script>
    <script src="scripts/table.js"></script>
    <script src="scripts/more.js"></script>
    <script src="scripts/search.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
    <div class="header">
        <h1>LagerC database</h1>
        </div>
    <div class="container">
    <input type="text" id="search" size="30" placeholder="Søg produkt">
    <form align="center" method="post" action="http://localhost:8888/Git-hub/Lager-system/data/Lagerc/site.php">
        
        <p align="center" id="næsti"><b>Skriv ny vægt:</b></p>
        <p id=næst>Ny vægt:<br />
        <input id=næst type="text" name="vægt" size="30" />
        </p>
        <p id=næst>ID på kolonne:<br />
        <input id=næst type="number" name="c_id" size="10" />
        </p>
        <input id=skift type="submit" name="submit" onClick="window.location.reload()"/>
        </form>
        
       <?php
        /* This code gets the data from mysql and writes a Json file 
        wich is used to show the data with javascript*/
        require_once("mysql\mysqli_connect.php");


        $response = array();
        $posts = array();
        //Selecting data i want from mysql
        $sql = "SELECT * FROM lagerc";
        //Connecting to mysql and running a while statement to get all the data
        if($result = mysqli_query($dbc, $sql)){
            while($row = mysqli_fetch_assoc($result)){
                //Giving names to the data (Some danish in there ignore it) also i put it in my posts array.
                $posts["Id"] = $row["c_id"];
                $posts["Produkt"] = $row["produk"];
                $posts["Vægt-kg"] = $row["vægt"];
                $posts["Batch-NR"] = $row["batch"];
                $posts["Lokation"] = strtoupper($row["lokale"]);
                $posts["Modtagelse"] = $row["modt"];
                $posts["Udløbs-dato"] = $row["udløb"];
                $posts["Ny-udløb"] = $row["ny"];
                $posts["Karantæne"] = $row["kara"];
                $posts["Dato"] = $row["dato"];
                //pushing all the data together so i can compress it to a json file
                array_push($response, $posts);
                

            }
            
        }
        if(isset($_POST["submit"])){ //Update til næste produkt
            $vægt = $_POST["vægt"];
            $id = $_POST["c_id"];
            $query1 = "UPDATE lagerc SET vægt = '$vægt' WHERE c_id = '$id'";
            if(mysqli_query($dbc, $query1)){
                echo "Updated";
            }
            else {
                echo "failed".mysqli_error($dbc);
            }
    }
        //Here i make my json file wich saves in the "scripts" folder
        $myPath = "scripts/";
        $myFile = $myPath."results.json";
        $fp = fopen($myFile, 'w');
        fwrite($fp, json_encode($response));
        fclose($fp);



    mysqli_close($dbc);
 
?>
 
    </div>

</body>
</html>