import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { MqttModule, MqttService } from 'ngx-mqtt';

const routeConfig: any = [];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MqttModule],
  template: `
    <h1>Hello from {{ title }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class AppComponent {
  title = 'Angular';

  constructor(private _mqttService: MqttService) {}
}
