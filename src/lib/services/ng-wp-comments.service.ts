import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CommentsCreateArguments,
  CommentsListArguments
} from "../ng-wp-arguments";
import { NgWpRoute } from "../ng-wp-config";
import { NgWpBackendService } from "./ng-wp-backend.service";

@Injectable({
  providedIn: "root"
})
export class NgWpCommentsService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the list of comments
   *
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpPostsService
   */
  public getList(
    args?: CommentsListArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.get(NgWpRoute.COMMENTS, args, requestOptions);
  }

  /**
   * Create a new comment
   *
   * @param [args]
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpCommentsService
   */
  public create(
    args?: CommentsCreateArguments,
    requestOptions?: object
  ): Observable<any> {
    return this.backendService.post(NgWpRoute.COMMENTS, args, requestOptions);
  }
}
