const manufactory = {
    path: '/Manufactory',
    component: (resolve) => require(['@/views/Manufactory/Manufactory.vue'], resolve),
    children: [{
            path: 'CreateProcess', //和createpart页面一样
            components: {
                navside: (resolve) => require(['@/views/Manufactory/Create/CreateProcessNav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/Create/CreateProcess.vue'], resolve),

            }
        },
        {
            path: 'RAWpart', //自动创建bom
            components: {
                navside: (resolve) => require(['@/views/Manufactory/Create/CreateNav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/Create/RAWPart.vue'], resolve),
            }
        },
        {
            path: '/', //自动创建bom
            components: {
                navside: (resolve) => require(['@/views/Manufactory/List/Nav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/List/Assembly.vue'], resolve),
            }
        },
        {
            path: 'ProcessPart', //零件列表
            components: {
                navside: (resolve) => require(['@/views/Manufactory/Create/CreateNav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/Create/ProcessPart.vue'], resolve),
            }
        },
        {
            path: 'partstep', //单个零件的工艺卡列表
            components: {
                navside: (resolve) => require(['@/views/Manufactory/List/Nav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/List/partstep.vue'], resolve),
            }
        },
        {
            path: 'reviewProcessAtt', //查看单个零件的工艺卡
            components: {
                navside: (resolve) => require(['@/views/Manufactory/Create/CreateNav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/Review/reviewProcessAtt.vue'], resolve),
            }
        },

        // {
        //     path: 'partsprocess', //单个零件的工艺卡列表
        //     components: {
        //         navside: (resolve) => require(['@/views/Manufactory/List/partsprocessnav.vue'], resolve),
        //         content: (resolve) => require(['@/views/Manufactory/List/partsprocess.vue'], resolve),
        //     }
        // },
        // {
        //     path: 'raw', //单个零件的工艺卡列表
        //     components: {
        //         navside: (resolve) => require(['@/views/Manufactory/List/Nav.vue'], resolve),
        //         content: (resolve) => require(['@/views/ListHub/list/listRAW/rawHub.vue'], resolve),
        //     }
        // },

        {
            path: 'RAWPart', //单个零件的工艺卡列表
            components: {
                navside: (resolve) => require(['@/views/Manufactory/List/Nav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/Create/RAWPart.vue'], resolve),
            }
        },


    ],
}

export default manufactory