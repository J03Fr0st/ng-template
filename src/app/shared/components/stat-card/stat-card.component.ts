import { Component, ChangeDetectionStrategy, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Stat } from "../../../models";
import { CardComponent } from "../card/card.component";

@Component({
	selector: "app-stat-card",
	imports: [CommonModule, CardComponent],
	templateUrl: "./stat-card.component.html",
	styleUrls: ["./stat-card.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
	stat = input.required<Stat>();
}
