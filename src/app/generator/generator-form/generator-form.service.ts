import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GeneratorFormService {
    //Event emiters
    public onGenerateFinished: EventEmitter<{ ts: string, html: string }> = new EventEmitter();
    public onGenerateFormInputsRequested: EventEmitter<string[]> = new EventEmitter();

    //Triggers
    public emitGenerateFinished(ts: string, html: string): void {
        this.onGenerateFinished.emit({ ts, html });
    }
    public emitGenerateFormInputs(names: string[]): void {
        this.onGenerateFormInputsRequested.emit(names);
    }

}
