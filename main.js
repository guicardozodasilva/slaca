var btnVerMais = document.getElementById('btn-ver-mais');
var btnVerMenos = document.getElementById('btn-ver-menos');
var btnCriarTopico = document.getElementById('btn-criar-topico');
var btnEnviarFeedback = document.getElementById('btn-enviar-feedback');
var btnCriarNovoTopico = document.getElementById('btn-criar-novo-topico');
var resumoTexto = document.querySelector('.resumo-texto');
var resumoTextoCompleto = document.querySelector('.resumo-texto-completo');
var resumo = document.querySelector('.resumo');
var discussoes = document.querySelector('.discussoes');
var rodape = document.querySelector('.rodape');
var menu = document.querySelector('.menu');
var containerCriarTopico = document.querySelector('.container-criar-topico');
var containerEnviarFeedback = document.querySelector(
  '.container-enviar-feedback',
);
var pergunta = document.querySelector('.pergunta');
var pergunta2 = document.querySelector('.pergunta2');
var containerFeedbackEnviado = document.querySelector(
  '.container-feedback-enviado',
);

btnVerMais.addEventListener('click', function () {
  if (resumoTexto.style.display === 'block') {
    resumoTexto.style.display = 'none';
    resumoTextoCompleto.style.display = 'block';
    resumo.style.height = '26.5rem';
    btnVerMenos.style.display = 'block';
    discussoes.style.top = '76rem';
    rodape.style.top = '32rem';
    menu.style.height = '164rem';
  } else {
    resumoTexto.style.display = 'block';
  }
});

btnVerMenos.addEventListener('click', function () {
  if (resumoTextoCompleto.style.display === 'block') {
    resumoTextoCompleto.style.display = 'none';
    resumoTexto.style.display = 'block';
    resumo.style.height = '11.813rem';
    btnVerMenos.style.display = 'none';
    discussoes.style.top = '62rem';
    rodape.style.top = '18rem';
    menu.style.height = '150rem';
  } else {
    resumoTextoCompleto.style.display = 'block';
  }
});

btnCriarTopico.addEventListener('click', function () {
  if (containerCriarTopico.style.display === 'block') {
    containerCriarTopico.style.display = 'none';
    containerEnviarFeedback.style.display = 'block';
    pergunta.style.top = '2rem';
    pergunta2.style.top = '4rem';
    discussoes.style.height = '69rem';
    rodape.style.top = '26rem';
    menu.style.height = '158rem';
  } else {
    containerCriarTopico.style.display = 'block';
  }
});

btnEnviarFeedback.addEventListener('click', function () {
  if (containerEnviarFeedback.style.display === 'block') {
    containerEnviarFeedback.style.display = 'none';
    containerFeedbackEnviado.style.display = 'block';
    pergunta.style.top = '0rem';
    pergunta2.style.top = '2rem';
    discussoes.style.height = '75rem';
    rodape.style.top = '32rem';
    menu.style.height = '164rem';
  } else {
    containerCriarTopico.style.display = 'block';
  }
});

btnCriarNovoTopico.addEventListener('click', function () {
  if (containerFeedbackEnviado.style.display === 'block') {
    containerFeedbackEnviado.style.display = 'none';
    containerEnviarFeedback.style.display = 'block';
    pergunta.style.top = '2rem';
    pergunta2.style.top = '4rem';
    discussoes.style.height = '69rem';
    rodape.style.top = '26rem';
    menu.style.height = '158rem';
  } else {
    containerCriarTopico.style.display = 'block';
  }
});
