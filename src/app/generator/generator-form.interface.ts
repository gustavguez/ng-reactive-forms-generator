import { GeneratorFormTypesEnum } from "./generator-form-types.enum";
import { GeneratorFormValidationsEnum } from "./generator-form-validations.enum";

export interface GeneratorFormInterface {
    id: string;
    name: string,
    label: string,
    type?: GeneratorFormTypesEnum,
    validations: GeneratorFormValidationsEnum[]
}