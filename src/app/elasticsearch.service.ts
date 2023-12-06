

// src/app/elasticsearch.service.ts
import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root',
})
export class ElasticsearchService {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: 'http://localhost:9200', // Change this if your Elasticsearch is on a different host
    });
  }

  search(index: string, query: any): Promise<any> {
    return this.client.search({
      index,
      body: {
        query,
      },
    });
  }
}
