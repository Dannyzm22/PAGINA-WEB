function realizarOperaciones() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const resultados = document.getElementById('resultados');

  if (isNaN(n1) || isNaN(n2)) {
    resultados.innerHTML = "Por favor ingrese ambos números.";
    return;
  }

  let output = "";

  for (let i = 1; i <= 5; i++) {
    switch (i) {
      case 1:
        output += `<p>1. SUMA: ${n1} + ${n2} = ${n1 + n2}</p>`;
        break;
      case 2:
        output += `<p>2. RESTA: ${n1} - ${n2} = ${n1 - n2}</p>`;
        break;
      case 3:
        output += `<p>3. MULTIPLICACIÓN: ${n1} × ${n2} = ${n1 * n2}</p>`;
        break;
      case 4:
        if (n2 !== 0) {
          output += `<p>4. DIVISIÓN: ${n1} ÷ ${n2} = ${n1 / n2}</p>`;
        } else {
          output += `<p>4. DIVISIÓN: No se puede dividir entre 0.</p>`;
        }
        break;
      case 5:
        if (n2 !== 0) {
          output += `<p>5. MÓDULO: ${n1} % ${n2} = ${n1 % n2}</p>`;
        } else {
          output += `<p>5. MÓDULO: No se puede calcular el módulo con 0.</p>`;
        }
        break;
    }
  }

  resultados.innerHTML = output;
}
