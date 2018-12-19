import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import HeadMaster from '@/components/HeadMaster.vue'
//import LeftSide from '@/components/LeftSide.vue'
//import CommondBar from '@/components/CommondBar.vue'
// import CreatePage from '@/components/CreatePage.vue'
import Dlayout from '@/views/Design/Dlayout.vue'
import CreateProdattrib from '@/views/Design/CreateProdattrib.vue'
import CreateCode from '@/views/Design/CreateCode.vue'
import CreateProd from '@/views/Design/CreateProd.vue'
import ImportProd from '@/views/Design/ImportProd.vue'
import ImportDraw from '@/views/Design/ImportDraw.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/About.vue')
    },

    // {
    //   path: '/CreateProdattrib',
    //   name: 'CreateProdattrib',
    //   component: CreateProdattrib
    // },
    {
      path: '/Dlayout',
      name: 'Dlayout',
      component: Dlayout,
      children: [{
          path: 'DCotent',
          name: 'DCotent',
          component: DCotent,
          children: [{
              path: 'CommondBar',
              name: 'CommondBar',
              component: CommondBar
            },
            {
              path: 'Foot',
              name: 'Foot',
              component: Foot
            }
          ]
        },
        {
          path: '/HeadMaster',
          name: 'HeadMaster',
          component: HeadMaster
        },
        {
          path: '/LeftSide',
          name: 'LeftSide',
          component: LeftSide
        },
      ],

    },
    {
      path: '/Dlayout',
      // path: './Design/Dlayout.vue', 不明白路径是怎么回事，为什么这样设置
      name: 'Dlayout',
      component: Dlayout
    },
  ]
})