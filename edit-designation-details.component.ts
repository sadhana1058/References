import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { updatedesignationDetails } from 'src/app/models/updateDes.model';
import { DesgnService } from 'src/app/services/designation-details-service/desgn.service';

@Component({
  selector: 'app-edit-designation-details',
  templateUrl: './edit-designation-details.component.html',
  styleUrls: ['./edit-designation-details.component.css']
})
export class EditDesignationDetailsComponent implements OnInit {

  DesForm!: FormGroup
  public eDesg:updatedesignationDetails={
    designationID :0,
    designationName :"",
    designationRole:"",
    designationDepartment :"" 
  };
  
  constructor(private fb:FormBuilder,private router:Router,private des:DesgnService,private route:ActivatedRoute) { }


  ngOnInit(): void {this.DesForm = this.fb.group(
    {
    DesignationID:[0,Validators.required],       
    DesignationName:['',Validators.required],
    DesignationRole:['',Validators.required],
    DesignationDepartment:['',Validators.required]
    }
    )

    this.des.getDesById(this.route.snapshot.paramMap.get('id')||"")
    .subscribe(res=>{
      this.eDesg=res;
      console.log(this.eDesg)
    })

  }
onSubmit(){
  //console.log(this.DesForm.value)
 this.DesForm.value.DesignationID=Number(this.route.snapshot.paramMap.get('id'))
 //console.log(this.DesForm.value)
  this.des.updateDesignationById(this.DesForm.value)
  
      .subscribe({
        
        next:(res)=>{
         // console.log(this.DesForm.value)
          //alert(res.message)
          this.router.navigateByUrl('/Designation/View')
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })


}
}
