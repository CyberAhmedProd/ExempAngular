import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/Tutorial/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './components/Tutorial/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/Tutorial/tutorial-details/tutorial-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
