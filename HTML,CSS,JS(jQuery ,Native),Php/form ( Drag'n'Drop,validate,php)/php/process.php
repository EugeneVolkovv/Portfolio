<?php
$name= $_POST["name"];
$lastName= $_POST["lastNAme"];
$log= $_POST["log"];ry
$sel2= $_POST["sel2"];
$country= $_POST["country"];
 
$EmailTo= "vozhenek@mail.ru";
$Subject= "Получено новое сообщение";
 
// Подготовка шапки сообщения
$Body.= "Имя: ";
$Body.= $name;
$Body.= "\n";
 
$Body.= "lastName: ";
$Body.= $log;
$Body.= "\n";
 
$Body.= "Логин: ";
$Body.= $log;
$Body.= "\n";

$Body.= "Город: ";
$Body.= $sel2;
$Body.= "\n";

$Body.= "Страна: ";
$Body.= $country;
$Body.= "\n";
 
// посылаем сообщение
$success= mail($EmailTo, $Subject, $Body, "From:".$log);
 
// редирект
if($success){
 echo"success";
}else{
 echo"invalid";
}
 
?>
