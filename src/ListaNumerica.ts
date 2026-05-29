export class ListaNumerica {
    private atributo: number[];

    public constructor(atributo: number[]) {
        this.atributo = atributo;
    }

    public getAtributo(): number[] {
        return this.atributo;
    }

    public setAtributo(atributo: number[]): void {
        this.atributo = atributo;
    }

    public possuiQuantidadeValida(): boolean {
        return this.atributo.length >= 4 && this.atributo.length <= 10;
    }

    public possuiValoresValidos(): boolean {
        return this.atributo.every((valor) => valor >= 10000 && valor <= 99999);
    }

    public isValid(): boolean {
        return this.possuiQuantidadeValida() && this.possuiValoresValidos();
    }
}