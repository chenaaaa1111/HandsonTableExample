const design = {
    path: '/Design',
    // name: 'Design',
    component: (resolve) => require(['@/views/Design/Design.vue'], resolve),
    children: [{
            path: '/',
            components: {
                navside: (resolve) => require(['@/views/Design/Navside.vue'], resolve),
                content: (resolve) => require(['@/views/Design/List/PartList.vue'], resolve),
            }
        },
        {
            path: 'CreatePart', //创建零件
            components: {
                navside: (resolve) => require(['@/views/Design/Create/CreatePartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/CreatePart.vue'], resolve),

            }
        },
        {
            path: 'BlankPart', //创建空零件
            components: {
                navside: (resolve) => require(['@/views/Design/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/newpart.vue'], resolve),
            },
            children: [{
                    path: '/', //属性
                    component: (resolve) => require(['@/views/Design/Create/NewPart/attribute.vue'], resolve),
                },
                {
                    path: 'getcode', //申请编码
                    component: (resolve) => require(['@/views/Design/Create/NewPart/applyCode.vue'], resolve),
                },
                {
                    path: 'getdrawing', //添加图纸
                    component: (resolve) => require(['@/views/Design/Create/NewPart/importDraw.vue'], resolve),
                },
                {
                    path: 'getrelation', //添加关系
                    component: (resolve) => require(['@/views/Design/Create/NewPart/addrelation.vue'], resolve),
                },
                {
                    path: 'searchcode', //搜索页面
                    component: (resolve) => require(['@/views/Design/Create/NewPart/search.vue'], resolve),
                },
                {
                    path: 'archive', //历史档案
                    component: (resolve) => require(['@/views/Design/Create/archive.vue'], resolve),
                },
                {
                    path: 'maintain', //维修保养
                    component: (resolve) => require(['@/views/Design/Create/NewPart/maintain.vue'], resolve),
                },
                {
                    path: 'getmaterial', //选择材质
                    component: (resolve) => require(['@/views/Design/Create/NewPart/materialmenu.vue'], resolve),
                    children: [{
                            path: '/', //最近使用的材质
                            component: (resolve) => require(['@/components/material/recent.vue'], resolve),
                        },
                        {
                            path: 'list', //材质列表
                            component: (resolve) => require(['@/components/material/list.vue'], resolve),
                        },
                    ]
                },
                {
                    path: 'getraw', //添加材料类型
                    component: (resolve) => require(['@/views/Design/Create/NewPart/rawmenu.vue'], resolve),
                    children: [{
                            path: '/', //最近使用的材料
                            component: (resolve) => require(['@/components/raw/rawnavTable.vue'], resolve),
                        },
                        {
                            path: 'list', //材料列表
                            component: (resolve) => require(['@/views/Design/Create/NewPart/rawsize.vue'], resolve),
                        },
                    ]
                },

            ]
        },
        {
            path: 'document', //创建图文
            components: {
                navside: (resolve) => require(['@/views/Design/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/document.vue'], resolve),
            }
        },
        {
            path: 'ImportProd', //引用零件
            components: {
                navside: (resolve) => require(['@/views/Design/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/ImportProd.vue'], resolve),
            }
        },
        {
            path: 'uppartslist', //上传清单(整套设备,标准件)
            components: {
                navside: (resolve) => require(['@/views/Design/Create/Upload/nullnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/uppartslist.vue'], resolve),
            }
        },
        {
            path: 'uploaddrawing', //上传图纸
            components: {
                navside: (resolve) => require(['@/views/Design/Create/Upload/nullnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/uploaddrawing.vue'], resolve),
            }
        },
        {
            path: 'ReviewPart', //查看零件
            components: {
                navside: (resolve) => require(['@/views/Design/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Review/ReviewPart.vue'], resolve),
            }
        },

        {
            path: 'autoBOM', //自动创建bom
            components: {
                navside: (resolve) => require(['@/views/Design/Create/AutoBOM/autobomnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/AutoBOM/seltype.vue'], resolve),
            }
        },
        {
            path: 'ImportProd', //更多内容预留
            components: {
                navside: (resolve) => require(['@/views/Design/Create/BlankPartnav.vue'], resolve),
                content: (resolve) => require(['@/views/Design/Create/ImportProd.vue'], resolve),
            }
        },
    ],
}

export default design