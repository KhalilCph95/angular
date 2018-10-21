import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ForsideComponent } from './forside/forside.component';
import { ProjekterComponent } from './projekter/projekter.component';

const routes: Routes = [
  { path: '', redirectTo:'/forside', pathMatch:'full' },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'forside', component: ForsideComponent },
  { path: 'projekter', component: ProjekterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
