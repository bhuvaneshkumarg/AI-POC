import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MiddlewareInterceptor } from "./interceptor/middleware.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DndDirective } from './modules/dnd.directive';
import { StrutsConversionModule } from "./modules/struts-conversion/struts-conversion.module";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from './modules/spinner/spinner.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule, DatePipe} from "@angular/common";
import {InputPageComponent} from "./modules/pdf-excel-convertion/input-page/input-page/input-page.component";
import {MatSelectModule} from "@angular/material/select";
import {QuickChatModule} from "./layout/common/quick-chat/quick-chat.module";
import { ChatComponent } from './modules/pdf-excel-convertion/chat-bot/chat/chat.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {FuseAlertModule} from "../@fuse/components/alert";
import {MatListModule} from "@angular/material/list";
const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: "enabled",
};

@NgModule({
  declarations: [AppComponent, DndDirective, SpinnerComponent,InputPageComponent, ChatComponent, SignInComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,


        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        StrutsConversionModule,
        MatChipsModule,
        MatDividerModule,
        MatCardModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,

        MatIconModule,
        MatButtonModule,
        CommonModule,
        MatSelectModule,
        QuickChatModule,
        HttpClientModule,
        MatTooltipModule,
        FuseAlertModule,
        MatListModule,
    ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MiddlewareInterceptor, multi: true },DatePipe
  ],
})
export class AppModule { }
