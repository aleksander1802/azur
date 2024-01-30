import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { register } from 'swiper/element/bundle';
import { HomeModule } from './pages/0-home/home.module';
import { AllObjectsModule } from './pages/2-all-objects/all-objects.module';
import { SellModule } from './pages/3-sell/sell.module';

register();

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HomeModule,
        AllObjectsModule,
        SellModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
