import { AppConfig } from './appconfig.interface';
import { InjectionToken } from "@angular/core";
// import {environment} from '../../.././'


export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');