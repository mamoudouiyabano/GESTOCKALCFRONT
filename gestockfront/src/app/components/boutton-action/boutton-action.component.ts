import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;
  @Input()
  isTransactionVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  @Output()
  clickEvent1 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

  bouttonTransactionClick(): void {
    this.clickEvent1.emit();
  }


}
