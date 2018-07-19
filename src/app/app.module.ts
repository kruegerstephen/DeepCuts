import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngMaterialModule } from './ang-material/ang-material.module';
import { AppRoutingModule } from './app-routing.module';
import { MatIconRegistry } from '@angular/material';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { CoreServicesModule } from './core-services/core-services.module';
import { LastFmSearchModule } from './lastfm/last-fm-search/last-fm-search.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NavBarModule,
    LastFmSearchModule,
    CoreServicesModule.forRoot(),
    AngMaterialModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustUrl('/assets/mdi.svg'));
  }

 }
