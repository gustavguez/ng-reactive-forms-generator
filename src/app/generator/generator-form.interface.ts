import { GeneratorFormTypesEnum } from "./generator-form-types.enum";

export interface GeneratorFormInterface {
    id: string;
    name: string,
    label: string,
    type?: GeneratorFormTypesEnum
}