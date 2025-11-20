import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

export const routes: Routes = [
	{
		path: "",
		component: AdminLayoutComponent,
		children: [
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
			{
				path: "dashboard",
				loadComponent: () =>
					import("./features/dashboard/dashboard.component").then((m) => m.DashboardComponent),
			},
			{
				path: "tables",
				loadComponent: () =>
					import("./features/tables/tables.component").then((m) => m.TablesComponent),
			},
			{
				path: "forms",
				loadComponent: () =>
					import("./features/forms/forms.component").then((m) => m.FormsComponent),
			},
		],
	},
	{
		path: "**",
		redirectTo: "dashboard",
	},
];
