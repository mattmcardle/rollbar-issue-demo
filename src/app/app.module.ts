import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, Injectable, Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import * as Rollbar from 'rollbar';


const rollbarConfig = {
    accessToken: 'c9269e4d465c489aa5527c8e61b90fb4',
    captureUncaught: true,
    captureUnhandledRejections: true,
    codeVersion: '1'
};

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
    rollbar: any;
    constructor(private injector: Injector) {
    }

    handleError(err: any): void {
        const rollbar = this.injector.get(Rollbar);
        if (err instanceof Response) {
            rollbar.error('uh oh');
            return;
        }
        rollbar.error(err.originalError || err);
    }

    getHttpError(response: Response) {
        return response.statusText + ' response from ' + response.url;
    }
}

export function rollBarFactory() {
    return new Rollbar(rollbarConfig);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      {provide: ErrorHandler, useClass: RollbarErrorHandler},
      {
          provide: Rollbar,
          useFactory: rollBarFactory
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
