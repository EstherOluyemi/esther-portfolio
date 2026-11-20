
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
  errorMessage = signal('');
  isSubmitting = signal(false);

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.feedbackMessage.set('');
    this.errorMessage.set('');

    try {
      const response = await fetch(
        'https://formspree.io/f/myewdgpw',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(this.contactForm.getRawValue()),
        }
      );

      if (!response.ok) {
        throw new Error('Message submission failed.');
      }

      this.feedbackMessage.set(
        'Your message has been sent successfully!'
      );

      this.contactForm.reset();
    } catch {
      this.errorMessage.set(
        'Sorry, your message could not be sent. Please try again.'
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }

  clearFeedback(): void {
    this.feedbackMessage.set('');
    this.errorMessage.set('');
  }

  resetForm(): void {
    this.feedbackMessage.set('');
    this.errorMessage.set('');
    this.contactForm.reset();
  }
}
