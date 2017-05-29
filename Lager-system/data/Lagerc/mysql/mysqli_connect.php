<?php
DEFINE ("DB_HOST", "localhost");
DEFINE ("DB_USER", "root");
DEFINE ("DB_PASS", "1234ninja");
DEFINE ("DB_NAME", "lager");

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME)
OR die ("Problem with connection" . mysql_connect_error());

?>