import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../services/directory.service';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.scss'],
})
export class DirectoryListComponent implements OnInit {
  directories: any;
  constructor(private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.directoryService.getDirectory().subscribe((data) => {
      this.directories = data;
      console.log(data);
    });
  }
}
