import { Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/pages/layout-main/layout-main.component';

export const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
        path: "",
        component: LayoutMainComponent,
        loadChildren: () => import('./features/private/private.routes').then(f => f.routes)
    },
    { path: "**", redirectTo: "/", pathMatch: "full" }
]