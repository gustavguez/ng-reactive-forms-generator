import { GeneratorTemplatesInterface } from './generator-templates.interface';

const componentTs: string = `
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-example-form',
    templateUrl: './example-form.component.html',
})
export class ExampleComponent implements OnInit {
    // Inject services
    constructor(
        private formBuilder: FormBuilder
    ) { }

    // On component init
    ngOnInit(): void {
        @children
    }
}`;

const formHtml: string = `
<form name="@name" [formGroup]="form">
    @children
</form>`;

const formGroupHtml: string = `
    <div class="form-group">
        <label for="@id">@label</label>
        @children
    </div>`;

const inputTextHtml: string = `
        <input
            id="@id"
            formControlName="@name"
            type="text"
            class="form-control"
            placeholder="Enter the @label"
        />`;

export const GeneratorTemplates: GeneratorTemplatesInterface = {
    componentTs,
    formHtml,
    formGroupHtml,
    inputTextHtml
}