document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('formulario-modal');
    const abrirFormularioBtn = document.getElementById('abrir-formulario');
    const closeButton = document.querySelector('.close-button');
    const formContato = document.getElementById('form-contato');

    // Abrir o modal
    if (abrirFormularioBtn) {
        abrirFormularioBtn.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'block';
            }
        });
    }

    // Fechar o modal pelo botão X
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Fechar o modal clicando fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            if (modal) {
                modal.style.display = 'none';
            }
        }
    });

    // Lidar com o envio do formulário
    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            const nome = document.getElementById('nome').value;
            const celular = document.getElementById('celular').value;
            const email = document.getElementById('email').value;

            // Aqui você pode adicionar a lógica para enviar os dados do formulário
            // Por exemplo, usando fetch() para enviar a um backend ou a um serviço de email.
            console.log('Formulário enviado:');
            console.log('Nome:', nome);
            console.log('Celular:', celular);
            console.log('Email:', email);

            alert('Obrigado pelo seu contato! Responderemos em breve.');
            
            if (modal) {
                modal.style.display = 'none'; // Fecha o modal após o envio
            }
            formContato.reset(); // Limpa o formulário
        });
    }

    // Smooth scroll para links de navegação
    document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

     // Smooth scroll para o botão CTA no hero
    const heroCtaButton = document.querySelector('#hero .cta-button[href^="#"]');
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

