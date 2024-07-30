export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  export function msgTexto(IMC) {
    if (IMC < 17) {
      return "Muito abaixo do peso";
    } else if (IMC < 18.49) {
      return "Abaixo do peso";
    } else if (IMC < 24.99) {
      return "Peso normal";
    } else if (IMC < 29.99) {
      return "Acima do peso";
    } else if (IMC < 34.99) {
      return "Obesidade grau 1";
    } else if (IMC < 39.99) {
      return "Obesidade grau 2 (Severa)";
    } else {
      return "Obesidade grau 3 (Mórbida)";
    }
  }