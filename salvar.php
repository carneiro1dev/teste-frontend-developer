<?php

include 'conexao.php';

// Limpa caracteres especiais que poderiam quebrar ou atacar o banco de dados
$nome = $conexao->real_escape_string($_POST['nome']);
$email = $conexao->real_escape_string($_POST['email']);
$telefone = $conexao->real_escape_string($_POST['telefone']);
$mensagem = $conexao->real_escape_string($_POST['mensagem']);

$sql = "INSERT INTO contatos (nome, email, telefone, mensagem)
        VALUES ('$nome', '$email', '$telefone', '$mensagem')";

if ($conexao->query($sql)) {
        // Redirecionamento com mensagem de envio e voltar para o inicio com scroll
        header('Location: index.html?sucesso=1#contato');
} else {
        echo "Erro ao salvar: " . $conexao->error;
}

$conexao->close();
exit;

?>