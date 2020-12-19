<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$formName = $_POST['formName'];
$theme = $_POST['theme'];
$email = $_POST['email'];
$message = $_POST['message'];

if($formName == "subscribe") {
    $title = "Новая подписка Universal";
    $body = "
    <h2>Новая подписка</h2>
    <b>E-mail:</b> $email
    ";
}elseif ($formName == "modalContacts") {
    $title = "Новый запрос 'Обратная связь' Universal";
    $body = "
    <h2>Новый запрос</h2>
    <b>Тема:</b> $theme<br>
    <b>E-mail:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
// $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'dmitrii4webstart@gmail.com'; // Логин на почте
    $mail->Password   = 'simplepass'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('dmitrii4webstart@gmail.com', 'Dmitrii Burdin'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('burdms@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header ('Location: thanks.html');