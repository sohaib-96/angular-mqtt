import '../ws.polly-fill';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MqttModule, MQTT_SERVICE_OPTIONS } from 'ngx-mqtt';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),importProvidersFrom(MqttModule.forRoot(MQTT_SERVICE_OPTIONS))]
};
