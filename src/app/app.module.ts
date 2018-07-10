import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryDetailComponent } from './repository/repository-detail.component';

import { RepositoryService } from './repository/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    RepositoryComponent,
    RepositoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'repo', component: RepositoryComponent },
      { path: 'repo/:id', component: RepositoryDetailComponent },
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ RepositoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
