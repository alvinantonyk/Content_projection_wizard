import { NgModule } from "@angular/core";
import { WizardComponent } from "./wizard/wizard.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { WizardStepComponent } from "./wizard-step/wizard-step.component";

@NgModule({
    declarations:[WizardComponent,AppComponent,WizardStepComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent],
})

export class AppModule{}