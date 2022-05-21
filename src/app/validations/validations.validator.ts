import { FormControl, FormGroup } from "@angular/forms";

// alphanumeric char and space 
export class TextFieldVaildator {
    static validTextField(fc: FormControl) {
        if (fc.value != undefined && fc.value !== '' && fc.value !== null) {
            const regex = /^[0-9a-zA-Z]+$/;
            if (regex.test(fc.value)) {
                return null
            } else {
                return { validTextField: true }
            }
        } else {
            return null;
        }
    }
}




export class NumerictFieldVaildator {
    static validNumerictField(fc: FormControl) {
        if (fc.value != undefined && fc.value !== '' && fc.value !== null) {
            const regex = /[0-9]+/;
            if (regex.test(fc.value)) {
                return null
            } else {
                return { validNumerictField: true }
            }
        } else {
            return null;
        }
    }
}




export class CharFieldVaildator {
    static validCharField(fc: FormControl) {
        if (fc.value != undefined && fc.value !== '' && fc.value !== null) {
            const regex = /^[a-zA-Z]+$/;
            if (regex.test(fc.value)) {
                return null
            } else {
                return { validCharField: true }
            }
        } else {
            return null;
        }
    }
}



export class EmailFieldVaildator {
    static validEmailField(fc: FormControl) {
        if (fc.value != undefined && fc.value !== '' && fc.value !== null) {
            const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9_.]+$/;
            if (regex.test(fc.value)) {
                return null
            } else {
                return { validEmailField: true }
            }
        } else {
            return null;
        }
    }
}




export class NoWhiteSpaceVaildator {
    static validNoWhiteSpaceField(fc: FormControl) {
        if (fc.value != undefined && fc.value !== '' && fc.value !== null) {
            const isWhiteSpace = (fc.value.toString().trim().length == 0)
            if (!isWhiteSpace) {
                return null
            } else {
                return { validNoWhiteSpaceField: true }
            }
        } else {
            return null;
        }
    }
}


// validator to check 2 field to be same 

export function MustMatchvalidator(contorlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[contorlName];
        const matchingcontrol = formGroup.controls[matchingControlName];

        // if(matchingcontrol.errors && !matchingcontrol.errors.mustMatch){
        //     return
        // }
        if (control.value !== matchingcontrol.value) {
            matchingcontrol.setErrors({ mustMatch: true });
        } else {
            matchingcontrol.setErrors(null);
        }

    }
}