import { GeneratorInterfaz } from "./generator.interfaz";

export class ComponentWrapperModel implements GeneratorInterfaz {

    constructor() { }

    public generate(children: string = ''): string {
        return `${children}`;
    }
}
