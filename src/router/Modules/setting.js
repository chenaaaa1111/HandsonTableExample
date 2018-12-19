const setting = {
    path: '/setting',
    component: (resolve) => require(['@/views/Setting/Setting.vue'], resolve),
    redirect: 'noredirect',
    name: '设置',
    meta: {
        title: '设置',
        icon: 'chart'
    },
    children: [{
            path: '/',
            name: '定义编码',
            component: (resolve) => require(['@/views/Setting/Cuscode.vue'], resolve),
        },
        {
            path: 'device',
            name: '设备',
            component: (resolve) => require(['@/views/Setting/Device.vue'], resolve),
        },
        {
            path: 'user',
            name: '用户',
            component: (resolve) => require(['@/views/Setting/user.vue'], resolve),
        },
        {
            path: 'updatelog',
            name: '更新日志',
            component: (resolve) => require(['@/views/Setting/updatelog.vue'], resolve),
        },
        // {
        //     path: '/',
        //     component: (resolve) => require(['@/views/Setting/Device.vue'], resolve),
        // },
        // {
        //     path: '/',
        //     component: (resolve) => require(['@/views/Setting/Device.vue'], resolve),
        // },


    ]
}

export default setting