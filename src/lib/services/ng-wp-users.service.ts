import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgWpRoute } from '../ng-wp-config';
import { NgWpBackendService } from './ng-wp-backend.service';
import { UsersGetArguments } from '../ng-wp-arguments';

@Injectable({
  providedIn: 'root'
})
export class NgWpUsersService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the user by id
   *
   * @param id
   * @param args
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpUsersService
   */
  public get<T>(
    id: number,
    args?: UsersGetArguments,
    requestOptions?: object
  ): Observable<T> {
    return this.backendService.get(
      `${NgWpRoute.USERS}/${id}`,
      args,
      requestOptions
    );
  }
}
