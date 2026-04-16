# Projeto Academia PowerFit - Teste Tecnico Ellos Design

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Estagio Frontend / Full-Stack na agencia Ellos Design. Trata-se de uma Landing Page focada no nicho fitness, com integracao completa entre interface e banco de dados.

## Demonstracao Online
O projeto esta hospedado e funcional no link abaixo:
http://academiapowerfit.infinityfreeapp.com/

## Tecnologias Utilizadas
- Frontend: HTML5, CSS3 e JavaScript Vanilla.
- Backend: PHP para processamento e persistencia de dados.
- Banco de Dados: MySQL.

## Funcionalidades e Diferenciais
- Layout responsivo adaptado para dispositivos moveis e desktops.
- Navegacao com rolagem suave (Smooth Scroll) em todos os links ancoras.
- Galeria de servicos com troca dinamica de conteudo via JavaScript.
- Formulario de contato com validacao de campos (Client-side e Server-side).
- Tratamento de seguranca contra SQL Injection utilizando real_escape_string no PHP.
- Manipulacao de historico (replaceState) para limpeza de URL apos envio do formulario.

## Instrucoes para Execucao Local
O arquivo conexao.php encontra-se atualmente configurado com as credenciais do servidor de hospedagem (InfinityFree). Para executar o projeto localmente via XAMPP:
1. Altere as variaveis no arquivo conexao.php para as configuracoes do seu ambiente local (ex: localhost, root, senha vazia).
2. No PHPMyAdmin, crie um banco de dados chamado academia e importe o arquivo banco.sql presente na raiz deste projeto.
3. Acesse o projeto via navegador em http://localhost/academia.

## Estrutura de Arquivos
- index.html: Estrutura principal da pagina.
- style.css: Estilizacao, media queries e correcoes de contraste.
- script.js: Logica de interatividade e rolagem suave.
- conexao.php: Configuracao da conexao com o banco de dados (Producao).
- salvar.php: Script de recepcao, tratamento e gravacao dos dados.
- banco.sql: Script SQL para criacao das tabelas.

---
Candidato: Rian carneiro Pereira
Email: rian.carneiro124@gmail.com