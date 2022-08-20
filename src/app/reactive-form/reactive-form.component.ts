import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreditCardPipe } from './credit-card.pipe';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  cardNumber:string='';
  savedData: any;
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z ]+$/),
    ]),
    cardNo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[1-9][0-9]{9}$/),
    ]),
    expiry: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-2][1-9]|[3][0-1])([0][1-9]|[1][1-2])$/),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{3}$/),
    ]),
  });
  constructor() {
  }

  ngOnInit(): void {}

  onSubmit() {
    this.savedData = this.cardForm.value;
    console.log(this.savedData);
  }
  onReset() {
    this.cardForm.reset();
  }
}
