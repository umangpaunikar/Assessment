import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  baseUrl = 'assets/data/directory.json';
  constructor(private http: HttpClient) {}
  getDirectory() {
    return this.http.get(this.baseUrl);
  }
}
