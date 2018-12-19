const dashboard = {
    path: '/dashboard',
    component: (resolve) => require(['@/views/Dashboard/Dashboard.vue'], resolve),
    // redirect: 'noredirect',
    // name: '控制台',
    meta: {
        title: 'charts',
        icon: 'chart'
    },
    children: [{
        path: '/', //单个零件的工艺卡列表
        components: {
            navside: (resolve) => require(['@/views/Dashboard/DashboardNav.vue'], resolve),
            content: (resolve) => require(['@/views/Dashboard/DashboardContent.vue'], resolve),
        }
    }]
}

export default dashboard