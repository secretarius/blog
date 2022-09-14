import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faSearch = faSearch;

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  myControl = new FormControl();
  constructor() {}

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
