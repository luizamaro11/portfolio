<?php

namespace App;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../config.php';

class Email
{
    private $mailer;

    public function __construct()
    {
        $this->mailer = new PHPMailer(true);

        try {
            $this->mailer->isSMTP();
            $this->mailer->Host = EMAIL_HOST;
            $this->mailer->SMTPAuth = true;
            $this->mailer->Username = EMAIL_USERNAME;
            $this->mailer->Password = EMAIL_PASSWORD;
            $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $this->mailer->Port = 587;

            $this->mailer->setFrom(EMAIL_FROM, EMAIL_FROM_NAME);

        } catch (Exception $e) {
            // Melhor lançar uma exceção para lidar melhor com erros
            throw new Exception("Erro ao configurar o PHPMailer: {$e->getMessage()}");
        }
    }

    public function sendEmail($to, $subject, $message)
    {
        try {
            $this->mailer->clearAddresses(); // limpa destinatários anteriores, caso
            $this->mailer->addAddress($to);
            $this->mailer->Subject = $subject;
            $this->mailer->Body = $message;
            $this->mailer->isHTML(true);

            return $this->mailer->send();
        } catch (Exception $e) {
            return "Erro ao enviar e-mail: {$this->mailer->ErrorInfo}";
        }
    }
}