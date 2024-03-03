import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, PLATFORM_ID, ViewChild, inject } from "@angular/core";
import { Map } from "leaflet";

@Component({
  standalone: true,
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-[300px]">
      <div class="h-full" id="map" #leafletMap></div>
    </div>
  `,
})
export class MapComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('leafletMap') private mapElement!: ElementRef;

  private map: Map | null = null;

  public ngAfterViewInit() :void {
    if(isPlatformBrowser(this.platformId)) {
      this.initializeMap();
    }
  }

  private async initializeMap() :Promise<void> {
    try {
      // Dynamic import will return a promise
      const L = await import('leaflet');

      // Base tiles
      const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
      });

      const cycloOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
      });

      const baseTiles = {
        "OpenStreetMap": osm,
        "CycloOSM": cycloOSM
      }

      // Create a map
      this.map = L.map(this.mapElement.nativeElement, {
        center: [57.048, 9.9187],
        zoom: 14,
        layers: [cycloOSM],
        zoomControl: false,
        scrollWheelZoom: false
      });

      L.control.layers(baseTiles).addTo(this.map);
    }
    catch(err) {
      console.log('Something went wrong: ,', err);
    }
  }
}