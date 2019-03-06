import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const PagesRoutes: Routes = [
    {
        path: 'pages',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
];
