<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once __DIR__ . "/class/Email.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (empty($name) && empty($phone) && empty($email) && empty($message)) {
        echo json_encode(['success' => 'false', 'message' => 'preencha todos os campos.']);
        exit;
    }

    $subject = 'Novo formulário enviado';
    $bodyMessage = "Nome: $name\nEmail: $email\nMensagem: $message";

    $emailSender = new Email();
    $response = $emailSender->sendEmail('luiz.amaro90@gmail.com', $subject, $bodyMessage);

    if ($response === true) {
        echo json_encode([
            'success' => false,
            'message' => 'Não foi póssivel fazer o envio do email'
        ]);
        exit;
    }

    echo json_encode([
        'success' => true,
        'message' => 'Email enviado com sucesso'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Requisição inválida!'
    ]);
    exit;
}
