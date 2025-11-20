import { ChangeDetectionStrategy, Component, inject, signal, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MockDataService } from "../../core/services/mock-data.service";
import { CardComponent } from "../../shared/components/card/card.component";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
	selector: "app-tables",
	imports: [CommonModule, FormsModule, CardComponent],
	templateUrl: "./tables.component.html",
	styleUrls: ["./tables.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent {
	private mockDataService = inject(MockDataService);
	private rawData = toSignal(this.mockDataService.getTableData(), {
		initialValue: [],
	});
	searchTerm = signal("");

	filteredData = computed(() => {
		const term = this.searchTerm().toLowerCase();
		const data = this.rawData();
		if (!term) return data;
		return data.filter(
			(item) => item.name.toLowerCase().includes(term) || item.email.toLowerCase().includes(term),
		);
	});
}
