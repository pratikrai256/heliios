import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css'],
})
export class UserspageComponent implements OnInit {
  selectedData: any = [];
  details: any = [];
  displayedColumns: string[] = [
    'name',
    'age',
    'email',
    'contact',
    'salary',
    'actions',
  ];
  firstName: string;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(private service: AuthService, private route: Router,private apiS:ApiService) {}

  viewDetails() {
    this.apiS.getData().subscribe((data) => {
      this.details = data.data;
      console.log(this.details);
    });
  }

  viewUser(id: any) {
    for (let i = 0; i < this.details.length; i++) {
      if (this.details[i].id === id) {
        this.selectedData = this.details[i];
      }
    }  
  }

  editDealer(form: NgForm) {
    console.log(form.value);
    this.apiS.editData({id:this.selectedData.id, ...form.value}).subscribe((res) => {
      console.log(res);
    });
  }

  deleteDetails(id: any) {
    console.log(id);
    this.apiS.deleteData(id).subscribe((data) => {
      data.id === id;
      alert('Deleted Successfully');
      this.viewDetails();
    });
  }

  addDealer(form: NgForm) {
    console.log(form.value);

    this.apiS.addData(form.value).subscribe((res) => {
      console.log('Added Dealer Successfully');
      this.viewDetails();
    });
  }

  ngOnInit() {
    this.viewDetails();
    console.log(this.details, 'hello');
  }

  Search() {
    if (this.firstName == '') {
      this.ngOnInit();
    } else {
      this.details = this.details.filter((res: { firstName: string }) => {
        return res.firstName
          .toLocaleLowerCase()
          .match(this.firstName.toLocaleLowerCase());
      });
    }
  }
}
