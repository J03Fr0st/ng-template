import { Injectable, signal } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { Stat, TableData } from "../../models";

@Injectable({
	providedIn: "root",
})
export class MockDataService {
	getStats(): Observable<Stat[]> {
		const stats: Stat[] = [
			{
				title: "Total Revenue",
				value: "$54,230",
				icon: "currency-dollar",
				trend: { value: 12, isPositive: true },
				description: "From last month",
			},
			{
				title: "Active Users",
				value: "2,450",
				icon: "users",
				trend: { value: 5, isPositive: true },
				description: "From last month",
			},
			{
				title: "New Orders",
				value: "185",
				icon: "shopping-cart",
				trend: { value: 2, isPositive: false },
				description: "From last month",
			},
			{
				title: "Pending Items",
				value: "42",
				icon: "clipboard",
				description: "Action needed",
			},
		];
		return of(stats).pipe(delay(500));
	}

	getTableData(): Observable<TableData[]> {
		const data: TableData[] = Array.from({ length: 20 }, (_, i) => ({
			id: (i + 1).toString(),
			name: `User ${i + 1}`,
			email: `user${i + 1}@example.com`,
			role: i % 3 === 0 ? "Admin" : "User",
			status: i % 4 === 0 ? "Inactive" : i % 5 === 0 ? "Pending" : "Active",
			lastLogin: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
		}));
		return of(data).pipe(delay(800));
	}
}
