const ComponentWrapperTemplate = `
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
    }
`;
