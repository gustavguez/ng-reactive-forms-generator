import { InputTypeEnum } from '../input-type.enum';
import { GeneratorInterfaz } from '../generator.interfaz';

export abstract class InputElementModel implements GeneratorInterfaz {
  protected id: string;
  protected readonly type: InputTypeEnum;
  protected name: string;

  public abstract generate(children: string): string;
}
