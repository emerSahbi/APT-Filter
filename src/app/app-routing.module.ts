import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "group", component: GroupComponent },
  { path: "tool", component: ToolComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
