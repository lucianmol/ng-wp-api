import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgWpRoute } from '../ng-wp-config';
import { NgWpBackendService } from './ng-wp-backend.service';

@Injectable({
  providedIn: 'root'
})
export class NgWpUsersService {
  constructor(private backendService: NgWpBackendService) {}

  /**
   * Retrieves the user by id
   *
   * @param id
   * @param context
   * @param [requestOptions]
   * @returns Observable<any>
   * @memberof NgWpUsersService
   */
  public get<T>(
    id: number,
    context?: 'view' | 'embed' | 'edit',
    requestOptions?: object
  ): Observable<T> {
    return this.backendService.get(
      `${NgWpRoute.USERS}/${id}`,
      { context },
      requestOptions
    );
  }
}
