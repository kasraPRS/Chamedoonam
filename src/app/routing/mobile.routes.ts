
export class MobileRoutes {
    static routes = [
        {
            path: '',
            loadChildren: () => import('../home/mobile-home.module').then(m => m.MobileHomeModule)
        }
    ]
}