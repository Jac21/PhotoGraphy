import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-lightbox",
  templateUrl: "./lightbox.component.html",
  styleUrls: ["./lightbox.component.css"]
})
export class LightboxComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private meta: Meta) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.updateMetaTags();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateMetaTags() {
    this.meta.updateTag({
      property: "og:image",
      content:
        "https://jac21.github.io/PhotoGraphy/assets/images/photography/DSC_" +
        this.id +
        ".JPG"
    });

    this.meta.updateTag({
      name: "viewport",
      content: "width=device-width, minimum-scale=0.1"
    });
  }
}
