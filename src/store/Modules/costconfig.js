const state = {
    costcate: [{
            type: 'materail',
            name: '材料',
            subtype: [{
                    typeID: 'mat001',
                    type: "material",
                    name: '材质',
                },
                {
                    typeID: 'mat002',
                    type: 'raw',
                    name: '规格',
                },
            ]
        },
        {
            type: 'machine',
            name: '加工',
            subtype: [{
                    typeID: 'mat003',
                    type: 'laser',
                    name: '激光切割',
                },
                {
                    typeID: 'mat004',
                    type: 'screw',
                    name: '螺纹孔',
                },
                {
                    typeID: 'mat005',
                    type: 'lathe1',
                    name: '粗车',
                },
                {
                    typeID: 'mat006',
                    type: 'lathe2',
                    name: '精车',
                },
                {
                    typeID: 'mat007',
                    type: 'CNC',
                    name: 'CNC',
                },
                {
                    typeID: 'mat007',
                    type: 'blend',
                    name: '折弯',
                },
            ]
        },
        {
            type: 'tax',
            name: '税费',
            subtype: [{
                    typeID: 'mat003',
                    type: 'profit',
                    name: '增值税',
                },
                {
                    typeID: 'mat004',
                    type: 'stamp',
                    name: '印花税',
                },
                {
                    typeID: 'mat005',
                    type: 'misc',
                    name: '杂费',
                },

            ]
        },
        {
            type: 'package',
            name: '包装',
            subtype: [{
                    typeID: 'mat003',
                    type: 'profit',
                    name: '缠绕膜',
                },
                {
                    typeID: 'mat004',
                    type: 'stamp',
                    name: '木棒',
                },
                {
                    typeID: 'mat005',
                    type: 'misc',
                    name: '纸箱',
                },

            ]
        },
        {
            type: 'delivery',
            name: '运输',
            subtype: [{
                    typeID: 'mat003',
                    type: 'profit',
                    name: '公路',
                },
                {
                    typeID: 'mat004',
                    type: 'stamp',
                    name: '印花税',
                },
                {
                    typeID: 'mat005',
                    type: 'misc',
                    name: '杂费',
                },

            ]
        },
        {
            type: 'misc',
            name: '杂项',
            subtype: [{
                    typeID: 'mat003',
                    type: 'profit',
                    name: '招待费',
                },
                {
                    typeID: 'mat004',
                    type: 'stamp',
                    name: '差旅费',
                },
                {
                    typeID: 'mat005',
                    type: 'misc',
                    name: '杂费',
                },

            ]
        },
    ]
}
const getters = {
    costcate(state) {
        return state.costcate
    },
}
export default {
    state,
    getters,
    mutations: {},
    actions: {}
};