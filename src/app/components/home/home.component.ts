import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookTitle: string = "Die Reise zum Erdmittelkern";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public books: string[] = [
    "Die unendliche Geschichte",
    "Die drei ???",
    "Seekers",
    "Greg's Tagebuch",
    "Codename Blade",
    "Bodyguard"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    //this.showAlert = false;
    this.books.push(this.newBookTitle);
    this.newBookTitle = "";
  }

}
