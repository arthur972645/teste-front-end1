// eslint-disable-next-line no-use-before-define
const document = document;
function calcular() {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const IMC = peso / (altura * altura);

  if (IMC <= 16.9) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Muito abaixo do peso`;
  } else if (IMC >= 17 && IMC <= 18.4) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Abaixo do peso`;
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Peso normal`;
  } else if (IMC >= 25 && IMC <= 29.9) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - acima do peso`;
  } else if (IMC >= 30 && IMC <= 34.9) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Obesidade grau I`;
  } else if (IMC >= 35 && IMC <= 40) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Obesidade grau II`;
  } else if (IMC > 40) {
    document.getElementById('resultado').innerHTML = `${IMC.toFixed(2)} - Obesidade grau III`;
  }
}

// eslint-disable-next-line no-unused-vars
function verificarSeTemCoisa(event) {
  // eslint-disable-next-line no-use-before-define
  const alert = alert;
  if (event.keyCode === 13) {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura !== '' && peso !== '') {
      calcular();
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
