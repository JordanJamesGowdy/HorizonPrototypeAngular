import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeverityComponent } from './severity/severity.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DataQualityLandingComponent } from './data-quality-landing/data-quality-landing.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'severity', component: SeverityComponent },
  { path: 'dataquality', component: DataQualityLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
