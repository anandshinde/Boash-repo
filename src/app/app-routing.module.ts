import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
 { path:' ', component: TaskComponent},
 { path:'task', component:TaskComponent },
 { path:'contactUs',component:ContactUsComponent},
 { path:'**', redirectTo:'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
