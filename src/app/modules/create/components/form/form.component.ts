import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  genres: string[] = [
    'Acción',
    'Suspenso',
    'Terror',
    'Romance',
    'Comedia',
    'Animación',
    'Policial',
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private storeService: StoreService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.floor(Math.random() * 90000) + 10000],
      title: ['', [Validators.required, Validators.minLength(6)]],
      genre: ['', [Validators.required]],
      overview: ['', [Validators.required, Validators.minLength(100)]],
      created: ['', [Validators.required]],
      age: [false],
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.storeService.dispatchCreateMovie(this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  get titleValid(): boolean | undefined {
    return (
      this.form.get('title')?.hasError('required') &&
      this.form.get('title')?.touched
    );
  }

  get titleMinLength(): boolean | undefined {
    return (
      this.form.get('title')?.hasError('minlength') &&
      this.form.get('title')?.touched
    );
  }

  get genreInvalid(): boolean | undefined {
    return (
      this.form.get('genre')?.hasError('required') &&
      this.form.get('genre')?.touched
    );
  }

  get overviewValid(): boolean | undefined {
    return (
      this.form.get('overview')?.hasError('required') &&
      this.form.get('overview')?.touched
    );
  }

  get overviewMinLength(): boolean | undefined {
    return (
      this.form.get('overview')?.hasError('minlength') &&
      this.form.get('overview')?.touched
    );
  }

  get createdInvalid(): boolean | undefined {
    return (
      this.form.get('created')?.hasError('required') &&
      this.form.get('created')?.touched
    );
  }
}
