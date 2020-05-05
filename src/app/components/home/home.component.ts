import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  public bookTitle: string = "Die Reise zum Erdmittelkern";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public books: Book[] = [];

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }

  public transformBookTitle(title): string {
    return "Buch: " + title;
  }

  public addNewBook() {
    //this.showAlert = false;
    const book = new Book();
    book.title = this.newBookTitle
    this.books.push(book);
    this.storageService.setBooks(this.books);
    this.newBookTitle = "";
  }

}
