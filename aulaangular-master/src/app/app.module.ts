import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AulaComponent } from './aula/aula.component';
import { AulaDataService } from './aula/aula-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AulaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AulaDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
