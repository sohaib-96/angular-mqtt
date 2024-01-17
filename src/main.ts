import './ws.polly-fill';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MqttModule, MQTT_SERVICE_OPTIONS } from 'ngx-mqtt';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MqttModule.forRoot(MQTT_SERVICE_OPTIONS)),
  ]
}).catch((err) => console.error(err));
