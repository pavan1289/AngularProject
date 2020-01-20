import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidaor(control: AbstractControl) { 
//     let forbidden = /admin/.test(control.value); 
//     return forbidden?{'forbiddenName':{value:control.value}}:null;
//   } // single value we can pass as parameter 

export function  forbiddenNameValidaor(forbiddenName:RegExp):ValidatorFn {
      return  (control: AbstractControl) =>{ 
        let forbidden = forbiddenName.test(control.value); 
        return forbidden?{'forbiddenName':{value:control.value}}:null;
      };
}