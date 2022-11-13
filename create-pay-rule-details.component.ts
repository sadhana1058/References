import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayruleService } from 'src/app/services/payment-rules-service/payrule.service';

@Component({
  selector: 'app-create-pay-rule-details',
  templateUrl: './create-pay-rule-details.component.html',
  styleUrls: ['./create-pay-rule-details.component.css']
})
export class CreatePayRuleDetailsComponent implements OnInit {

  createPRForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private pr:PayruleService) { }


  ngOnInit(): void {this.createPRForm = this.fb.group(
    {       
   // PaymentRuleID:['',Validators.required],
    PaymentRuleDetail:['',Validators.required],
    PaymentRuleType:['',Validators.required]
    }
    )
  }
onSubmit(){
  console.log(this.createPRForm.value)
  this.pr.createPaymentRule(this.createPRForm.value)
      .subscribe({
        next:(res)=>{
          //alert(res.message)
          this.router.navigateByUrl('/PaymentRule/All')
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })


}
}