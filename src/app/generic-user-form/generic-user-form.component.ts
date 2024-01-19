import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-generic-user-form',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule,],
  templateUrl: './generic-user-form.component.html',
  styleUrls: ['./generic-user-form.component.css']
})
export class GenericUserFormComponent implements OnInit {
  form: FormGroup | any;
  isUpdate: boolean = false;
  isFormVisible: boolean | undefined;
  userId: string | undefined;
  formData: any = {
    username: '',
    email: '',
  };

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['userId'];

      this.isUpdate = !!userId;

      this.initializeForm();
    });
  }

  initializeForm() {
    
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });

    if (this.isUpdate) {
      
      const userData = this.getUserData(); 
      this.form.patchValue(userData);
    }
  }
  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit() {
    console.log('Form submitted with data:', this.form.value);
  }

  private getUserData() {
    return {
      fullName: 'John Doe',
      address: '123 Main St',
      email: 'john@example.com',
      contact: '1234567890'
    };
  }
}
