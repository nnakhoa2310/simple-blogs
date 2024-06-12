import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';

export const routes: Routes = [
  {
    path: 'blogs',
    component: BlogListPageComponent,
  },
  { path: '**', redirectTo: '/blogs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}