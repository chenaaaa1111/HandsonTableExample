const listlibrary = {
    path: '/listlibrary',
    component: (resolve) => require(['@/views/listlibrary/listLayout.vue'], resolve),
    redirect: 'noredirect', //当设置 noredirect 的时候该路由在面包屑导航中不可被点击
    children: [{
            path: '/',
            // name: 'router-name', //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ], //设置该路由进入的权限，支持多个权限叠加
                title: 'title', //设置该路由在侧边栏和面包屑中展示的名字
                icon: 'svg-name', //设置该路由的图标
                noCache: true, //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listProject/projectlibrary.vue'], resolve),
            }
            // component: (resolve) => require(['@/views/listlibrary/list/listProject/projectlibrary.vue'], resolve),
        },
        {
            path: 'createlist',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/list/create/createListnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/create/createList.vue'], resolve),
            }

        },
        {
            path: 'rawlibrary',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listRAW/rawlibrary.vue'], resolve),
            }

        },
        {
            path: 'partsraw',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listRAW/partsraw.vue'], resolve),
            }

        },
        {
            path: 'processlibrary',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listProcess/processlibrary.vue'], resolve),
            }

        },
        {
            path: 'partsprocess',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/list/listProcess/processnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listProcess/partsprocess.vue'], resolve),
            }

        },
        {
            path: 'purchaselibrary',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listPurchase/purchaselibrary.vue'], resolve),
            }

        },
        {
            path: 'partspurchase',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listPurchase/partspurchase.vue'], resolve),
            }

        },
        {
            path: 'assemblylibrary',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listAssembly/assemblylibrary.vue'], resolve),
            },
            children: [{
                path: '/', //属性
                component: (resolve) => require(['@/views/Design/Create/NewPart/attribute.vue'], resolve),
            }, ],

        },
        {
            path: 'partsassembly',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listAssembly/partsassembly.vue'], resolve),
            },
        },
        {
            path: 'inspectionlibrary',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listInspection/inspectionlibrary.vue'], resolve),
            }
        },
        {
            path: 'partsinspection',
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/listlibrary/listnav.vue'], resolve),
                content: (resolve) => require(['@/views/listlibrary/list/listInspection/partsinspection.vue'], resolve),
            }
        },
        {
            path: 'partstep', //单个零件的工艺卡列表
            // name: 'router-name', 
            hidden: true,
            alwaysShow: true,
            meta: {
                roles: ['design', 'worker', 'buyer', ],
                title: 'title',
                icon: 'svg-name',
                noCache: true,
            },
            components: {
                navside: (resolve) => require(['@/views/Manufactory/Nav.vue'], resolve),
                content: (resolve) => require(['@/views/Manufactory/List/partstep.vue'], resolve),
            },
            children: [],
        },
    ]
}

export default listlibrary