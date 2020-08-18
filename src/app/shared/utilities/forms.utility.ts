import { FormGroup, FormControl } from '@angular/forms';

export class FormUtility {
  /**
   * Trigger form validations
   * @param formGroup
   */
  static validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field: string) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
