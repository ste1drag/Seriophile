import { Component } from '@angular/core';
import { TvShow } from "./domain/models/tvShow";
import {Genre} from "./domain/models/genres.enum";


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {

  public _listOfTvShows: TvShow[];


  constructor() {
    this._listOfTvShows = [
      {"id": 0, "name": 'Breaking Bad', "startDate": 2008, "endDate": 2013, "comments":[] , "genre": Genre.DRAMA , "imageSrc": 'https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg' ,"numberOfReviews": 0,"description": `A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.`},
      {"id": 1, "name": 'Better Call Saul', "startDate": 2015, "comments":[], "genre": Genre.DRAMA, "imageSrc": 'https://media.npr.org/assets/img/2022/07/25/bcs_609_gl_1005_0864-rt-d902123a10b2eb10167b5f916a21d3af0664b6c4.jpg', "numberOfReviews": 0, "description":''},
      {"id": 2, "name": 'Money Heist', "startDate": 2017,"endDate": 2021, "comments": [], "genre": Genre.ACTION, "imageSrc": 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg', "numberOfReviews": 0, "description": `An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.`},
      {"id": 3, "name": 'Juzni Vetar', "startDate": 2019, "comments":[], "genre": Genre.ACTION, "imageSrc":'https://m.media-amazon.com/images/M/MV5BODQxNTk5NWMtNjZmMS00YjIzLWI2ODItYzJjMmJlZjBmYzZjXkEyXkFqcGdeQXVyODIzOTUzOTI@._V1_.jpg', "numberOfReviews": 0, "description":`Petar Maras continues his expansion in criminal underworld while saving his family.`},
      {"id": 4, "name": 'The Last Dance', "startDate": 2020, "endDate": 2020, "comments":[], "genre": Genre.SPORTS, "imageSrc": 'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', "numberOfReviews": 0, "description":`Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.`},
      {"id": 0, "name": 'Breaking Bad', "startDate": 2008, "endDate": 2013, "comments":[] , "genre": Genre.DRAMA , "imageSrc": 'https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_.jpg' ,"numberOfReviews": 0,"description": `A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.`},
      {"id": 1, "name": 'Better Call Saul', "startDate": 2015, "comments":[], "genre": Genre.DRAMA, "imageSrc": 'https://media.npr.org/assets/img/2022/07/25/bcs_609_gl_1005_0864-rt-d902123a10b2eb10167b5f916a21d3af0664b6c4.jpg', "numberOfReviews": 0, "description":''},
      {"id": 2, "name": 'Money Heist', "startDate": 2017,"endDate": 2021, "comments": [], "genre": Genre.ACTION, "imageSrc": 'https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg', "numberOfReviews": 0, "description": `An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.`},
      {"id": 3, "name": 'Juzni Vetar', "startDate": 2019, "comments":[], "genre": Genre.ACTION, "imageSrc":'https://m.media-amazon.com/images/M/MV5BODQxNTk5NWMtNjZmMS00YjIzLWI2ODItYzJjMmJlZjBmYzZjXkEyXkFqcGdeQXVyODIzOTUzOTI@._V1_.jpg', "numberOfReviews": 0, "description":`Petar Maras continues his expansion in criminal underworld while saving his family.`},
      {"id": 4, "name": 'The Last Dance', "startDate": 2020, "endDate": 2020, "comments":[], "genre": Genre.SPORTS, "imageSrc": 'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg', "numberOfReviews": 0, "description":`Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.`},
    ];
  }


  get listOfTvShows(): TvShow[] {
    return this._listOfTvShows;
  }
}
