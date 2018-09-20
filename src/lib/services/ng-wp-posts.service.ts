import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostGetArguments, PostsListArguments } from "../ng-wp-arguments";
import { NgWpRoute } from "../ng-wp-config";
import { NgWpBackendService } from "./ng-wp-backend.service";

@Injectable({
  providedIn: "root"
})
export class NgWpPostsService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the list of posts
   *
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPostsService
   */
  public getList(
    args?: PostsListArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(NgWpRoute.POSTS, args, requestOptions);
  }

  /**
   * Retrieves a single post by id
   *
   * @param id
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPostsService
   */
  public get(
    id: number,
    args?: PostGetArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(
      `${NgWpRoute.POSTS}/${id}`,
      args,
      requestOptions
    );
  }
}
