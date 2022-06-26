import { createReducer, on } from '@ngrx/store';
import {
  deleteDataSuccess,
  getAllData,
  getAllDataSuccess,
  insertDataSuccess,
  updateData,
  updateDataSuccess,
} from './actions';
let initialSate: any = [];

const upDate = () => {};
export const heliosReducer = createReducer(
  initialSate,
  on(getAllDataSuccess, (state, { allData }) => {
    return [...allData];
  }),
  on(insertDataSuccess, (state, { data }) => {
    console.log(data, 'check 123');
    return [...state, data];
  }),
  on(updateDataSuccess, (state, { data }) => {
    let updatedData = [...state];
    let index = updatedData.findIndex((ind) => {
      return ind.id === data.id;
    });
    console.log(updatedData[index]);
    updatedData[index] = data;
    console.log(updatedData);
    return updatedData;
  }),
  on(deleteDataSuccess, (state, { data }) => {
    let updatedData = [...state].filter((d) => {
      return d.id !== data;
    });
    return updatedData;
  })
);
