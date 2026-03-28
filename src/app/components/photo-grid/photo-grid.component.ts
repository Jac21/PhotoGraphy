import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import Macy from "macy";

interface PhotoItem {
  id: number;
  photoSrc: string;
  photoAlt: string;
}

@Component({
  selector: "app-photo-grid",
  templateUrl: "./photo-grid.component.html",
  styleUrls: ["./photo-grid.component.css"],
})
export class PhotoGridComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("loadTrigger") loadTrigger?: ElementRef<HTMLDivElement>;

  public macy: Macy | undefined;
  public visiblePhotos: PhotoItem[] = [];

  public readonly initialVisibleCount = 6;
  public readonly batchSize = 6;
  public readonly photos: PhotoItem[] = [
    {
      id: 8326,
      photoSrc: "assets/images/photography/8326.JPG",
      photoAlt: "Liantan Rd, Zuoying District, Kaohsiung City, Taiwan",
    },
    {
      id: 9154043622,
      photoSrc: "assets/images/photography/9154043622.JPG",
      photoAlt: "Blanton Museum of Art, Austin, Texas",
    },
    {
      id: 5608041502,
      photoSrc: "assets/images/photography/5608041502.JPG",
      photoAlt: "Cabo Rojo, Puerto Rico",
    },
    {
      id: 5936,
      photoSrc: "assets/images/photography/5936.JPG",
      photoAlt: "Ruifeng Night Market, Kaohsiung City, Taiwan",
    },
    {
      id: 9154043623,
      photoSrc: "assets/images/photography/9154043623.JPG",
      photoAlt: "'Austin' by Ellsworth Kelly, Austin, Texas",
    },
    {
      id: 5575041509,
      photoSrc: "assets/images/photography/5575041509.JPG",
      photoAlt:
        "Cementerio Santa Maria Magdalena de Pazzis, San Juan, Puerto Rico",
    },
    {
      id: 2949,
      photoSrc: "assets/images/photography/2949.JPG",
      photoAlt:
        "Rahoe Street Night Market, Rahoe St, Songshan District, Taipei City, Taiwan 105",
    },
    {
      id: 3225040254,
      photoSrc: "assets/images/photography/3225040254.JPG",
      photoAlt: "Cle Elum, Washington",
    },
    {
      id: 5532041507,
      photoSrc: "assets/images/photography/5532041507.JPG",
      photoAlt: "Campanilla, Toa Baja, Puerto Rico",
    },
    {
      id: 6078433077,
      photoSrc: "assets/images/photography/6078433077.JPG",
      photoAlt: "Trinity College, Dublin, Ireland",
    },
    {
      id: 9797,
      photoSrc: "assets/images/photography/9797.JPG",
      photoAlt: "Playa Guajataca, Isabela, Puerto Rico",
    },
    {
      id: 70710021,
      photoSrc: "assets/images/photography/70710021.JPG",
      photoAlt: "Shinjuku, Tokyo, Japan",
    },
    {
      id: 70750028,
      photoSrc: "assets/images/photography/70750028.JPG",
      photoAlt: "Arashiyama Yusaitei in Kyoto, Japan",
    },
    {
      id: 295350033,
      photoSrc: "assets/images/photography/295350033.JPG",
      photoAlt: "Vega Alta, Puerto Rico",
    },
    {
      id: 63960011,
      photoSrc: "assets/images/photography/63960011.JPG",
      photoAlt: "Lady Bird Johnson Wildflower Center in Austin, Texas",
    },
    {
      id: 4705,
      photoSrc: "assets/images/photography/4705.JPG",
      photoAlt: "Avila, Spain",
    },
    {
      id: 4516,
      photoSrc: "assets/images/photography/4516.JPG",
      photoAlt: "Jacinto Benavente statue in Madrid, Spain",
    },
    {
      id: 70710022,
      photoSrc: "assets/images/photography/70710022.JPG",
      photoAlt: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
    },
    {
      id: 1201,
      photoSrc: "assets/images/photography/1201.JPG",
      photoAlt: "Pier in San Juan, Puerto Rico",
    },
    {
      id: 2016,
      photoSrc: "assets/images/photography/2016.JPG",
      photoAlt: "Walnut Creek Park in Austin, Texas",
    },
    {
      id: 6841,
      photoSrc: "assets/images/photography/6841.JPG",
      photoAlt: "Seattle Japanese Garden, Seattle, Washington",
    },
  ];

  private intersectionObserver?: IntersectionObserver;
  private observedTrigger?: HTMLDivElement;
  private isAppendingPhotos = false;
  private layoutRefreshTimer?: number;

  public get hasMorePhotos(): boolean {
    return this.visiblePhotos.length < this.photos.length;
  }

  ngOnInit(): void {
    this.visiblePhotos = this.photos.slice(0, this.initialVisibleCount);
  }

  ngAfterViewInit(): void {
    this.initializeMacy();
    this.initializeLoadObserver();
    this.queueLayoutRefresh();
  }

  ngOnDestroy(): void {
    if (this.layoutRefreshTimer) {
      window.clearTimeout(this.layoutRefreshTimer);
    }

    if (this.observedTrigger && this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.observedTrigger);
    }

    this.intersectionObserver?.disconnect();
  }

  public loadMorePhotos(): void {
    if (!this.hasMorePhotos || this.isAppendingPhotos) {
      return;
    }

    this.isAppendingPhotos = true;

    const nextCount = Math.min(
      this.visiblePhotos.length + this.batchSize,
      this.photos.length,
    );

    this.visiblePhotos = this.photos.slice(0, nextCount);
    this.queueLayoutRefresh();
  }

  public trackByPhotoId(index: number, photo: PhotoItem): number {
    return photo.id;
  }

  public onPhotoLoaded(): void {
    this.queueLayoutRefresh(30);
  }

  private initializeMacy(): void {
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
      },
    });
  }

  private initializeLoadObserver(): void {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMorePhotos();
          }
        });
      },
      {
        rootMargin: "300px 0px",
      },
    );
  }

  private observeLoadTrigger(): void {
    if (!this.intersectionObserver || !this.loadTrigger?.nativeElement) {
      return;
    }

    const trigger = this.loadTrigger.nativeElement;

    if (this.observedTrigger && this.observedTrigger !== trigger) {
      this.intersectionObserver.unobserve(this.observedTrigger);
    }

    if (this.hasMorePhotos) {
      this.intersectionObserver.observe(trigger);
      this.observedTrigger = trigger;
      return;
    }

    if (this.observedTrigger) {
      this.intersectionObserver.unobserve(this.observedTrigger);
    }

    this.observedTrigger = undefined;
  }

  private queueLayoutRefresh(delay = 0): void {
    if (this.layoutRefreshTimer) {
      window.clearTimeout(this.layoutRefreshTimer);
    }

    this.layoutRefreshTimer = window.setTimeout(() => {
      this.macy?.recalculate(true);
      this.observeLoadTrigger();
      this.isAppendingPhotos = false;
      this.layoutRefreshTimer = undefined;
    }, delay);
  }
}
