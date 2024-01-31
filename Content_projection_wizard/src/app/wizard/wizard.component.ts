import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';


@Component({
  selector: 'app-wizard',

  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent implements AfterContentInit {

  @ContentChildren(WizardStepComponent) steps!: QueryList<WizardStepComponent>;
  currentStepIndex = 0;

  ngAfterContentInit() {
    this.steps.toArray()[this.currentStepIndex].isActive = true;
    this.steps.toArray()[this.currentStepIndex].initActive=true
  }

  show(i:any){
    
    if(this.steps.toArray()[i].initActive==true)
     { this.steps.toArray()[this.currentStepIndex].isActive = false;
      console.log("clicked")
      this.currentStepIndex=i;
      this.steps.toArray()[this.currentStepIndex].isActive = true;
    }

  }

  goToNextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      
      console.log(this.steps.toArray()[this.currentStepIndex].initActive)
      this.steps.toArray()[this.currentStepIndex].isActive = false;
      this.currentStepIndex++;
      this.steps.toArray()[this.currentStepIndex].isActive = true;
      this.steps.toArray()[this.currentStepIndex].initActive=true
    }
  }

  goToPreviousStep() {
    if (this.currentStepIndex > 0) {
      this.steps.toArray()[this.currentStepIndex].isActive = false;
      this.currentStepIndex--;
      this.steps.toArray()[this.currentStepIndex].isActive = true;
    }
  }
}
