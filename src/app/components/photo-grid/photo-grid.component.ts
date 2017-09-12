import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css'],
  moduleId: module.id
})
export class PhotoGridComponent implements OnInit {
  constructor() { }

  private tiles = [
    {
      src: '../../../assets/images/photography/DSC_4544.JPG', alt: 'One',
      cols: 3, rows: 2, color: 'lightblue'
    },
    {
      src: '../../../assets/images/photography/DSC_0631.JPG', alt: 'Two',
      cols: 1, rows: 4, color: 'lightgreen'
    },
    {
      src: '../../../assets/images/photography/DSC_2016.PNG', alt: 'Three',
      cols: 1, rows: 2, color: 'lightpink'
    },
    {
      src: '../../../assets/images/photography/DSC_1201.JPG', alt: 'Four',
      cols: 2, rows: 2, color: '#DDBDF1'
    },
  ];

  ngOnInit() {
  }

}
