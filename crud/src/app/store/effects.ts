import { Injectable } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  deleteData,
  deleteDataSuccess,
  getAllData,
  getAllDataSuccess,
  insertData,
  insertDataSuccess,
  updateData,
  updateDataSuccess,
} from './actions';
import {
  concatMap,
  exhaustMap,
  filter,
  map,
  mergeMap,
  skip,
  switchMap,
  take,
} from 'rxjs';

@Injectable()
export class HeliosData {
  constructor(private apiServices: ApiService, private actions$: Actions) {}
  getAllData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllData),
      mergeMap((action) => {
        return this.apiServices
          .getData()
          .pipe(map((v) => getAllDataSuccess(v.data)));
      })
    )
  );

  insertData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(insertData),
      exhaustMap((action: any) =>
        this.apiServices.addData(action.data).pipe(
          map((newData: any) => {
            const data = { id: newData.data, ...action.data };
            return insertDataSuccess(data);
          })
        )
      )
    )
  );

  updateData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateData),
      switchMap((action) =>
        this.apiServices.editData(action.data).pipe(
          map(() => {
            console.log(action.data);
            return updateDataSuccess(action.data);
          })
        )
      )
    )
  );
  deleteData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteData),
      switchMap((action) => {
        return this.apiServices
          .deleteData(action.data)
          .pipe(map(() => deleteDataSuccess(action.data)));
      })
    )
  );
}
