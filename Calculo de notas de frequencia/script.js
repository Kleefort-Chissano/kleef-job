// Esconde o segundo trabalho se só 1 for selecionado
document.getElementById('numTrabalhos').addEventListener('change', function () {
  const isTwo = this.value === '2';
  document.getElementById('tr2').style.display = isTwo ? 'block' : 'none';
  document.getElementById('labelTr2').style.display = isTwo ? 'block' : 'none';
});

// Cálculo da nota
document.getElementById('calcularBtn').addEventListener('click', () => {
  const t1 = parseFloat(document.getElementById('t1').value) || 0;
  const t2Input = document.getElementById('t2').value;
  const t2 = t2Input ? parseFloat(t2Input) : 0;
  const tr1 = parseFloat(document.getElementById('tr1').value) || 0;
  const numTrabalhos = document.getElementById('numTrabalhos').value;

  let notaFinal = 0;

  if (numTrabalhos === '2') {
    const tr2 = parseFloat(document.getElementById('tr2').value) || 0;
    const mediaTestes = t2Input ? (t1 + t2) / 2 : t1;
    const mediaTrabalhos = (tr1 + tr2) / 2;
    notaFinal = mediaTestes * 0.6 + mediaTrabalhos * 0.4;
  } else {
    notaFinal = 0.4 * t1 + 0.4 * t2 + 0.2 * tr1;
  }

  const resultado = document.getElementById('resultado');
  const status = document.getElementById('status');

  resultado.textContent = `Nota final: ${notaFinal.toFixed(2)}`;

  if (notaFinal >= 14) {
    status.textContent = 'Status: Dispensado';
    status.style.color = 'green';
  } else if (notaFinal <= 9) {
    status.textContent = 'Status: Excluído';
    status.style.color = 'red';
  } else {
    status.textContent = 'Status: Admitido';
    status.style.color = 'orange';
  }
});
