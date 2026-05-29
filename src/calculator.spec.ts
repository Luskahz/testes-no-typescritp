import { Calculadora } from "./Calculadora";

describe("Plano de Teste - Classe Calculadora", () => {
  let calc = new Calculadora();
  test.each("Somar dois números", () => {


    expect(calc.soma(10, 2)).toBe(12);
    expect(calc.soma(11, 3)).toBe(14);
    expect(calc.soma(0, 5)).toBe(5);
    expect(calc.soma(-2, 8)).toBe(6);
    expect(calc.soma(-4, -6)).toBe(-10);
  });

  test("subtrair dois números", () => {
    expect(calc.subtracao(10, 2)).toBe(8);
    expect(calc.subtracao(5, 10)).toBe(-5);
    expect(calc.subtracao(0, 7)).toBe(-7);
    expect(calc.subtracao(-3, -2)).toBe(-1);
  });

  test("dividir dois números", () => {
    expect(calc.divisao(10, 2)).toBe(5);
    expect(calc.divisao(9, 3)).toBe(3);
    expect(calc.divisao(5, 2)).toBe(2.5);
    expect(calc.divisao(-10, 2)).toBe(-5);
  });

  test("divisao por zero", () => {
    let errorMessage = "";
    try {
      calc.divisao(6, 0);
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
    expect(errorMessage).toBe("Divisao por zero");
  });

  test("Dividir por zero", () => {
    expect(calc.divisao(6, 0)).toBeNull;
  });

  test("multiplicar dois números", () => {
    expect(calc.multiplicacao(10, 2)).toBe(20);
    expect(calc.multiplicacao(0, 10)).toBe(0);
    expect(calc.multiplicacao(-3, 4)).toBe(-12);
    expect(calc.multiplicacao(-2, -5)).toBe(10);
  });
});
