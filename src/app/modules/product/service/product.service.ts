import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://localhost:44346/get-all-products')
      .pipe(map((response: Product[]) => {
          return response;
        })
      );
  }

  get(request: string): Observable<Product> {
    
    let httpParams = new HttpParams();

    httpParams = httpParams.append('id', request);

    return this.http.get('https://localhost:44346/get-product', {params: httpParams})
    .pipe(map((response: any) => {
        return response;
      })
    );
  }

  deleteProduct(request: string): Observable<boolean> {
    
    let httpParams = new HttpParams();

    httpParams = httpParams.append('id', request);

    return this.http.delete('https://localhost:44346/delete', {params: httpParams})
    .pipe(map((response: any) => {
        return response;
      })
    );
  }

  insertProduct(request: Product): Observable<Product> {
    return this.http.post('https://localhost:44346/insert-product', request)
    .pipe(map((response: any) => {
        return response;
      })
    );
  }

  updateProduct(request: Product): Observable<Product> {
    return this.http.post('https://localhost:44346/update-product', request)
    .pipe(map((response: any) => {
        return response;
      })
    );
  }

}
