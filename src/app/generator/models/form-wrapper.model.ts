import { GeneratorInterfaz } from "./generator.interfaz";

export class FormWrapperModel implements GeneratorInterfaz {

    protected name: string;

    constructor() { }

    public generate(children: string = ''): string {
        return `<form name="${this.name}" [formGroup]="form">
                    ${children}
                </form>`;
    }
}
