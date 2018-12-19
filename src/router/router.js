import Vue from 'vue'
import Router from 'vue-router'
import start from '@/views/Project/start.vue'
import Schedule from '@/views/Project/Schedule/Schedule.vue'
import Purchase from '@/views/Purchase/Purchase.vue'
import Setting from '@/views/Setting/Setting.vue'

import design from './Modules/design.js'
import manufactory from './Modules/manufactory.js'
import listlibrary from './Modules/listlibrary.js'
import dashboard from './Modules/dashboard.js'
import setting from './Modules/setting.js'
// import App from './App.vue'
Vue.use(Router)


export const RouterMap = [

  {
    path: '/',
    component: start,
    children: [{
        path: 'CreateProject',
        components: {
          navside: (resolve) => require(['@/views/Project/Create/CreateProjectnav.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Create/CreateProject.vue'], resolve),
        }
      },
      // {
      //   path: '/',
      //   components: {
      //     navside: (resolve) => require(['@/views/Project/List/ProjectNav.vue'], resolve),
      //     content: (resolve) => require(['@/views/Project/List/Project.vue'], resolve),
      //   }
      // },
        {
        path: '/',
        components: {
          navside: (resolve) => require(['@/views/Project/List/ProjectNav.vue'], resolve),
          content: (resolve) => require(['@/views/Project/List/HandsonTable.vue'], resolve),
        }
      },
      {
        path: 'review',
        components: {
          navside: (resolve) => require(['@/views/Project/NavLeft.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Review/Review.vue'], resolve),
        }
      },
      {
        path: 'BlankProject',
        components: {
          navside: (resolve) => require(['@/views/Project/Create/BlankProjectnav.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Create/BlankProject.vue'], resolve),
        }
      },
      {
        path: 'importproject',
        components: {
          navside: (resolve) => require(['@/views/Project/Create/BlankProjectnav.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Create/importproject.vue'], resolve),
        }
      },
      {
        path: 'importresult',
        components: {
          navside: (resolve) => require(['@/views/Project/Create/BlankProjectnav.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Create/importresult.vue'], resolve),
        }
      },
      {
        path: 'CreateList',
        components: {
          navside: (resolve) => require(['@/views/Project/NavLeft.vue'], resolve),
          content: (resolve) => require(['@/views/Manufactory/Create/CreateList.vue'], resolve),
        }
      },
      {
        path: 'purchaseoverview',
        components: {
          navside: (resolve) => require(['@/views/Project/NavLeft.vue'], resolve),
          content: (resolve) => require(['@/views/Purchase/List/purchaseoverview.vue'], resolve),
        }
      },
      {
        path: 'BlankProjectAtt',
        components: {
          navside: (resolve) => require(['@/views/Project/NavLeft.vue'], resolve),
          content: (resolve) => require(['@/views/Project/Create/BlankProjectAtt.vue'], resolve),
        }
      },

    ]

  },
  {
    path: '/Schedule',
    component: Schedule,
    children: [{
        path: 'ProjectWBS',
        component: (resolve) => require(['@/views/Project/Schedule/ProjectWBS.vue'], resolve),
      },
      {
        path: '/',
        component: (resolve) => require(['@/views/Project/Schedule/ProjectWBS.vue'], resolve),

      },
      {
        path: 'Review',
        component: (resolve) => require(['@/views/Project/Review/Review.vue'], resolve),
      },
      {
        path: 'pjtatt',
        component: (resolve) => require(['@/views/Project/Create/BlankProject.vue'], resolve),
      },
    ]

  },


  //以下是设计部分,见Modules/design.js
  design,

  //以下是生产部分,见Modules/manufactory.js
  manufactory,
  //以下是清单汇总部分,见Modules/listlibrary.js
  listlibrary,
  //以下是采购部分
  {
    path: '/Purchase',
    component: Purchase,
    children: [{
        path: 'Contract', //和createpart页面一样
        components: {
          navside: (resolve) => require(['@/views/Design/Navside.vue'], resolve),
          content: (resolve) => require(['@/views/Purchase/Create/Contract.vue'], resolve),
        }

      },
      // {
      //   path: 'Partspurchase', //自动创建bom
      //   components: {
      //     navside: (resolve) => require(['@/views/Design/Navside.vue'], resolve),
      //     content: (resolve) => require(['@/views/Purchase/List/Partspurchase.vue'], resolve),
      //   }
      // },
      {
        path: 'Partstep', //单个零件的工艺卡列表
        components: {
          navside: (resolve) => require(['@/views/Design/Navside.vue'], resolve),
          content: (resolve) => require(['@/views/Purchase/List/Partstep.vue'], resolve),
        }
      },
      {
        path: '/', //单个零件的工艺卡列表
        component: (resolve) => require(['@/views/Purchase/List/Partstep.vue'], resolve),
      },
      // {
      //   path: 'Create/Contract', //单个零件的工艺卡列表
      //   component: (resolve) => require(['@/views/Purchase/List/purchaseoverview.vue'], resolve),
      // },

    ],
  },
  //采购部分完

  //以下是个人中心部分,见Modules/dashboard.js
  dashboard,

  //以下是设置部分
  {
    path: '/Setting',
    component: Setting,
    children: [{
        path: '/', //定义编码
        component: (resolve) => require(['@/views/Setting/Cuscode.vue'], resolve),
      },
      {
        path: 'user', //用户
        component: (resolve) => require(['@/views/Setting/user.vue'], resolve),
      },
      //     {
      //       path: 'ProcessPart', //产品
      //       component: (resolve) => require(['@/views/Manufactory/Create/ProcessPart.vue'], resolve),
      //     },
      {
        path: 'device', //设备
        component: (resolve) => require(['@/views/Setting/Device.vue'], resolve),
      },
      //     {
      //       path: 'partpruchaselist', //权限,保密
      //       component: (resolve) => require(['@/views/Purchase/List/partpruchaselist.vue'], resolve),
      //     },
      //     {
      //       path: 'processpartssum', //模板
      //       component: (resolve) => require(['@/views/Manufactory/List/processpartssum.vue'], resolve),
      //     },
      //     {
      //       path: 'rawssum', //报表
      //       component: (resolve) => require(['@/views/Manufactory/List/rawssum.vue'], resolve),
      //     },
      //     {
      //       path: 'purchaselistsum', //通知
      //       component: (resolve) => require(['@/views/Purchase/List/purchaselistsum.vue'], resolve),
      //     },

    ]
  },

  {
    path: '/search',
    component: (resolve) => require(['@/views/Search/Search.vue'], resolve),
  },
  //{
  //   path: '/CreatePart',
  //   component: (resolve) => require(['@/views/Design/Create/CreatePart.vue'], resolve),
  // }, {
  //   path: '/purchaselistatt',
  //   component: (resolve) => require(['@/views/Design/List/purchaselistatt.vue'], resolve),
  // }, {
  //   path: '/ImportProd',
  //   component: (resolve) => require(['@/views/Design/ImportProd.vue'], resolve),
  // }, {
  //   path: '/materialmenu',
  //   component: (resolve) => require(['@/views/Design/materialmenu.vue'], resolve),
  // }, {
  //   path: '/Createblank',
  //   component: (resolve) => require(['@/views/Design/Create/Createblank.vue'], resolve),
  // }, {
  //   path: '/rawatt',
  //   component: (resolve) => require(['@/views/Manufactory/rawatt.vue'], resolve),
  // }, {
  //   path: '/raw',
  //   component: (resolve) => require(['@/views/Design/List/raw.vue'], resolve),
  // },
  // 以下是列表部分
  {
    path: '/RecentList',
    name: 'RecentList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ './../views/RecentList.vue')
  },

  {
    path: '/FavouiteList',
    name: 'FavouiteList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ './../views/FavouriteList.vue')
  },
  // {
  //   path: '*', ///登录
  //   redirect: '/', ///默认跳转路由
  //   component: (resolve) => require(['@/views/Setting/Device.vue'], resolve),
  // },

  // raw, //引用外部的路由文件

]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: RouterMap
});