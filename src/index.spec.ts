import{Calculadora} from './Calculadora'
import { ListaNumerica } from './ListaNumerica';

describe("classe Matematica", () => {
	let calc = new Calculadora();
	test("Somar dois números", () => {
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

	test("multiplicar dois números", () => {
		expect(calc.multiplicacao(10, 2)).toBe(20);
		expect(calc.multiplicacao(0, 10)).toBe(0);
		expect(calc.multiplicacao(-3, 4)).toBe(-12);
		expect(calc.multiplicacao(-2, -5)).toBe(10);
	});
})



describe("classe ListaNumerica", () => {
    test("validar quantidade de elementos", () => {
		expect(new ListaNumerica([10000, 20000, 30000]).possuiQuantidadeValida()).toBe(false);
        expect(new ListaNumerica([1000, 2000, 30000, 40000]).possuiQuantidadeValida()).toBe(true);
		expect(new ListaNumerica([10000, 20000, 30000, 40000, 50000, 60000, 70000]).possuiQuantidadeValida()).toBe(true);
        expect(new ListaNumerica([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 99999]).possuiQuantidadeValida()).toBe(true);
        expect(new ListaNumerica([10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 99999, 50000]).possuiQuantidadeValida()).toBe(false);
    });

    test("validar valores dos elementos", () => {
        expect(new ListaNumerica([10000, 20000, 30000, 9999]).possuiValoresValidos()).toBe(false);
        expect(new ListaNumerica([10000, 20000, 30000, 40000]).possuiValoresValidos()).toBe(true);
		expect(new ListaNumerica([10000, 20000, 30000, 50000]).possuiValoresValidos()).toBe(true);
        expect(new ListaNumerica([10000, 20000, 30000, 99999]).possuiValoresValidos()).toBe(true);
        expect(new ListaNumerica([52208, 27270, 65319, 100000]).possuiValoresValidos()).toBe(false);
    });

    test("validar lista completa", () => {
        expect(new ListaNumerica([52208, 27270, 65319, 10294]).isValid()).toBe(true);
        expect(new ListaNumerica([52208, 27270, 65319]).isValid()).toBe(false);
        expect(new ListaNumerica([52208, 27270, 65319, 10294, 14531, 15968, 70787, 32033, 42199, 57235, 98958]).isValid()).toBe(false);
        expect(new ListaNumerica([52208, 27270, 65319, 9999, 98958]).isValid()).toBe(false);
        expect(new ListaNumerica([52208, 27270, 65319, 100000, 98958]).isValid()).toBe(false);
		expect(new ListaNumerica([52208, 27270, 65319, 99999, 98958]).isValid()).toBe(true);
    });
});
