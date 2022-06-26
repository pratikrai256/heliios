import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { Store } from '@ngrx/store';
import {
  deleteData,
  getAllData,
  insertData,
  updateData,
} from '../store/actions';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css'],
})
export class UserspageComponent implements OnInit {
  selectedData: any = [];
  modal: any = 'modal';
  // details: any = [];
  displayedColumns: string[] = [
    'name',
    'age',
    'email',
    'contact',
    'salary',
    'actions',
  ];
  firstName: string;
  modifiedData: Observable<{ heliosData: any }> =
    this.store.select('heliosData');

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(
    private service: AuthService,
    private route: Router,
    private apiS: ApiService,
    private store: Store<any>
  ) {}

  viewDetails() {
    // this.apiS.getData().subscribe((data) => {
    //   this.details = data.data;
    //   console.log(this.details);
    // });
    this.store.dispatch(getAllData());
  }

  viewUser(id: any) {
    let a: any;
    this.modifiedData.forEach((v) => {
      a = v;
    });
    console.log(a);
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);

      if (a[i].id === id) {
        this.selectedData = a[i];
      }
    }
  }

  editDealer(form: NgForm) {
    console.log(form.value);
    // this.apiS
    //   .editData({ id: this.selectedData.id, ...form.value })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    this.store.dispatch(
      updateData({ id: this.selectedData.id, ...form.value })
    );
  }

  deleteDetails(id: any) {
    // console.log(id);
    // this.apiS.deleteData(id).subscribe((data) => {
    //   data.id === id;
    //   alert('Deleted Successfully');
    //   this.viewDetails();
    // });
    this.store.dispatch(deleteData(id));
  }

  addDealer(form: NgForm) {
    console.log(form.value);
    this.store.dispatch(insertData(form.value));

    // this.apiS.addData(form.value).subscribe((res) => {
    //   console.log(res,'Added Dealer Successfully');
    //   this.viewDetails();
    // });
  }

  ngOnInit() {
    this.viewDetails();
    // this.modifiedData.subscribe(v=>console.log(v)
    // )
  }

  Search() {
    // if (this.firstName == '') {
    //   this.ngOnInit();
    // } else {
    //   this.details = this.details.filter((res: { firstName: string }) => {
    //     return res.firstName
    //       .toLocaleLowerCase()
    //       .match(this.firstName.toLocaleLowerCase());
    //   });
    // }
  }
}
