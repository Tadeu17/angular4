import { Component } from '@angular/core';
import { DemoService } from './shared/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(public demoService: DemoService) {}

  title = 'app';

  setValue(): string {

    this.demoService.demoVar = "Valor de teste.";
    
    return this.demoService.demoVar;
  }

  getValue(): string {    
    return this.demoService.demoVar;
  }

}
