export class Calculadora {
  public soma(n1: number, n2: number) {
    return n1 + n2;
  }
  public subtracao(n1: number, n2: number) {
    return n1 - n2;
  }

  public divisao(n1: number, n2: number): number {
    if (n2 === 0) throw new Error("Divisão por zero");
    return n1 / n2;
  }

  public divisaoTratada(n1: number, n2: number): number | null {
    try {
      if (n2 === 0) {
        throw new Error("Divisão por zero");
      }
      return n1 / n2;
    } catch (error) {
      return null;
    }
  }

  public multiplicacao(n1: number, n2: number) {
    return n1 * n2;
  }
}
