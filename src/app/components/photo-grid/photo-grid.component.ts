import { Component, AfterViewInit } from "@angular/core";
import Macy from "macy";

@Component({
  selector: "app-photo-grid",
  templateUrl: "./photo-grid.component.html",
  styleUrls: ["./photo-grid.component.css"],
})
export class PhotoGridComponent implements AfterViewInit {
  public macy;
  private photos;

  constructor() { }

  ngAfterViewInit(): void {
    this.macy = Macy({
      container: "#macy-container",
      trueOrder: false,
      waitForImages: false,
      margin: 12,
      columns: 3,
      breakAt: {
        1200: 3,
        940: 2,
        540: 1,
      }
    });
  }

  private initializePhotoArray() {
    this.photos = [
      {
        photoSrc: "assets/images/photography/DSC_0063.JPG",
        photoAlt: "Graffiti Park in Austin, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0072.JPG",
        photoAlt: "Graffiti Park in Austin, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0335.JPG",
        photoAlt: "Hamilton Pool, near Dripping Springs, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0353.JPG",
        photoAlt: "Hamilton Pool, near Dripping Springs, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0358.JPG",
        photoAlt: "Hamilton Pool, near Dripping Springs, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0422.JPG",
        photoAlt: "Hamilton Pool, near Dripping Springs, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0453.JPG",
        photoAlt: "Hamilton Pool, near Dripping Springs, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_0631.JPG",
        photoAlt: "Anamanaguchi at the Mohawk in Austin, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_1201.JPG",
        photoAlt: "Pier in San Juan, Puerto Rico"
      },
      {
        photoSrc: "assets/images/photography/DSC_1407.JPG",
        photoAlt: "El Yunque in Puerto Rico"
      },
      {
        photoSrc: "assets/images/photography/DSC_2016.JPG",
        photoAlt: "Walnut Creek Park in Austin, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_2824.JPG",
        photoAlt: "Fredericksburg, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_2876.JPG",
        photoAlt: "Fredericksburg, Texas"
      },
      {
        photoSrc: "assets/images/photography/DSC_4516.JPG",
        photoAlt: "Spain"
      },
      {
        photoSrc: "assets/images/photography/DSC_4544.JPG",
        photoAlt: "Monument to Alfonso XII in Madrid, Spain"
      },
      {
        photoSrc: "assets/images/photography/DSC_4634.JPG",
        photoAlt: "Spain"
      },
      {
        photoSrc: "assets/images/photography/DSC_4705.JPG",
        photoAlt: "Spain"
      }
    ];
  }
}
