import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CONFIG } from "../ng-wp-api.module";
import { NgWpArguments } from "../ng-wp-arguments";
import { NgWpConfig } from "../ng-wp-config";

@Injectable({
  providedIn: "root"
})
export class NgWpBackendService {
  constructor(
    @Inject(CONFIG) private config: NgWpConfig,
    private httpClient: HttpClient
  ) {}

  /**
   * Executes a GET request and returns the result as Observable
   *
   * @param route
   * @param [args]
   * @param [requestOptions={}]
   * @returns Observable<any>
   * @memberof NgWpBackendService
   */
  public get(
    route: string,
    args?: NgWpArguments,
    requestOptions = {}
  ): Observable<any> {
    return this.httpClient.get(
      this.getEndpoint(route),
      this.updateParamsFromRequestOptions(args, requestOptions)
    );
  }

  /**
   * Executes a POST request and returns the result as Observable
   *
   * @param route
   * @param [body]
   * @param [requestOptions={}]
   * @returns Observable<any>
   * @memberof NgWpBackendService
   */
  public post(
    route: string,
    body?: NgWpArguments,
    requestOptions = {}
  ): Observable<any> {
    return this.httpClient.post(this.getEndpoint(route), body, requestOptions);
  }

  private getEndpoint(route: string) {
    return `${this.config.wpApiUrl}${route}`;
  }

  private updateParamsFromRequestOptions(
    args: NgWpArguments,
    requestOptions: object
  ): object {
    requestOptions["params"] = args;
    return requestOptions;
  }
}
