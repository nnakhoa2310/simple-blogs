import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackendService, IBlog } from '../../services/backend';
import * as actions from './blog-list.actions';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BlogListEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  public getBlogList = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.getBlogList),
      switchMap((action) => {
        return this.backendService.getBlogList(action.payload).pipe(
          tap((payload: IBlog[]) => {
            return actions.getBlogListSuccess({ payload: payload });
          })
        );
      }),
      catchError(() => of(actions.getBlogListFailure()))
    );
  });
}
