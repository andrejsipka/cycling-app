import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { HlmCardDirective } from "@spartan-ng/ui-card-helm";

@Component({
  selector: 'app-metrics-widget',
  standalone: true,
  imports: [
    HlmCardDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div hlmCard>
      <div class="p-4">
        <div class="flex justify-center items-center space-x-2">
          <i class="material-symbols-outlined text-lg">{{googleIcon}}</i>
          <p class="text-muted-foreground text-sm">{{label}}</p>
        </div>

        <div>
          <!-- Content Projection -->
          <ng-content />
        </div>
      </div>
    </div>

  `
})
export class MetricsWidgetComponent {
  @Input() public googleIcon!: string;
  @Input({ required: true }) public label!: string;
}