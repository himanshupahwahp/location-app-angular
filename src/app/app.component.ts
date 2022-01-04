import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formModel } from './Model/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formdata: any;
  alertDisplay: boolean = false;
  alertSuccess: boolean = false;
  alertMessage: string = "";
  backgroundDisable: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      carrierName: new FormControl("", Validators.required),
      carrierPhoneNumber: new FormControl("", Validators.required),
      location: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      numberOfTrucksAvailable: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required])
    });
  }


  //run after form submission
  onClickSubmit(data: formModel) {
    

    //resetting form
    this.formdata.reset({});    

    //spinner loading and disable background
    this.disableBackground();
    //email api call
    this.http.post<any>('http://18.191.249.225:8081/api/locations', data).subscribe({
      next: data => {
        this.alertDisplay = true;
        this.alertSuccess = true;
        this.alertMessage = "Email Sent!";
        this.enableBaackground();
        console.log("Success", data);
      },
      error: error => {
        this.alertDisplay = true;
        this.alertSuccess = false;
        this.alertMessage = "Email Sending Failed!";
        this.enableBaackground();
        console.error('There was an error!', error);
      }
  })

  }

  closeAlert() {
    this.alertDisplay = false;
  }

  disableBackground()
  {
    this.backgroundDisable = true;
  }

  enableBaackground()
  {
    this.backgroundDisable = false;
  }
}
