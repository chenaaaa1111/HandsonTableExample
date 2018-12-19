const state = {
    qtyunitList: ["个", "套", "张", "盒", "袋", "米", "根", "打", "桶", "箱"],
    unitcate: [{
            name: "数量",
            type: 'quantity',
            subtype: [{
                    name: "个",
                    symbol: "",
                    rate: 1,
                },
                {
                    name: "件",
                    symbol: "",
                    rate: 1,
                },
                {
                    name: "张",
                    symbol: "",
                    rate: 1,
                },
                {
                    name: "套",
                    symbol: "",
                    rate: 1,
                },
                {
                    name: "袋",
                    symbol: "",
                    rate: 1,
                },
            ]
        },
        {
            name: "长度",
            type: 'length',
            subtype: [{
                    name: "米",
                    symbol: "m",
                    rate: 1,
                },
                {
                    name: "毫米",
                    symbol: "mm",
                    rate: 0.001,
                }
            ]
        },
        {
            name: "重量",
            type: 'weight',
            subtype: [{
                    name: "克",
                    symbol: "g",
                    rate: 0.001,
                },
                {
                    name: "千克",
                    symbol: "kg",
                    rate: 1,
                },
                {
                    name: "吨",
                    symbol: "t",
                    rate: 1000,
                },

            ]
        },
        {
            name: "体积",
            type: 'volume',
            subtype: [{
                    name: "立方米",
                    symbol: "m3",
                    rate: 1,
                },
                {
                    name: "立方毫米",
                    symbol: "mm3",
                    rate: 0.000001,
                },

            ]
        },
        {
            name: "容积",
            type: 'capacity',
            subtype: [{
                    name: "升",
                    symbol: "l",
                    rate: 1,
                },
                {
                    name: "毫升",
                    symbol: "ml",
                    rate: 0.000001,
                },

            ]
        },
        {
            name: "面积",
            type: 'area',
            subtype: [{
                    name: "平方米",
                    symbol: "m2",
                    rate: 1,
                },
                {
                    name: "平方毫米",
                    symbol: "mm2",
                    rate: 0.000001,
                },


            ]
        },
        {
            name: "时间",
            type: 'time',
            subtype: [{
                    name: "秒",
                    symbol: "s",
                    rate: 1 / 3600,
                },
                {
                    name: "分",
                    symbol: "min",
                    rate: 1 / 60,
                },
                {
                    name: "时",
                    symbol: "h",
                    rate: 1,
                },
                {
                    name: "天",
                    symbol: "d",
                    rate: 24,
                },
                {
                    name: "月",
                    symbol: "m",
                    rate: 720,
                },
            ]
        },
    ],



}
const getters = {
    qtyunitList(state) {
        // for (let index = 0; index < state.unitcate.quantity.subtype.length; index++) {
        //     console.log(state.unitcate.quantity.subtype[index]);
        //     qtyunitList[index] = state.unitcate.quantity.subtype[index].name
        // }
        return state.qtyunitList

    }

}
export default {
    state,
    getters,
    mutations: {
        // addunit(state, qtyunitList) {
        //     this.state.unitcate.quantity.push(unit)
        // },
        // deleteunit() {
        //     this.state.unitcate.quantity.splice(1, index)

        // },
        // updateunit() {

        // },

    },
    actions: {}
}