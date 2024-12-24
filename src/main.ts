import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LoggingService } from './app/logging.service';
import { TasksService } from './app/tasks/tasks.service';
bootstrapApplication(AppComponent, { providers: [LoggingService,TasksService] }).catch(
  (err) => console.error(err)
);
