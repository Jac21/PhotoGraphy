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
  photoTitle?: string;
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
      photoTitle: "Liantan Rd, Zuoying District",
    },
    {
      id: 9154043622,
      photoSrc: "assets/images/photography/9154043622.JPG",
      photoAlt: "Blanton Museum of Art, Austin, Texas",
      photoTitle: "Joanne",
    },
    {
      id: 5608041502,
      photoSrc: "assets/images/photography/5608041502.JPG",
      photoAlt: "WRP5+WWQ Cabo Rojo, Puerto Rico",
      photoTitle: "Cabo Rojo",
    },
    {
      id: 5936,
      photoSrc: "assets/images/photography/5936.JPG",
      photoAlt: "804, Taiwan, Kaohsiung City, Zuoying District, Yucheng Rd, 南屏路",
      photoTitle: "Ruifeng Night Market",
    },
    {
      id: 9154043623,
      photoSrc: "assets/images/photography/9154043623.JPG",
      photoAlt: "'200 E Martin Luther King Jr Blvd, Austin, TX 78712",
      photoTitle: "\"Austin\" by Ellsworth Kelly",
    },
    {
      id: 5575041509,
      photoSrc: "assets/images/photography/5575041509.JPG",
      photoAlt:
        "FV9J+R4R, Cemetery St, San Juan, 00901, Puerto Rico",
      photoTitle: "Cementerio Santa María Magdalena de Pazzis",
    },
    {
      id: 2949,
      photoSrc: "assets/images/photography/2949.JPG",
      photoAlt:
        "Raohe St, Songshan District, Taipei City, Taiwan 105",
      photoTitle: "Raohe Street Night Market",
    },
    {
      id: 96460166,
      photoSrc: "assets/images/photography/96460166.JPG",
      photoAlt:
        "Emma Long Metropolitan Park",
      photoTitle: "Joanne & Iris",
    },
    {
      id: 3225040254,
      photoSrc: "assets/images/photography/3225040254.JPG",
      photoAlt: "(47.2004898, -120.9970447)",
      photoTitle: "Cle Elum, Washington",
    },
    {
      id: 5532041507,
      photoSrc: "assets/images/photography/5532041507.JPG",
      photoAlt: "Toa Baja 00949, Puerto Rico",
      photoTitle: "Campanilla",
    },
    {
      id: 6078433077,
      photoSrc: "assets/images/photography/6078433077.JPG",
      photoAlt: "College Green, Dublin 2, Ireland",
      photoTitle: "Trinity College",
    },
    {
      id: 4034431755,
      photoSrc: "assets/images/photography/4034431755.JPG",
      photoAlt:
        "401 Deep Eddy Ave, Austin, TX 78703",
      photoTitle: "Deep Eddy Municipal Pool",
    },
    {
      id: 9797,
      photoSrc: "assets/images/photography/9797.JPG",
      photoAlt: "(18.4889958, -66.9593820)",
      photoTitle: "Playa Guajataca",
    },
    {
      id: 5898005341,
      photoSrc: "assets/images/photography/5898005341.JPG",
      photoAlt:
        "No. 25號, Lane 49, Chifeng St, Datong District, Taipei City, Taiwan 10353",
      photoTitle: "Datong District",
    },
    {
      id: 70710021,
      photoSrc: "assets/images/photography/70710021.JPG",
      photoAlt: "5 Chome-3-18 Shinjuku, Shinjuku City, Tokyo 160-0022, Japan",
      photoTitle: "Shinjuku",
    },
    {
      id: 70750028,
      photoSrc: "assets/images/photography/70750028.JPG",
      photoAlt: "Japan, 〒616-8386 Kyoto, Ukyo Ward, Sagakamenoocho, 官有地内 嵐山夢祐斎",
      photoTitle: "Arashiyama, Kyoto",
    },
    {
      id: 295350033,
      photoSrc: "assets/images/photography/295350033.JPG",
      photoAlt: "Puerto Rico",
      photoTitle: "Vega Alta",
    },
    {
      id: 63960011,
      photoSrc: "assets/images/photography/63960011.JPG",
      photoAlt: "Austin, Texas",
      photoTitle: "Lady Bird Johnson Wildflower Center",
    },
    {
      id: 70750033,
      photoSrc: "assets/images/photography/70750033.JPG",
      photoAlt:
        "Japan, \u3016616-8386 Kyoto, Ukyo Ward, Sagakamenoocho, 1 \u5b98\u6709\u5730\u5185 \u5d50\u5c71\u5922\u7950\u658e \u4eac\u90fd\u5e02\u53f3\u4eac\u533a\u5d6f\u5ce8\u4e80\u30ce\u5c3e\u753a \u5b98\u6709\u5730\u5185 \u677e\u7c5f\u5eb5\u96a3",
      photoTitle: "Somekobo Yumeyusai",
    },
    {
      id: 4705,
      photoSrc: "assets/images/photography/4705.JPG",
      photoAlt: "Spain",
      photoTitle: "Avila",
    },
    {
      id: 4516,
      photoSrc: "assets/images/photography/4516.JPG",
      photoAlt: "Madrid, Spain",
      photoTitle: "Jacinto Benavente",
    },
    {
      id: 70710022,
      photoSrc: "assets/images/photography/70710022.JPG",
      photoAlt: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
      photoTitle: "Tokyo Tower",
    },
    {
      id: 1201,
      photoSrc: "assets/images/photography/1201.JPG",
      photoAlt: "Puerto Rico",
      photoTitle: "San Juan Pier",
    },
    {
      id: 2016,
      photoSrc: "assets/images/photography/2016.JPG",
      photoAlt: "Walnut Creek Park in Austin, Texas",
      photoTitle: "Vera",
    },
    {
      id: 6841,
      photoSrc: "assets/images/photography/6841.JPG",
      photoAlt: "Seattle, Washington",
      photoTitle: "Seattle Japanese Garden",
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
