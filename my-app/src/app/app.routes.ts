import { Routes } from '@angular/router';
import { HomeHome } from './home-home/home-home';
import { ContactHome } from './contact-home/contact-home';
import { ProjectsHome } from './projects-home/projects-home';
import { ServicesHome } from './services-home/services-home';

export const routes: Routes = [
    {path: 'home', component: HomeHome},
    {path: 'contact', component: ContactHome},
    {path: 'projects', component: ProjectsHome},
    {path: 'services', component: ServicesHome}
];
