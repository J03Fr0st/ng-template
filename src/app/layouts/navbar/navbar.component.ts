import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarService } from "../../core/services/sidebar.service";
import { ThemeService } from "../../core/services/theme.service";
import { Theme } from "../../models";

@Component({
	selector: "app-navbar",
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
	sidebarService = inject(SidebarService);
	themeService = inject(ThemeService);

	toggleSidebar() {
		this.sidebarService.toggle();
	}

	changeTheme(theme: Theme) {
		this.themeService.setTheme(theme);
	}
}
