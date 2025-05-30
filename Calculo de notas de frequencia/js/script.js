const numTrabalhosSelect = document.getElementById('numTrabalhos');
const tr2Input = document.getElementById('tr2');
const labelTr2 = document.getElementById('labelTr2');
const resultadoDiv = document.getElementById('resultado');
const statusDiv = document.getElementById('status');

function limparResultados() {
    resultadoDiv.textContent = '';
    statusDiv.textContent = '';
    statusDiv.className = 'status';
}

function validarNota(valor) {
    if (valor === '' || isNaN(valor)) return false;
    const num = parseFloat(valor);
    return num >= 0 && num <= 20;
}

numTrabalhosSelect.addEventListener('change', () => {
    if (numTrabalhosSelect.value === '1') {
        tr2Input.style.display = 'none';
        labelTr2.style.display = 'none';
        tr2Input.value = '';
    } else {
        tr2Input.style.display = 'block';
        labelTr2.style.display = 'block';
    }
    limparResultados();
});

document.getElementById('calcularBtn').addEventListener('click', () => {
    limparResultados();

    const numTrabalhos = numTrabalhosSelect.value;
    const t1 = document.getElementById('t1').value.trim();
    const t2 = document.getElementById('t2').value.trim();
    const tr1 = document.getElementById('tr1').value.trim();
    const tr2 = document.getElementById('tr2').value.trim();

    if (!validarNota(t1) || !validarNota(t2) || !validarNota(tr1)) {
        resultadoDiv.textContent = 'Insira notas válidas entre 0 e 20.';
        return;
    }

    let notaFinal = 0;

    if (numTrabalhos === '2') {
        if (!validarNota(tr2)) {
            resultadoDiv.textContent = 'Insira nota válida para trabalho 2.';
            return;
        }
        const mediaTestes = (parseFloat(t1) + parseFloat(t2)) / 2;
        const mediaTrabalhos = (parseFloat(tr1) + parseFloat(tr2)) / 2;
        notaFinal = mediaTestes * 0.6 + mediaTrabalhos * 0.4;
    } else {
        notaFinal = parseFloat(t1) * 0.4 + parseFloat(t2) * 0.4 + parseFloat(tr1) * 0.2;
    }

    resultadoDiv.textContent = `Nota final: ${notaFinal.toFixed(2)}`;

    if (notaFinal >= 14) {
        statusDiv.textContent = 'Status: Dispensado';
        statusDiv.classList.add('dispensado');
    } else if (notaFinal <= 9) {
        statusDiv.textContent = 'Status: Excluído';
        statusDiv.classList.add('excluido');
    } else {
        statusDiv.textContent = 'Status: Admitido';
        statusDiv.classList.add('admitido');
    }
});
