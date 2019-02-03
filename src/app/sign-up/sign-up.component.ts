import { Form, NgForm } from '@angular/forms';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private userService: UserService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: Form) {

    this.user = {
      FirstName: '',
      LastName: '',
      UserName : '',
      Password : '',
      Email : ''
    };
}
Signup(form: NgForm) {
  console.log(form.value);
  this.userService.registerUser(form.value).subscribe((res: any) => {
    console.log('res', res);
    if (res.Succeeded) {
      console.log('yes');
      this.toastrService.success('User Registration done.', 'sd', { timeOut: 3423847238 });
      //this.toastrService.success('testing', 'Test', { progressBar: true });
      //this.resetForm(form);
    } else {
      this.toastrService.error(res.Errors[0]);
    }
  });
}
}
