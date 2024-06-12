import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListPageComponent } from './blog-list-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BlogListPageComponent],
  exports: [BlogListPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: BlogListPageComponent,
      },
    ]),
  ]
})
export class BlogListPageModule { }
