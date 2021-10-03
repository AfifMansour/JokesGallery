import {Component, OnInit} from '@angular/core';
import {Joke} from './models/joke.model';
import jokesData from '../home/jokesjson.json';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Joke[] = jokesData;
  suggestedJokes: Joke[] = [];
  filteredJokes: Joke[];
  displayedColumns: string[];
  selectedJoke: Joke;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.data);
    this.displayedColumns = ['id', 'category', 'type'];
  }

  selectRow(templateRef, row: Joke): void {
    this.selectedJoke = row;
    this.suggestedJokes = [];

    this.filteredJokes = this.data.filter(x => x.type === this.selectedJoke.type);

    for (let i = 0; i < 3; i++) {
      this.suggestedJokes.push(this.filteredJokes[Math.floor(Math.random() * this.filteredJokes.length)]);
    }

    const dialogRef = this.dialog.open(templateRef, {
      height: '80%',
      width: '50%'
    });
  }
}
