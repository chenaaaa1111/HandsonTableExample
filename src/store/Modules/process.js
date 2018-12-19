const state = {
    processcate: [{
            icon: "star",
            type: "weld",
            name: "铆焊",
            subtype: [{
                    name: "下料",
                    icon: "star"
                },
                {
                    type: "",
                    name: "焊接",
                    icon: ""
                },
                {
                    name: "喷砂",
                    icon: ""
                },
                {
                    name: "抛丸",
                    icon: ""
                },
                {
                    name: "整形",
                    icon: ""
                },
                {
                    name: "失效处理",
                    icon: ""
                },

            ]
        },
        {
            type: "machine",
            name: "金工",
            subtype: [{
                    name: "车",
                    icon: ""
                },
                {
                    name: "铣",
                    icon: ""
                },
                {
                    name: "磨",
                    icon: ""
                },
                {
                    name: "钻",
                    icon: ""
                },
                {
                    name: "CNC",
                    icon: ""
                },
            ]
        },
        {
            type: "assembly",
            name: "装配",
            subtype: [{
                    name: "打磨",
                    icon: ""
                },
                {
                    name: "冷却",
                    icon: ""
                },
                {
                    name: "加热",
                    icon: ""
                },
                {
                    name: "组装",
                    icon: ""
                },
                {
                    name: "配管",
                    icon: ""
                },
                {
                    name: "配线",
                    icon: ""
                },
                {
                    name: "点动",
                    icon: ""
                },
                {
                    name: "联动",
                    icon: ""
                },
                {
                    name: "单机调试",
                    icon: ""
                },
            ]
        },
        {
            type: "inspect",
            name: "检验",
            subtype: [{
                    name: "折弯,冲孔,焊接",
                    icon: ""
                },
                {
                    name: "",
                    icon: ""
                },
            ]
        },
        {
            type: "purchase",
            name: "采购",
            subtype: [{
                    name: "询价",
                    icon: ""
                },
                {
                    name: "签合同",
                    icon: ""
                },
                {
                    name: "预付款",
                    icon: ""
                },
                {
                    name: "进度款",
                    icon: ""
                },
            ]
        }
    ],
    processtemplates: [{
            temID: "tem000",
            temName: "空白",
            icon: ":iconfont icon-wendang",
            desc: "",
            projecttypes: "",
            projectpic: [],
            projectstation: "",
            projectcomment: "",
            projectcustomer: "",
            projectmembers: [],
            projectlifttime: "",
            devicesubtypes: [],
        }, {
            temID: "tem001",
            temName: "设备案例",
            icon: ":iconfont icon-moban",
            desc: "",
            projecttypes: "fruit",
            projectpic: ['Apple'],
            projectstation: "",
            projectcomment: "",
            projectcustomer: "",
            projectmembers: ['Apple', 'Blood Orange', 'Cantaloupe', ],
            projectlifttime: "",
            devicesubtypes: ['备件', '机械', '液压', '气动', ],
        },
        {
            temID: "tem002",
            temName: "加工示例",
            icon: ":iconfont icon-moban",
            projecttypes: "fruit",
            projectpic: ['Blood'],
            projectstation: "",
            projectcomment: "",
            projectcustomer: "",
            projectmembers: ['Apple', 'Blood Orange', 'Cantaloupe', ],
            projectlifttime: "",
            devicesubtypes: ['备件', '机械', '液压', '气动', ],
        },
        {
            temID: "tem003",
            temName: "贸易示例",
            icon: ":iconfont icon-moban",
            projecttypes: "fruit",
            projectpic: ['Cantaloupe', ],
            projectstation: "",
            projectcomment: "",
            projectcustomer: "",
            projectmembers: ['Apple', 'Blood Orange', 'Cantaloupe', ],
            projectlifttime: "",
            devicesubtypes: ['备件', '机械', '液压', '气动', ],
        },
        {
            temID: "tem004",
            temName: "Orange",
            icon: ":iconfont icon-moban",
            projecttypes: "fruit",
            projectpic: ['Orange'],
            projectstation: "",
            projectcomment: "",
            projectcustomer: "",
            projectmembers: ['Apple', 'Blood Orange', 'Cantaloupe', ],
            projectlifttime: "",
            devicesubtypes: ['备件', '机械', '液压', '气动', ],
        },
    ],
    // rawtypes: [{
    //         name: "铆焊",
    //         icon: "toll",
    //         desc: "下料,焊接,喷砂,抛丸,整形,失效处理",
    //         path: "test"
    //     },
    //     {
    //         name: "金工",
    //         icon: "",
    //         desc: "车,铣,磨,钻,CNC",
    //         path: "ProcessPart"
    //     },
    //     {
    //         name: "钣金",
    //         icon: "",
    //         desc: "折弯,冲孔,焊接",
    //         path: "ProcessPart"
    //     },
    //     {
    //         name: "检验",
    //         icon: "",
    //         desc: "",
    //         path: "PurchaseAtt"
    //     },
    //     {
    //         name: "装配",
    //         icon: "",
    //         desc: "打磨,冷却,加热,组装,配管,配线,点动,联动,单机调试,整机调试",
    //         path: "CreatePart"
    //     },
    //     {
    //         name: "购买",
    //         icon: "",
    //         desc: "整体购买",
    //         path: "CreatePart"
    //     }
    // ],
    // cutmethods: [{
    //         name: "火焰切割机",
    //         icon: "",
    //         desc: "",
    //         path: "test"
    //     },
    //     {
    //         name: "激光",
    //         icon: "",
    //         desc: "",
    //         path: "ProcessPart"
    //     },
    //     {
    //         name: "等离子",
    //         icon: "",
    //         desc: "",
    //         path: "ProcessPart"
    //     },
    //     {
    //         name: "锯床",
    //         icon: "",
    //         desc: "",
    //         path: "PurchaseAtt"
    //     },
    //     {
    //         name: "线切割",
    //         icon: "",
    //         desc: "",
    //         path: "CreatePart"
    //     },
    //     {
    //         name: "水刀",
    //         icon: "",
    //         desc: "",
    //         path: "CreatePart"
    //     }
    // ],
    processcatelists: ['下料', '焊接', '机加工', '检验',
        '装配', '涂装', '板材', '热处理',
    ], //已经没用了
    userlists: [ ///用mapState替换
        '下料', '焊接', '机加工', '检验',

    ],
}
const getters = {
    getprocesslists(state) { //取得type值,生成一个数组
        for (let index = 0; index < processcate.length; index++) {
            processcatelists[index] = processcate[index].type;

        }
        return this.processcatelists;

    },
    processcate(state) {
        return state.processcate;
    },
    processtemplates(state) {
        return state.processtemplates;
    }
}
export default {
    // namespaced: true,
    state,
    getters,
    mutations: {
        addprocesstype(state) {

        },
        addprocesssubtype(state) {

        },
        delprocess(state) {

        },
    },
    // actions: {}
    // })
}