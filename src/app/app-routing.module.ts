import { MainPageComponent } from './pages/dbz/main-page/main-page.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";



const routes: Routes = [
    {
        path: '', component: HomeComponent

    },
    {
        path: 'hero', component: HeroPageComponent
    },
    {
        path: 'dragonBall', component: MainPageComponent
    },
    {
        path: '**', redirectTo: ''
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}