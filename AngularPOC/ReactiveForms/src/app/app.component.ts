import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder,Validators, FormGroup,FormArray} from '@angular/forms';
import { forbiddenNameValidaor } from "./shared/user-name.validator";
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from "./registration.service";


//user defined validator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ReactiveForms';
  regForm:FormGroup;
  

  constructor(private fb:FormBuilder,private regSer:RegistrationService){

  }

 
  get fc(){
    return this.regForm.controls;
  }

  get alternateEmails(){
    return this.regForm.get('alternateEmails') as FormArray;
  }

  addAltEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }


  ngOnInit(){

    this.regForm=this.fb.group({
      //userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(5),forbiddenNameValidaor]],
      userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(5),forbiddenNameValidaor(/password/)]],
      password:[''],
      confirmPassword:[''],
      email:[''],
      subscribe:[false],
      address:this.fb.group({
        city:'',
        state:'',
        postalCode:''
      }),alternateEmails:this.fb.array([]) // this add dynamic value added values to array
    },{validator:PasswordValidator});
   // based on check box value need to changed email field mandatory
    this.regForm.get('subscribe').valueChanges.subscribe(
      checkedvalue=>{
      const email=this.regForm.get('email');
       if(checkedvalue){
         email.setValidators(Validators.required);

       }else{
         email.clearValidators();
       }
       email.updateValueAndValidity();
      }
    );

  }

  

  

  

  
  // regForm=new FormGroup({
  //   userName :new FormControl('Pavan'),
  //   password :new FormControl(''),
  //   confirmPassword : new FormControl(''),

  //   address:new FormGroup({
  //   city :new FormControl(''),
  //   state :new FormControl(''),
  //   postalCode : new FormControl('')

  //   }) 
  // });

  loadApiData(){
    //setValue() we have to load all the values and patch method we can overcome that
    this.regForm.patchValue({
      userName :'Kumar',
      password :'test',
      confirmPassword :'test',
    //   address:{
    //   city :'city',
    //   state :'state',
    //   postalCode :'123456'
    // }
  });
  }
  onSubmit(){
    console.log("just now entered")
    console.log(this.regForm.value);
    this.regSer.registerForm(this.regForm.value).subscribe(
      (response:any)=>console.log('Success',response),
      (error:any)=>console.error('Failed to insert',error)
      );
  }
}
