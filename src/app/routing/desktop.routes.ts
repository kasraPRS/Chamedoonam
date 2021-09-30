import { RulesComponent } from './../layout/footer/rules/rules.component';
import { ContactUsComponent } from './../layout/footer/contact-us/contact-us/contact-us.component';
import { AboutUsComponent } from './../layout/footer/about-us/about-us/about-us.component';
import { UserProfileControlComponent } from './../layout/user-profile-control/user-profile-control.component';
import { DesktopFullLayoutComponent } from '../layout/full-layout/desktop-full-layout/desktop-full-layout.component';
import { SimpleLayoutComponent } from '../layout/simple-layout/simple-layout.component';
import { TestLayoutComponent } from '../layout/test-layout/test-layout.component';

export class DesktopRoutes {
    static routes = [
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
        },
        {
            path: '',
            component: DesktopFullLayoutComponent,
            children: [
                {
                    path: 'home',
                    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
                },
                {
                    path: 'search-residence',
                    loadChildren: () => import('../search-residence/search-residence.module').then(m => m.SearchResidenceModule)
                },
                {
                    path: 'residence',
                    loadChildren: () => import('../residence/residence.module').then(m => m.ResidenceModule)
                },
                {
                    path: 'selected-accommodation',
                    loadChildren: () => import('../reservation/reservation.module').then(m => m.ReservationModule)
                },
                {
                    path: 'about-us',
                    component: AboutUsComponent
                },
                {
                    path: "contact-us",
                    component: ContactUsComponent
                },
                {
                    path: "rules",
                    component: RulesComponent
                }
            ]
        }
        ,
        {
            path: '',
            component: SimpleLayoutComponent,
            children: [
                {
                    path: 'auth',
                    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
                }
            ]
        },
        {
            path: '',
            component: UserProfileControlComponent,
            children: [
                {
                    path: 'user-profile',
                    loadChildren: () => import('../user-control-panel/user-control-panel.module').then(m => m.UserControlPanelModule)
                }
            ]
        },

    ];
}
