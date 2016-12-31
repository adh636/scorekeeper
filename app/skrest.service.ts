import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class SKRestService {
  restUrl: string = "http://localhost:5000";
  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.requestOptions = new RequestOptions();
    this.createHeader();
  }

  createHeader(): void {
    let headers: Headers = new Headers({ "Content-Type":"application/json" });
    this.requestOptions = new RequestOptions({ headers: headers });
  }

  submitResults(postData: any): Observable<any> {
    let postUrl: string = this.restUrl + "/api/scores";
    return this.http.post(postUrl, postData, this.requestOptions);
  }

  getResults(): Observable<any> {
    let postUrl: string = this.restUrl + "/api/scores";
    return this.http.get(postUrl).map((response: Response) => response.json());
  }

  deleteResults(): Observable<any> {
    let postUrl: string = this.restUrl + "/api/scores/5~";
    return this.http.delete(postUrl);
  }
}