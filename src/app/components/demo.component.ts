import { Component, Input } from '@angular/core';
import { DemoService } from '../shared/demo.service';

@Component({
  selector: 'demo1',
  templateUrl: './demo.component.html',
  styleUrls: []
})
export class DemoComponent {
  constructor(public demoService: DemoService) {}

  @Input() valor: string = "";

}
