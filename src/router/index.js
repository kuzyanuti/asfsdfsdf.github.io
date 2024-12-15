import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpgradeView from '../views/UpgradeView.vue'
import ShopView from '../views/shopView.vue'
import ShopTab1 from '../views/ShopTab1.vue'
import ShopTab2 from '../views/ShopTab2.vue'
import ShopTab3 from '../views/ShopTab3.vue'
import ShopTab4 from '../views/ShopTab4.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () =>
                import ('../views/TasksView.vue'),
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopView,
            children: [{
                    path: 'tab1',
                    component: ShopTab1,
                },
                {
                    path: 'tab2',
                    component: ShopTab2,
                },
                {
                    path: 'tab3',
                    component: ShopTab3,
                },
                {
                    path: 'tab4',
                    component: ShopTab4,
                },
            ],
        },
        {
            path: '/shield',
            name: 'shield',
            component: () =>
                import ('../views/ClanView.vue'),
        },
        {
            path: '/friends',
            name: 'friends',
            component: () =>
                import ('../views/FriendsView.vue'),
        },
        {
            path: '/upgrades',
            name: 'upgrades',
            component: UpgradeView,
        },
    ],
})

export default router