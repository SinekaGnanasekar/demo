
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElasticsearchService } from './elasticsearch.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
