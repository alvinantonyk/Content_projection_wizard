import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-step',

  templateUrl: './wizard-step.component.html',
  styleUrl: './wizard-step.component.scss'
})
export class WizardStepComponent {
  @Input() isActive = false;
}
