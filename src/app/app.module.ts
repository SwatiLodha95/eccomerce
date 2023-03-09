import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { SucessComponent } from './sucess/sucess.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';
import { MainheaderComponent } from './home/mainheader/mainheader.component';
import { ClothComponent } from './cloth/cloth.component';
import { CosmaticsComponent } from './cosmatics/cosmatics.component';
import { FootwearComponent } from './footwear/footwear.component';
import { SmartWatchComponent } from './smart-watch/smart-watch.component';
import { FasionComponent } from './fasion/fasion.component';
import { PhoneComponent } from './phone/phone.component';
import { JacketComponent } from './jacket/jacket.component';
import { SunglassComponent } from './sunglass/sunglass.component';
import { CrockComponent } from './crock/crock.component';
import { Cloth1Component } from './cloth1/cloth1.component';
import { EcomdataComponent } from './ecomdata/ecomdata.component';
import { CartComponent } from './cart/cart.component';
import { Footware1Component } from './footware1/footware1.component';
import { Cosmatics1Component } from './cosmatics1/cosmatics1.component';
import { SmartWatch1Component } from './smart-watch1/smart-watch1.component';
import { Fasion1Component } from './fasion1/fasion1.component';

import { Phones1Component } from './phones1/phones1.component';
import { Sunglasses1Component } from './sunglasses1/sunglasses1.component';
import { Crock1Component } from './crock1/crock1.component';
import { DatabaseSerService } from './ecomdata/database-ser.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    PasswordComponent,
    SucessComponent,
    HomeComponent,
    AuthenticationComponent,
    MainheaderComponent,
    ClothComponent,
    CosmaticsComponent,
    FootwearComponent,
    SmartWatchComponent,
    FasionComponent,
    PhoneComponent,
    JacketComponent,
    SunglassComponent,
    CrockComponent,
    Cloth1Component,
    EcomdataComponent,
    CartComponent,
    Footware1Component,
    Cosmatics1Component,
    SmartWatch1Component,
    Fasion1Component,
    Phones1Component,
    Sunglasses1Component,
    Crock1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    DatabaseSerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
