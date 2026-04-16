// Implementação do Scroll para compatibilidade total
document.querySelectorAll('a[href^="#"]').forEach(function(link) {   // Seleciona apenas os links que começam com #
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Cancela o pulo brusco nativo do html

        const id = link.getAttribute("href");  // Pega o valor do link para saber onde ir

        const destino = document.querySelector(id);

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

function clicar(numero) {
    const cards = document.querySelectorAll(".card");
    const descricao = document.getElementById('descricao');

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('ativo');
    }

    cards[numero].classList.add('ativo');

    if (numero === 0) {
        descricao.innerText = 'O treino de força é essencial para uma vida longa e saudável. No nosso espaço de musculação, você encontra um ambiente preparado para todos os níveis, do iniciante ao avançado. Com o suporte dos nossos instrutores, você garante a execução correta dos exercícios para fortalecer músculos e articulações, prevenindo lesões e acelerando o seu metabolismo com segurança.'
    }

    if (numero === 1) {
        descricao.innerText = 'Um plano feito sob medida para a sua rotina. Com o nosso Personal Trainer, você tem hora marcada com o seu sucesso. Monitoramento constante, ajustes em tempo real e o suporte necessário para superar seus limites com estratégia e inteligência. Transforme seu esforço em conquistas reais.'
    }

    if (numero === 2) {
        descricao.innerText = 'Mais do que um treino, uma preparação para a vida. O treinamento funcional foca no fortalecimento do core e na melhoria da postura e do equilíbrio, facilitando suas atividades diárias e prevenindo dores. É a escolha ideal para quem busca um corpo forte, flexível e resiliente, respeitando os limites e a biomecânica de cada aluno.'
    }
}

const form = document.getElementById('formulario');
const msg = document.getElementById('mensagem');

// Verifica se existe o termo 'sucesso' na URL para mostrar o feedback
if (window.location.search.includes('sucesso=1')) {
    msg.style.color = 'green';
    msg.innerText = 'Mensagem enviada com sucesso!'

    setTimeout(function() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(function(){
            msg.innerText = '';
        }, 500);

        // Evita que a mensagem de sucesso reapareça se o usuário atualizar (F5)
        window.history.replaceState({}, document.title, window.location.pathname);
    
    }, 3000);
}

form.addEventListener('submit', function(e) {

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let mensagem = document.getElementById('campoMensagem').value.trim();

    let erro = false;
    msg.innerText = '';

    if (!nome || !email || !telefone || !mensagem) {
        msg.style.color = 'red';
        msg.innerText = 'Preencha todos os campos!';
        erro = true;
    }

    else if (!email.includes('@') || !email.includes('.')) {
        msg.style.color = 'red';
        msg.innerText = 'Email inválido!';
        erro = true;
    }

    else if (isNaN(telefone) || telefone.length < 11 || telefone.length > 12) {
        msg.style.color = 'red';
        msg.innerText = 'Telefone inválido! Digite o DDD + Número (ex: 11999999999)';
        erro = true;
    }

    if (erro) {
        e.preventDefault();
    }

});

