import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string;
  @Input() startOpen: boolean;

  accordionState: boolean;

  constructor() { }

  ngOnInit(): void {
    //Load as init with start
    this.accordionState = this.startOpen;
  }

  //Custom events
  onToggleAccordionState(): void {
    this.accordionState = !this.accordionState;
  }
}
