import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import { Http } from "@angular/http";


@Injectable()
export class SKRestService {
  restUrl: string = "localhost:5000";

  constructor(private http: Http) {}

  submitResults(postData: any): Observable<any> {
    let postUrl: string = this.restUrl + "/api/sk";
    console.log(postUrl);
    return this.http.post(postUrl, postData);
  }
}