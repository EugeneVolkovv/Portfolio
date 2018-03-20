<?php

$name= $_POST["name"];
$phone= $_POST["phone"];
 
$EmailTo= "vozhenek@mail.ru";
$Subject= "Получено новое сообщение";
// Подготовка шапки сообщения
$Body.= "Имя: ";
$Body.= $name;
$Body.= "\n";

$Body.= "Номер телефона: ";
$Body.= $phone;
$Body.= "\n";
 
// посылаем сообщение

$success= mail($EmailTo, $Subject, $Body, "From:".$phone);
//при тесте удалить
$success = 1;
// редирект
//при тесте удалить = 1
if($success = 1){
 echo"success";
}else{
 echo"invalid";
}
 
?>