import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }


getData() {
return this.http.get<any>("http://localhost:4000/users/users")
}

addData(data: any) {
return this.http.post<any>("http://localhost:4000/users/add-user",data)
}


editData(id: any,data: any) {
  return this.http.put<any>(`http://localhost:4000/users/edit-user/${id}`,data)

}

deleteData(id: any) {
  return this.http.delete<any>(`http://localhost:4000/users/delete-user/${id}`)

}
}
