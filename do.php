<?php
$db = new SQLite3("test.db");
if ( $_POST[ 'data' ] ) {
  $user = $_POST['user'];
  $saveData = $_POST['data'];
  $db-> exec("CREATE TABLE IF NOT EXISTS sheet ( user  text PRIMARY KEY, data text)");
  try {
    $db -> exec("INSERT OR REPLACE INTO sheet (user,data) VALUES ('$user','$saveData')");
  }
  catch (Exception $exception){
    echo json_encode("Error");
  } 
  echo json_encode("Worked");
}
if ( $_POST[ 'load' ] ) {
  $user = $_POST['load'];
   $lastrow = $db -> query("SELECT data FROM sheet WHERE user = '$user'");
  while ( $row = $lastrow->fetchArray( SQLITE3_ASSOC ) ) {
    echo json_encode($row[ "data" ]);
  } 
}
$db->close();
?>
