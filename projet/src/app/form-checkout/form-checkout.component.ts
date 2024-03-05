import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-form-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-checkout.component.html',
  styleUrl: './form-checkout.component.css'
})
export class FormCheckoutComponent {

  public applyForm: FormGroup;

  protected classes: String[] = [];

  private submitted: boolean = false;

  constructor(private EcommerceService: EcommerceService, private CartService: CartService) {
    this.applyForm = new FormGroup({
      lastname: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      zipcode: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]), 
      city: new FormControl('', Validators.required),
      card: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]), 
      cardDate: new FormControl('', [Validators.required, this.cardDateValidator]) 
    })
  }

  private cardDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const cardDate = new Date(control.value);
  
    if (cardDate < currentDate) {
      return { 'cardDateInvalid': true };
    }
    return null;
  }

  onSubmit(): void {
    this.submitted = true;

    let user = {
      lastname: this.applyForm.value.lastname,
      firstname: this.applyForm.value.firstname,
      address: this.applyForm.value.address,
      zipcode: this.applyForm.value.zipcode,
      city: this.applyForm.value.city,
      card: this.applyForm.value.card,
      cardDate: this.applyForm.value.cardDate
    }


    if (this.applyForm.invalid) {
      return;
    }

    this.EcommerceService.postPurchase(JSON.stringify({panier : this.getCart(), user : user}, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.applyForm.reset();
  }

  getCart = () => this.CartService.getCart()
}
