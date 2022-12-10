import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss']
})
export class TypeSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() themeChange = new EventEmitter<string | null>();

  themeSelected(theme:Event){
    const input = theme.target as HTMLInputElement
    const value= input.value 
    this.themeChange.emit(value)
  }
}
