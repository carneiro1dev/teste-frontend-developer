<?php

$servidor = "sql211.infinityfree.com";
$usuario = "if0_41680472";
$senha = "rian3616";
$banco = "if0_41680472_academia";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}

$conexao->set_charset("utf8");

?>