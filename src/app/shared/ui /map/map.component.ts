import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, PLATFORM_ID, ViewChild, inject } from "@angular/core";
import { Map } from "leaflet";

@Component({
  standalone: true,
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-[300px]">
      <div class="h-full w-full" id="map" #leafletMap></div>
    </div>
  `,
})
export class MapComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('leafletMap') private mapElement!: ElementRef;

  private L!: any;
  private map: Map | null = null;

  public ngAfterViewInit() :void {
    if(isPlatformBrowser(this.platformId)) {
      this.importMap();
    }
  }

  public async importMap() :Promise<void> {
    try {
      // Dynamic import will return a promise
      this.L = await import('leaflet');

      this.initializeMap();
    }
    catch(err) {
      console.log('Something went wrong: ,', err);
    }
  }

  private initializeMap() :void {
    // Base tiles
    const osm = this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    const cycloOSM = this.L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    const baseTiles = {
      "OpenStreetMap": osm,
      "CycloOSM": cycloOSM
    }

    // Create a map
    this.map = this.L.map(this.mapElement.nativeElement, {
      center: [57.048, 9.9187],
      zoom: 14,
      layers: [cycloOSM],
      zoomControl: false,
      scrollWheelZoom: false
    });

    this.L.control.layers(baseTiles).addTo(this.map);
  }
}