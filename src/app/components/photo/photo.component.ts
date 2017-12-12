import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
  moduleId: module.id
})
export class PhotoComponent implements OnInit {
  constructor() {}

  @Input() photoSrc: string;
  @Input() photoAlt: string;

  ngOnInit() {}
}
