// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { first } from 'rxjs';
// import { AuthService } from '../../services/auth.service';
// import { UserService } from '../../services/user.service';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'],
// })
// export class RegisterComponent implements OnInit {
//   registerForm!: FormGroup;
//   loading = false;
//   submitted = false;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private authenticationService: AuthService,
//     private userService: UserService
//   ) {
//     if (this.authenticationService.currentUserValue) {
//       this.router.navigate(['/']);
//     }
//   }
//
//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group(
//       {
//         displayName: ['', Validators.required],
//         email: ['', Validators.required],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         //passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],
//       },
//       {
//         //validator: RegisterComponent.ConfirmedValidator('password', 'passwordRepeat')
//       }
//     );
//   }
//
//   get f() {
//     return this.registerForm.controls;
//   }
//
//   onSubmit() {
//     this.submitted = true;
//
//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//       return;
//     }
//
//     this.loading = true;
//     this.userService
//       .register(this.registerForm.value)
//       .pipe(first())
//       .subscribe({
//         next: (data) => {
//           console.log(data);
//           this.router.navigate(['/login']);
//         },
//         error: (error) => {
//           console.log(error);
//           this.loading = false;
//         },
//       });
//   }
//
//   static ConfirmedValidator(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];
//       if (
//         matchingControl.errors &&
//         !matchingControl.errors['confirmedValidator']
//       ) {
//         return;
//       }
//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ confirmedValidator: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//     };
//   }
// }
