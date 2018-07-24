import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { MsmPage } from '../pages/msm/msm';
import { PanelPage } from '../pages/panel/panel';
import { PerfilPage } from '../pages/perfil/perfil';
import { RotoplasServicios } from '../servicios/rotoplas.servicios';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//configuración de la BD en FireBase a utilizar
export const firebaseConfig = {
  apiKey: "AIzaSyB_dGUVmTWg-gN_GBRORHz89vFGbhFzgwE",
  authDomain: "rotoplasapp-12198.firebaseapp.com",
  databaseURL: "https://rotoplasapp-12198.firebaseio.com",
  projectId: "rotoplasapp-12198",
  storageBucket: "rotoplasapp-12198.appspot.com",
  messagingSenderId: "594354482315"};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MsmPage,
    PanelPage,
    PerfilPage,
    RegistroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    MsmPage,
    PanelPage,
    PerfilPage,
    RegistroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RotoplasServicios
  ]
})
export class AppModule {}
