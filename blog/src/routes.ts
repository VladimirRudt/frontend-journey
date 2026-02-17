import { Routes } from "@angular/router";
import { Arctile } from "./app/pages/arctile/arctile";
import { Home } from "./app/pages/home/home";

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Vladimir\'s Blog',
    },
    {
        path: 'arcticles/:id',
        component: Arctile,
        title: 'Articles',
    },
]

export default routeConfig;