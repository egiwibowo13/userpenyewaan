import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { IndexfooterComponent } from './indexfooter/indexfooter.component';
import { IndexheaderComponent } from './indexheader/indexheader.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { RentformComponent } from './rentform/rentform.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RentdetailComponent } from './profil/rentdetail/rentdetail.component';
import { SearchComponent } from './search/search.component';

let routes : Routes = [
  {path:"",component:HomepageComponent},
  {path:"item/detail/:id",component:ItemdetailComponent},
  {path:"item/rent/:id",component:RentformComponent},
  {path:"login",component:LoginComponent},
  {path:"profile/:id",component:ProfilComponent},
  {path:"profil/rentdetail/:id",component:RentdetailComponent},
  {path:"search/:id",component:SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexfooterComponent,
    IndexheaderComponent,
    IndexcontentComponent,
    HomepageComponent,
    ItemdetailComponent,
    RentformComponent,
    LoginComponent,
    ProfilComponent,
    RentdetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
