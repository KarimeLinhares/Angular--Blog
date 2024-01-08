import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { SubscribeCardComponent } from './components/subscribe-card/subscribe-card.component';
import { FooterCardComponent } from './components/footer-card/footer-card.component';
import { SubscribeComponentsComponent } from './components/subscribe-components/subscribe-components.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticleRowComponent } from './components/article-row/article-row.component';
import { TechRowComponent } from './components/tech-row/tech-row.component';
import { GamesRowComponent } from './components/games-row/games-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    CategoryCardComponent,
    ArticleCardComponent,
    SubscribeCardComponent,
    FooterCardComponent,
    SubscribeComponentsComponent,
    HomeComponent,
    ContentComponent,
    NotFoundComponent,
    ArticleRowComponent,
    TechRowComponent,
    GamesRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
