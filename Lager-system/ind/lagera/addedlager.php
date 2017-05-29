
<html>
<head>
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="addedlagercss.css">
</head>
<body>

<h1 id="head">Tilføj lagerA</h1>
<?php
if(isset($_POST["submit"])){
    $data_miss = array();   
    if(empty($_POST["produk"])){
        $data_miss[] = "Produktnavn";
    }else{
        $produk = trim($_POST["produk"]);
    }if(empty($_POST["vægt"])){
        $data_miss[]="Vægt i kg";
    }else {
        $vægt = trim($_POST["vægt"]);
    }if(empty($_POST["lokale"])){
        $data_miss[] = "Lokation";
    }else {
        $lokale = trim($_POST["lokale"]);
    }if(empty($_POST["modt"])){
        $data_miss[] = "Modtaglse";
    }else {
        $modt = trim($_POST["modt"]);
    }if(empty($_POST["udløb"])){
        $data_miss[] = "Udløb";
    }else {
        $udløb = trim($_POST["udløb"]);
    }if(empty($_POST["ny"])){
        $data_miss[] = "Ny Udløb";
    }else {
        $ny = trim($_POST["ny"]);
    }if(empty($_POST["batch"])){
        $data_miss[] = "Batch";
    }else {
        $batch = trim($_POST["batch"]);
    }if(empty($_POST["kara"])){
        $data_miss[] = "Karantæne";
    }else {
        $kara = trim($_POST["kara"]);
    }
    
    if(empty($data_miss)){
        require_once("../mysql/mysqli_connect.php");
        if($stmt = mysqli_prepare($dbc, "INSERT INTO lagera (kara, batch, modt, udløb, ny, lokale, vægt, produk) VALUES (?,?,?,?,?,?,?,?)")){
            mysqli_stmt_bind_param($stmt, "ssssssss", $kara, $batch, $modt, $udløb, $ny, $lokale, $vægt, $produk);
            mysqli_stmt_execute($stmt);
        }
        
        
        else{
            echo "error" . mysqli_error($dbc);
        }
        $affected_rows = mysqli_stmt_affected_rows($stmt);
        if($affected_rows == 1){
            echo 'Rengøring tilføjet';
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);
        }else {
            echo "Error";
            mysqli_stmt_close($stmt);
            mysqli_close($dbc);

        }
        
    }      
        else {
        echo "Vigtig information mangler!<br />";
        foreach ($data_miss as $miss){
            echo "$miss <br />";
        }
    }
   
}


?>

<form  method="post">
<h2 id="over"><b>Skriv ind her</b></h2>
<p id="over"><b>Produktnavn:</b><br />
<input type="text"  name="produk" size="30" placeholder="produkt" value="<?php if(!empty($_POST["produk"]) ){echo $produk;} ?>"/>
</p>
<p id="over"><b>Batch Nr:</b><br />
<input type="text" name="batch" size="30" value="<?php if(!empty($_POST["batch"]) ){echo $batch;} ?>"/>
</p>
<p id="over"><b>Vægt i KG:</b><br />
<input type="text" name="vægt" size="30" value="<?php if(!empty($_POST["vægt"]) ){echo $vægt;} ?>"/>
</p>
<p id="over" class="upper"><b>Lokation:</b><br />
<input type="text" style="text-transform:uppercase" name="lokale" size="30" value="<?php if(!empty($_POST["lokale"]) ){echo $lokale;} ?>"/>
</p>
<p id="over"><b>Modt. dato:</b><br />
<input type="text" name="modt" size="30" value="<?php if(!empty($_POST["modt"]) ){echo $modt;} ?>"/>
</p>
<p id="over"><b>Udløbs dato:</b><br />
<input type="text" name="udløb" size="30" value="<?php if(!empty($_POST["udløb"]) ){echo $udløb;} ?>"/>
</p>
<p id="over"><b>Ny udløb:</b><br />
<input type="text" name="ny" size="30" value=" "/>
</p>
<p id="over"><b>Karantæne:</b><br />
<input type="text" name="kara" size="30" value="Nej"/>
</p>

<p>
<input id="btn" type="submit" name="submit"  value="Tilføj"/>
</p>
</form>
</body>
</html>