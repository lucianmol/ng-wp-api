import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CategoriesListArguments,
  CategoryGetArguments
} from "../ng-wp-arguments";
import { NgWpRoute } from "../ng-wp-config";
import { NgWpBackendService } from "./ng-wp-backend.service";

@Injectable({
  providedIn: "root"
})
export class NgWpCategoriesService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the list of categories
   *
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPostsService
   */
  public getList(
    args?: CategoriesListArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(NgWpRoute.CATEGORIES, args, requestOptions);
  }

  /**
   * Retrieves a single category by id
   *
   * @param id
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpCategoriesService
   */
  public get(
    id: number,
    args?: CategoryGetArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(
      `${NgWpRoute.CATEGORIES}/${id}`,
      args,
      requestOptions
    );
  }
}
