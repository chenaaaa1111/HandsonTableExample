const help = {
    path: '/help',
    component: (resolve) => require(['@/views/Help/Setting.vue'], resolve),
    redirect: 'noredirect',
    name: '帮助中心',
    meta: {
        title: '帮助中心',
        icon: 'help'
    },
    children: [{
            path: '/',
            name: '定义编码',
            component: (resolve) => require(['@/views/Help/Cuscode.vue'], resolve),
        },
        {
            path: 'device',
            name: '设备',
            component: (resolve) => require(['@/views/Help/Device.vue'], resolve),
        },
        {
            path: 'user',
            name: '用户',
            component: (resolve) => require(['@/views/Help/user.vue'], resolve),
        },
        {
            path: 'updatelog',
            name: '更新日志',
            component: (resolve) => require(['@/views/Help/updatelog.vue'], resolve),
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

export default help