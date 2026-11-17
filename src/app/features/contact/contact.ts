import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideMail } from '@lucide/angular';

@Component({
  imports: [ReactiveFormsModule, LucideMail],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(FormBuilder);

  feedbackMessage = signal('');

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  })

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Form submitted: ', this.contactForm.getRawValue());

    this.feedbackMessage.set('Your message has been submitted successfully!');

    this.contactForm.reset();
  }

  clearFeedback(): void {
    this.feedbackMessage.set('');
  }
}
