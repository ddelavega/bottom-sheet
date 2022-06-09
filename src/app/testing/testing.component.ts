import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularBottomSheetConfig } from '../utility/angular-bottom-sheet.interface';
import { AngularBottomSheetComponent } from '../component/angular-bottom-sheet.component';
import { AngularBottomSheetService } from '../utility/angular-bottom-sheet.service';
import { first, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  itemsAbm = [];

  options: AngularBottomSheetConfig;
  @ViewChild('test', { static: true }) testing: AngularBottomSheetComponent;
  constructor(private demoAbmService: AngularBottomSheetService) {
    this.getAllAbmItems();

   }

  ngOnInit() {
    this.options = {
      title: "Angular Bottom Sheet",
      enableCloseButton: true,
      darkTheme: false
    }
    this.open();
    this.getAllAbmItems();
  }

  toggle() {
    this.testing.toggle()
  }

  open() {
    this.testing.open();
  }

  close() {
    this.testing.close();
  }

  toggleDarkTheme() {
    this.open();
    this.testing.toggleDarkTheme()
  }

  toggleCloseButton() {
    this.open();
    this.testing.toggleCloseButton();
  }


  getAllAbmItems() {
    this.demoAbmService.getAllAbmItems()
      .pipe(first(), timeInterval())
      .subscribe({
        next: (data: any) => {
          this.itemsAbm = data.value;
          console.log('itemsAbm', this.itemsAbm);
        },
        error: error => {
          console.error('on error ', error);
        }
      });
  }


}
