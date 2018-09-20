import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MediaGetArguments } from "../ng-wp-arguments";
import { NgWpRoute } from "../ng-wp-config";
import { NgWpBackendService } from "./ng-wp-backend.service";

@Injectable({
  providedIn: "root"
})
export class NgWpMediaService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the media item
   *
   * @param id
   * @param args
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpMediaService
   */
  public get(
    id: number,
    args?: MediaGetArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(
      `${NgWpRoute.MEDIA}/${id}`,
      args,
      requestOptions
    );
  }
}
