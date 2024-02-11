import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { register } from 'swiper/element/bundle';
import { HomeModule } from './pages/0-home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

register();

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HomeModule,
        HttpClientModule,
        TranslocoRootModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
