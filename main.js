var btnVerMais = document.getElementById('btn-ver-mais');
var btnVerMenos = document.getElementById('btn-ver-menos');
var resumoTexto = document.querySelector('.resumo-texto');
var resumoTextoCompleto = document.querySelector('.resumo-texto-completo');
var resumo = document.querySelector('.resumo');
var discussoes = document.querySelector('.discussoes');

btnVerMais.addEventListener('click', function () {
  if (resumoTexto.style.display === 'block') {
    resumoTexto.style.display = 'none';
    resumoTextoCompleto.style.display = 'block';
    resumo.style.height = '26.5rem';
    btnVerMenos.style.display = 'block';
    discussoes.style.top = '76rem';
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
  } else {
    resumoTexto.style.display = 'block';
  }
});
