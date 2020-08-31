import { GeneratorTemplatesInterface } from './generator-templates.interface';

const componentTs: string = 
`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
    //Models
    form: FormGroup;

    // Inject services
    constructor(
        private formBuilder: FormBuilder
    ) { }

    // On component init
    ngOnInit(): void {
        this.form = this.formBuilder.group({ 
            @children 
        });
    }

    // Custom events
    onSubmit(): void {
        console.log(this.form.value);
    }
}`;

const formBuilderTs: string = `
            @name: this.formBuilder.control('', [ @children ]),`;

const requiredFormTs: string = 'Validators.required';

const formHtml: string = 
`<form name="@name" [formGroup]="form" (ngSubmit)="onSubmit()">
    @children
    <div class="form-group">
        <button type="submit">Send</button>
    </div>
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
const inputNumberHtml: string = `
        <input
            id="@id"
            formControlName="@name"
            type="number"
            class="form-control"
            placeholder="Enter the @label"
        />`;

export const GeneratorTemplates: GeneratorTemplatesInterface = {
    componentTs,
    formBuilderTs,
    requiredFormTs,
    formHtml,
    formGroupHtml,
    inputTextHtml,
    inputNumberHtml
}