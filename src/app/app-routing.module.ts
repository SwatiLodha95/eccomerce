import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { SucessComponent } from './sucess/sucess.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainheaderComponent } from './home/mainheader/mainheader.component';
import { ClothComponent } from './cloth/cloth.component';
import { CosmaticsComponent } from './cosmatics/cosmatics.component';
import { FootwearComponent } from './footwear/footwear.component';
import { SmartWatchComponent } from './smart-watch/smart-watch.component';
import { FasionComponent } from './fasion/fasion.component';
import { SunglassComponent } from './sunglass/sunglass.component';
import { PhoneComponent } from './phone/phone.component';
import { JacketComponent } from './jacket/jacket.component';
import { CrockComponent } from './crock/crock.component';
import { Cloth1Component } from './cloth1/cloth1.component';
import { EcomdataComponent } from './ecomdata/ecomdata.component';
import { Footware1Component } from './footware1/footware1.component';
import { Cosmatics1Component } from './cosmatics1/cosmatics1.component';
import { SmartWatch1Component } from './smart-watch1/smart-watch1.component';
import { Fasion1Component } from './fasion1/fasion1.component';
import { Phones1Component } from './phones1/phones1.component';
import { Sunglasses1Component } from './sunglasses1/sunglasses1.component';
import { Crock1Component } from './crock1/crock1.component';

const routes: Routes = [
 {path: "", redirectTo: 'header', pathMatch: 'full'},
 {path: "header", component: HeaderComponent},
 {path: "login", component: LoginComponent},
 {path: "register",component: RegisterComponent},
 {path: "password", component: PasswordComponent},
 {path: "sucess", component: SucessComponent},
 {path: "home", component: HomeComponent, children: [
 {path: "mainheader", component: MainheaderComponent}]},
 {path: "auth", component: AuthenticationComponent},
 {path: "cloth", component: ClothComponent},
 {path: "cosmatics", component: CosmaticsComponent},
 {path: "footwear", component: FootwearComponent},
 {path: "smart-watch", component: SmartWatchComponent},
 {path: "fasion", component: FasionComponent},
 {path: "sunglass", component: SunglassComponent},
 {path: "phone", component: PhoneComponent},
 {path: "jacket", component: JacketComponent},
 {path: "crock", component: CrockComponent},
 {path: "cloth1", component: Cloth1Component},
 {path: "ecomdata", component: EcomdataComponent},
 {path: "footwear1", component: Footware1Component},
 {path: "cosmatics1", component: Cosmatics1Component},
 {path: "smartwatch1", component: SmartWatch1Component},
 {path: "fasion1",component: Fasion1Component},
 {path: "phones1", component: Phones1Component},
 {path: "sunglasses1", component: Sunglasses1Component},
 {path: "crock1", component: Crock1Component}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
