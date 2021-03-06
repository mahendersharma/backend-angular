import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  openNav: boolean = false;
  constructor(private _httpClient: HttpClient) { }


  get(url: string): Observable<any> {
    return this._httpClient.get(url)
  }
  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this._httpClient.post(url, body)
  }
  postImage(url: string, model: any): Observable<any> {
    let httpHeader = new HttpHeaders()
    .set('isFile','')
    return this._httpClient.post(url, model,{
      headers:httpHeader
    })
  }
  put(url: string, id: number, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this._httpClient.put(url + id, body)
  }

  delete(url: string, id: number): Observable<any> {
    return this._httpClient.delete(url + id)
  }










  // get(url: string): Observable<any> {
  //   return this._httpClient.get(url)
  // }
  // post(url: string, model: any): Observable<any> {
  //   const body = JSON.stringify(model);
  //   let httpHeader = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //   return this._httpClient.post(url, body, {
  //     headers: httpHeader
  //   })
  // }
  // put(url: string, id: number, model: any): Observable<any> {
  //   const body = JSON.stringify(model);
  //   let httpHeader = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //   return this._httpClient.put(url + id, body, {
  //     headers: httpHeader
  //   })
  // }

  // delete(url: string, id: number): Observable<any> {
  //   return this._httpClient.delete(url + id)
  // }


}
