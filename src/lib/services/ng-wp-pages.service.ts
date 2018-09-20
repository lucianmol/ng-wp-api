import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PageGetArguments, PagesListArguments } from "../ng-wp-arguments";
import { NgWpRoute } from "../ng-wp-config";
import { NgWpBackendService } from "./ng-wp-backend.service";

@Injectable({
  providedIn: "root"
})
export class NgWpPagesService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the list of pages
   *
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPagesService
   */
  public getList(
    args?: PagesListArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(NgWpRoute.PAGES, args, requestOptions);
  }

  /**
   * Retrieves a single page by id
   *
   * @param id
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPagesService
   */
  public get(
    id: number,
    args?: PageGetArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(
      `${NgWpRoute.POSTS}/${id}`,
      args,
      requestOptions
    );
  }
}
