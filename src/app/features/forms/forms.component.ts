import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
	selector: "app-forms",
	imports: [CommonModule, ReactiveFormsModule, CardComponent],
	templateUrl: "./forms.component.html",
	styleUrls: ["./forms.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
	private fb = inject(FormBuilder);
	isSubmitting = false;

	form = this.fb.group({
		name: ["", [Validators.required, Validators.minLength(3)]],
		email: ["", [Validators.required, Validators.email]],
		role: ["", Validators.required],
		terms: [false, Validators.requiredTrue],
	});

	onSubmit() {
		if (this.form.valid) {
			this.isSubmitting = true;
			console.log(this.form.value);
			// Simulate API call
			setTimeout(() => {
				this.isSubmitting = false;
				this.form.reset();
				alert("Form submitted successfully!");
			}, 1500);
		} else {
			this.form.markAllAsTouched();
		}
	}
}
