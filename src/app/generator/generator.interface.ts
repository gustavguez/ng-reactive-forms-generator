import { GeneratorFormInterface } from './generator-form.interface';
import { GeneratorTemplatesInterface } from './generator-templates.interface';

export interface GeneratorInterface {
    forms?: GeneratorFormInterface[],
    templates?: GeneratorTemplatesInterface
}