const state = {
    productTypes: [{
            name: "机械",
            type: 'machinery',
            subtype: [{
                    type: "fasten",
                    name: "紧固件",
                    symbol: "",

                },
                {
                    type: "bearing",
                    name: "轴承",
                    symbol: "",
                }
            ]
        },
        {
            name: "电气",
            type: 'electric',
            subtype: [{}, {}]
        },
        {
            name: "液压",
            type: 'hydraulic',
            subtype: [{}, {}]
        },
        {
            name: "气动",
            type: 'pneumatic',
            subtype: [{}, {}]
        },
        {
            name: "其他",
            type: 'other',
            subtype: [{}, {}]
        },
    ],
    // 行业类型
    industrytype: [{
            type: 'car',
            name: "汽车",
            subtype: [{}, {}]
        },
        {
            type: 'mold',
            name: "模具",
            subtype: [{}, {}]
        },
        {
            type: 'cast',
            name: "铸造",
            subtype: [{}, {}]
        },
    ],
    // 行业类型
    productLabels: [{
            type: 'design',
            name: "设计",
            subtype: [{
                    labelid: 1,
                    text: "标准件"
                },
                {
                    labelid: 2,
                    text: "已审核"
                },
                {
                    labelid: 3,
                    text: "未审核"
                },
                {
                    labelid: 4,
                    text: "紧急"
                },
            ],
        },
        {
            type: 'manufacture',
            name: "生产",
            subtype: [{
                    labelid: 1,
                    text: "采购"
                },
                {
                    labelid: 2,
                    text: "粗车"
                },
                {
                    labelid: 3,
                    text: "龙门铣"
                },
                {
                    labelid: 4,
                    text: "CNC"
                },
                {
                    labelid: 5,
                    text: "钻孔"
                },
                {
                    labelid: 6,
                    text: "打磨"
                },
                {
                    labelid: 7,
                    text: "热处理"
                },
            ],
        },
        {
            type: 'purchase',
            name: "采购",
            subtype: [{
                    labelid: 1,
                    text: "标准件"
                },
                {
                    labelid: 2,
                    text: "已审核"
                },
                {
                    labelid: 3,
                    text: "未审核"
                },
                {
                    labelid: 4,
                    text: "紧急"
                },
            ],
        },
    ]

}


const getters = {
    productTypes(state) {
        return state.productTypes
    },
    productLabels(state) {
        return state.productLabels
    },
}
export default {
    state,
    getters,
    mutations: {},
    actions: {}
};