import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  getData() {
    return this.http.get<any>("http://localhost:4000/heliosUsers/users")
    }
    
    addData(data: any) {
    return this.http.post<any>("http://localhost:4000/heliosUsers/add-user",data)
    }
    
    
    editData(data: any) {
      return this.http.put<any>(`http://localhost:4000/heliosUsers/edit-user`,data)
    
    }
    
    deleteData(id: any) {
      return this.http.delete<any>(`http://localhost:4000/heliosUsers/delete-user/${id}`)
    
    }
}
