import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'search', loadChildren: './view-cuts/view-cuts.module#ViewCutsModule'},
    { path: 'addCut', loadChildren: './add-cuts/add-cuts.module#AddCutsModule'},
    { path: 'home', loadChildren: './home/home.module#HomeModule'}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
