import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let submitButton:any;
  
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule,
        ReactiveFormsModule, 
        FormsModule]
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    component  = fixture.componentInstance;
    

    // get test component from the fixture
    component.ngOnInit();

    //submit button
    submitButton = fixture.debugElement.nativeElement.querySelector('#submitButton');

  });


  //check empty form should be invalid
  it('form invalid when empty', () => {
    fixture.detectChanges();
    expect(component.formdata.valid).toBeFalsy();
  });

  //submit button should be disable on empty form
  it('Submit button disable when form is empty', () => {
    fixture.detectChanges();
    expect(submitButton.disabled).toBeTruthy();
   });

    //check valid form after entering vaues
  it('Check if form is valid or not after filling the form and submit button gets enable', () => {
    fixture.detectChanges();
    component.formdata.controls['carrierName'].setValue('Ups');
    component.formdata.controls['carrierPhoneNumber'].setValue('987654321');
    component.formdata.controls['location'].setValue('Brampton');
    component.formdata.controls['date'].setValue('06/06/2022');
    component.formdata.controls['numberOfTrucksAvailable'].setValue('4');
    expect(component.formdata.valid).toBeTruthy();
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
  });
});

