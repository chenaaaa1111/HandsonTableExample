const state = {
    rawcate: [{
            type: "profile",
            name: "型材",
            icon: "toll",
            desc: "工字钢,槽钢,方管,角钢",
            path: "test",
            state: "",
            subtype: [{
                    type: "",
                    name: "工字钢",
                    icon: "toll",
                    desc: "",
                    path: "test",
                },
                {
                    type: "",
                    name: "H型钢",
                    icon: "toll",
                    desc: "宽,窄,中",
                    path: "test",
                },
                {
                    type: "",
                    name: "槽钢",
                    icon: "toll",
                    desc: "槽钢",
                    path: "test",
                },
                {
                    type: "",
                    name: "方管",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },
                {
                    type: "",
                    name: "矩形管",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },
                {
                    type: "",
                    name: "角钢",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },
            ],
        },
        {
            type: "pipe",
            name: "管材",
            icon: "",
            desc: "",
            path: "ProcessPart",
            subtype: [{
                    type: "",
                    name: "无缝管",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    type: "",
                    name: "焊接管",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    type: "",
                    name: "槽钢",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },

            ],
        },
        {
            type: "plate",
            name: "板材",
            icon: "crop_square",
            desc: "",
            path: "ProcessPart",
            subtype: [{
                    name: "中厚钢板",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "镀锌板",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "薄板",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },

            ],
        },
        {
            type: "bar",
            name: "棒材",
            icon: "",
            desc: "",
            path: "PurchaseAtt",

            subtype: [{
                    name: "六角",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "方形",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "薄板",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },

            ],
        },
        {
            type: "wire",
            name: "线材",
            icon: "",
            desc: "",
            path: "CreatePart",

            subtype: [{
                    name: "钢丝",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "方形",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "薄板",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },

            ],
        },
        {
            type: "cast",
            name: "铸件",
            icon: "",
            desc: "本公司通用的铸件等",
            path: "CreatePart",

            subtype: [{
                    name: "其他",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "其他",
                    icon: "toll",
                    desc: "方管,角钢",
                    path: "test",
                },
                {
                    name: "薄板",
                    icon: "toll",
                    desc: ",槽钢,方管,角钢",
                    path: "test",
                },

            ],
        }
    ],
}
const getters = {
    rawcate(state) {
        return state.rawcate
    },
}
export default {
    state,
    getters,
    mutations: {},
    actions: {}
};