import { InputElementModel } from './input-element.model';
import { InputTypeEnum } from '../input-type.enum';

export class InputTextElementModel extends InputElementModel {
  protected readonly type: InputTypeEnum = InputTypeEnum.TEXT;

  constructor() {
    super();
  }

  public generate(children: string): string {
    throw new Error('Method not implemented.');
  }
}
