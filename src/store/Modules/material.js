const state = {
    materialcatelist: ['铸铁', '钢材', '有色金属', '橡胶', '塑料', '其他'],
    materialcate: [{
            name: "铸铁",
            type: 'iron',
            subtype: [{
                    name: "白口铸铁",
                    icon: "star",
                    standard: "GB/T 8263",
                },
                {
                    name: "灰口铸铁",
                    icon: "",
                    standard: "GB9439",
                    label: "HT",
                },
                {
                    name: "可锻铸铁",
                    icon: "",
                    standard: "GB9440",
                },
                {
                    name: "球墨铸铁",
                    icon: "",
                    standard: "GB1348",
                    label: "QT",
                },
                {
                    name: "蠕墨铸铁",
                    icon: "",
                    standard: "",
                },
            ]
        },
        {
            name: "钢材",
            type: 'steel',
            subtype: [{
                    name: "普通碳素结构钢",
                    icon: "star",
                    standard: "GB700"
                },
                {
                    name: "优质碳素结构钢",
                    icon: "",
                    standard: "GB699"
                },
                {
                    name: "铸造碳钢",
                    icon: "",
                    standard: "GB11352",
                    label: "ZG",
                },
                {
                    name: "碳素工具钢",
                    icon: "",
                    standard: "GB1298"
                },
                {
                    name: "合金结构钢",
                    icon: "",
                    standard: "GB1591(低)/GB3077"
                },
                {
                    name: "合金工具钢",
                    icon: "",
                    standard: "GB1299"
                },
                {
                    name: "滚动轴承钢",
                    icon: "",
                    standard: "GB"
                },
                {
                    name: "不锈钢",
                    icon: "",
                    standard: "GB"
                },
                {
                    name: "易切削钢",
                    icon: "",
                    standard: "GB/T 8731"
                },
            ]
        },
        {
            name: "有色金属",
            type: 'nonferrous',
            subtype: [{
                    name: "铸造铝合金",
                    icon: "star"
                },
                {
                    name: "压铸铝合金",
                    icon: ""
                },
                {
                    name: "变形铝合金",
                    icon: ""
                },
                {
                    name: "纯铜",
                    icon: ""
                },
                {
                    name: "黄铜",
                    icon: ""
                },
                {
                    name: "青铜",
                    icon: ""
                },

            ]
        },
        {
            name: "橡胶",
            type: 'rubber',
            subtype: [{
                    name: "丁晴橡胶",
                    icon: "star"
                },
                {
                    name: "乙丙橡胶",
                    icon: ""
                },

            ]
        },
        {
            name: "塑料",
            type: 'plastic',
            subtype: [{
                    name: "尼龙",
                    icon: "star"
                },
                {
                    name: "亚克力",
                    icon: ""
                },
                {
                    name: "ABS",
                    icon: ""
                },
                {
                    name: "PCB",
                    icon: ""
                },


            ]
        },
    ]
}

const getters = {
    materialcate(state) {
        return state.materialcate
    },
    materialcatelist(state) {
        return state.materialcatelist
    },

    getmaterialcatelist(state) {
        for (let index = 0; index < state.materialcate.length; index++) {

            getmaterialcatelist[index] = state.materialcate[index].name
        }
        return this.getmaterialcatelist
    }
}

export default {
    state,
    getters,
    mutations: {},
    actions: {}
};