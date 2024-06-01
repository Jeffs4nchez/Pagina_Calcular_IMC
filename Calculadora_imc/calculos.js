function calcularIMC() {
    const peso = document.getElementById('peso').value.trim();
    const altura = document.getElementById('altura').value.trim();
    
    if (peso === "" || altura === "") {
        alert("Por favor ingrese ambos valores.");
        return;
    }

    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100; // Convertir altura de cm a metros

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    const resultado = document.getElementById('resultado');
    let mensaje = `Tu IMC es ${imc.toFixed(2)}: `;

    if (imc < 18.5) {
        mensaje += "Bajo peso";
    } else if (imc < 24.9) {
        mensaje += "Normal";
    } else if (imc < 29.9) {
        mensaje += "Sobrepeso";
    } else if (imc < 34.9) {
        mensaje += "Obesidad Tipo I";
    } else if (imc < 39.9) {
        mensaje += "Obesidad Tipo II";
    } else if (imc < 49.9) {
        mensaje += "Obesidad Tipo III (Mórbida)";
    } else {
        mensaje += "Obesidad Tipo IV (Extrema)";
    }

    resultado.innerText = mensaje;
}
