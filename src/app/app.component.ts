
import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Angular ELK Example</h1>
      <button (click)="search()">Search in Elasticsearch</button>
      <div *ngFor="let hit of searchResults.hits.hits">
        {{ hit._source | json }}
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchResults: any = {};

  constructor(private esService: ElasticsearchService) {}

  ngOnInit(): void {}

  search(): void {
    const index = 'appcomponent'; 
    const query = {
      match_all: {},
    };

    this.esService.search(index, query).then((response) => {
      this.searchResults = response;
    });
  }
}
