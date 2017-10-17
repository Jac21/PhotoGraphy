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

  constructor() {}

  ngOnInit() {
    this.macy = Macy({
      container: "#macy-container",
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 6,
      breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
      }
    });
  }
}
