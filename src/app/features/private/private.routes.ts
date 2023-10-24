import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./gestion-dia-dia/gestion-dia-dia.routes').then(f => f.routes)
    }
]