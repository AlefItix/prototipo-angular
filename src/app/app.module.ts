import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { HomeVagasComponent } from './home-vagas/home-vagas.component';
import { HomeContatoComponent } from './home-contato/home-contato.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { FormComponent } from './home-contato/form/form.component';
import { HomeCardComponent } from './home-card/home-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    HomeVagasComponent,
    HomeContatoComponent,
    BlogCardComponent,
    FormComponent,
    HomeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
