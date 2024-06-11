import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BlogListPageModule } from './pages/blog-list-page/blog-list-page.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    // pages
    BlogListPageModule,
    // routing
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
