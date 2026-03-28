import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
})
export class PhotoComponent implements OnInit {
  constructor() {}

  @Input() photoSrc: string;
  @Input() photoAlt: string;
  @Input() loading: "eager" | "lazy" = "lazy";
  @Input() fetchPriority: "high" | "auto" = "auto";
  @Output() imageLoaded = new EventEmitter<void>();

  ngOnInit() {}

  public onImageLoad(): void {
    this.imageLoaded.emit();
  }
}
