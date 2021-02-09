import {Injectable} from "@angular/core";
import {API} from 'aws-amplify'
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AmplifyService {

  getWithAuth() {
    return from(API.get(
      'apiefb8ea8b',
      '/items',
      {}
    ))
  }

}
