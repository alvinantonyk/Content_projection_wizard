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
  }

  show(i:any){
    
      this.steps.toArray()[this.currentStepIndex].isActive = false;
      this.currentStepIndex=i;
      this.steps.toArray()[this.currentStepIndex].isActive = true;
    

  }

  goToNextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.steps.toArray()[this.currentStepIndex].isActive = false;
      this.currentStepIndex++;
      this.steps.toArray()[this.currentStepIndex].isActive = true;
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
