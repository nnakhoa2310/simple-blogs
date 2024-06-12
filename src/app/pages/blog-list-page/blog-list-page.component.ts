import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend';
import { tap } from 'rxjs';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss'],
})
export class BlogListPageComponent implements OnInit {
  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService
    .getBlogList({page: 4, limit:8})
    .pipe(
      tap((res) => {
        console.log('123 res', res);
      })
    )
    .subscribe();
  }

  
}
