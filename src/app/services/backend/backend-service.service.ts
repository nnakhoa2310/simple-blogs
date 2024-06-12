import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from "../../../assets/config.json"
import { IBlog, IBlogListFilterParams } from './backend-service.service.i';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly URL = "https://5f55a98f39221c00167fb11a.mockapi.io/"

  constructor(private httpClient: HttpClient) { }

  public getBlogList(filters?: IBlogListFilterParams): Observable<IBlog[]>{
    const endpoint = `${this.URL}/${config.blogs}` 
    const params = new HttpParams({
      fromObject: {
        ...filters,
      },
    });
    return this.httpClient.get<IBlog[]>(endpoint, {params});
  }

  public getBlogDetail(id: string): Observable<IBlog>{
    const endpoint = `${URL}/${config.blogs}`.replace("{id}", id) 
    return this.httpClient.get<IBlog>(endpoint);
  }
}
