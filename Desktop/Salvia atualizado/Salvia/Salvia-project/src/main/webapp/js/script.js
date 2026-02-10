document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        try {
            const resposta = await fetch('http://localhost:8080/emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    mensagem: mensagem
                })
            });

            if (resposta.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar mensagem.');
            }
        } catch (erro) {
            console.error(erro);
            alert('Erro na conexão com a API.');
        }
    });
});
