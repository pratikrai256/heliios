import { createAction, props } from '@ngrx/store';

export const getAllData = createAction('GetAllData');
export const getAllDataSuccess = createAction(
  'GetAllDataSuccess',
  (allData: any) => ({ allData })
);
export const insertData = createAction('Insert Data', (data) => ({ data }));
export const insertDataSuccess = createAction(
  'Insert Data Success',
  (data) => ({ data })
);

export const updateData = createAction('Update Data', (data) => ({ data }));
export const updateDataSuccess = createAction(
  'Update Data Success',
  (data) => ({ data })
);

export const deleteData = createAction('Delete Data', (data) => ({ data }));
export const deleteDataSuccess = createAction(
  'Delete Data Success',
  (data) => ({ data })
);
