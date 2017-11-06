import { Component, OnInit } from "@angular/core";
import Macy from "macy";

@Component({
  selector: "app-photo-grid",
  templateUrl: "./photo-grid.component.html",
  styleUrls: ["./photo-grid.component.css"],
  moduleId: module.id
})
export class PhotoGridComponent implements OnInit {
  public macy;
  private photos;

  constructor() {
    this.photos = [
      {
        photoSrc: "assets/images/photography/DSC_0063.JPG",
        photoAlt: "Austin"
      },
      {
        photoSrc: "assets/images/photography/DSC_0072.JPG",
        photoAlt: "Austin"
      },
      {
        photoSrc: "assets/images/photography/DSC_0087.JPG",
        photoAlt: "Austin"
      },
      {
        photoSrc: "assets/images/photography/DSC_0129.JPG",
        photoAlt: "Enchanted Rock"
      },
      {
        photoSrc: "assets/images/photography/DSC_0335.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0353.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0358.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0396.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0422.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0453.JPG",
        photoAlt: "Hamilton Pool"
      },
      {
        photoSrc: "assets/images/photography/DSC_0631.JPG",
        photoAlt: "The Mohawk, Austin"
      },
      {
        photoSrc: "assets/images/photography/DSC_1009.JPG",
        photoAlt: "Austin"
      },
      {
        photoSrc: "assets/images/photography/DSC_1201.JPG",
        photoAlt: "Puerto Rico"
      },
      {
        photoSrc: "assets/images/photography/DSC_2016.JPG",
        photoAlt: "Walnut Creek Park, Austin"
      },
      { photoSrc: "assets/images/photography/DSC_4544.JPG", photoAlt: "Spain" }
    ];
  }

  ngOnInit() {
    this.macy = Macy({
      container: "#macy-container",
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 5,
      breakAt: {
        1200: 5,
        940: 4,
        520: 2,
        400: 1
      }
    });
  }
}
