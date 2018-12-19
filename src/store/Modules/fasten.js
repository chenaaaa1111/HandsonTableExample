const state = {
    fastencate: {
        joint: {
            typeID: "joint",
            name: "螺纹紧固件综合",
            Standard: "toll",
            desc: "工字钢,槽钢,方管,角钢",
            path: "test",
            state: "",
            subtype: [{
                    "PID": "a02a",
                    "standard": "GB/T9074.1-2002",
                    "icon": "",
                    "name": "螺栓或螺钉和平垫圈组合件",
                    "desc": ""
                },
                {
                    "PID": "a02b",
                    "standard": "GB/T9074.15-1988",
                    "icon": "",
                    "name": "六角头螺栓和平垫圈组合件",
                    "desc": ""
                },
                {
                    "PID": "a02c",
                    "standard": "GB/T9074.17-1988",
                    "icon": "",
                    "name": "六角头螺栓和弹簧垫圈及平垫圈组合件",
                    "desc": ""
                },
                {
                    "PID": "a02d",
                    "standard": "GB/T9074.26-1988",
                    "icon": "",
                    "name": "组合件用弹簧垫圈",
                    "desc": ""
                },
                {
                    "PID": "a02e",
                    "standard": "GB/T9074.27-1988",
                    "icon": "",
                    "name": "组合件用外锯齿锁紧垫圈",
                    "desc": ""
                },

            ],
        },
        bolt: {
            typeID: "bolt",
            name: "螺栓",
            Standard: "",
            desc: "",
            path: "ProcessPart",
            subtype: [{
                    "PID": "a03a",
                    "standard": "GB/T8-1988",
                    "icon": "",
                    "name": "方头螺栓C级",
                    "desc": ""
                },
                {
                    "PID": "a03b",
                    "standard": "GB/T37-1988",
                    "icon": "",
                    "name": "T形槽用螺栓",
                    "desc": ""
                },
                {
                    "PID": "a03c",
                    "standard": "GB/T799-1988",
                    "icon": "",
                    "name": "地脚螺栓",
                    "desc": ""
                },
                {
                    "PID": "a03d",
                    "standard": "GB/T5780-2000",
                    "icon": "",
                    "name": "六角头螺栓 C级",
                    "desc": ""
                },
                {
                    "PID": "a03e",
                    "standard": "GB/T5781-2000",
                    "icon": "",
                    "name": "六角头螺栓 全螺纹  C级",
                    "desc": ""
                },
                {
                    "PID": "a03f",
                    "standard": "GB/T5782-2000",
                    "icon": "",
                    "name": "六角头螺栓",
                    "desc": ""
                },
                {
                    "PID": "a03g",
                    "standard": "GB/T5783-2000",
                    "icon": "",
                    "name": "六角头螺栓 全螺纹",
                    "desc": ""
                },

            ]
        },
        dbbolt: {
            typeID: "dbbolt",
            name: "螺柱",
            Standard: "crop_square",
            desc: "",
            path: "ProcessPart",
            subtype: [{
                    "PID": "a04a",
                    "standard": "GB/T897-1988",
                    "icon": "",
                    "name": "双头螺柱  bm=1d",
                    "desc": ""
                },
                {
                    "PID": "a04b",
                    "standard": "GB/T898-1988",
                    "icon": "",
                    "name": "双头螺柱 bm=1.25d",
                    "desc": ""
                },
                {
                    "PID": "a04c",
                    "standard": "GB/T899-1988",
                    "icon": "",
                    "name": "双头螺柱 bm=15d",
                    "desc": ""
                },
                {
                    "PID": "a04d",
                    "standard": "GB/T900-1988",
                    "icon": "",
                    "name": "双头螺柱 bm=2d",
                    "desc": ""
                },
                {
                    "PID": "a04e",
                    "standard": "GB/T901-1988",
                    "icon": "",
                    "name": "等长双头螺柱正B级",
                    "desc": ""
                },
                {
                    "PID": "a04f",
                    "standard": "GB/T9953-1988",
                    "icon": "",
                    "name": "等长双头螺柱C级",
                    "desc": ""
                },
            ]
        },
        nut: {
            typeID: "nut",
            name: "螺母",
            Standard: "",
            desc: "",
            path: "PurchaseAtt",
            subtype: [{
                    "PID": "a05a",
                    "standard": "GB/T41-2000",
                    "icon": "",
                    "name": "六角螺母C级",
                    "desc": ""
                },
                {
                    "PID": "a05b",
                    "standard": "GB/T56-1988",
                    "icon": "",
                    "name": "六角厚螺母",
                    "desc": ""
                },
                {
                    "PID": "a05c",
                    "standard": "GB/T810-1988",
                    "icon": "",
                    "name": "小圆螺母",
                    "desc": ""
                },
                {
                    "PID": "a05d",
                    "standard": "GB/T812-1988",
                    "icon": "",
                    "name": "圆螺母",
                    "desc": ""
                },
                {
                    "PID": "a05e",
                    "standard": "GB/T6170-2000",
                    "icon": "",
                    "name": "Ⅰ型六角螺母",
                    "desc": ""
                },
                {
                    "PID": "a05f",
                    "standard": "GB/T6172.1-2000",
                    "icon": "",
                    "name": "六角薄螺母",
                    "desc": ""
                },
                {
                    "PID": "a05g",
                    "standard": "JB/T7382-1994",
                    "icon": "",
                    "name": "吊环螺母",
                    "desc": ""
                },
            ]
        },
        screw: {
            typeID: "screw",
            name: "螺钉",
            Standard: "",
            desc: "",
            path: "CreatePart",

            subtype: [{
                    "PID": "a06a",
                    "standard": "GB/T70.1-2000",
                    "icon": "",
                    "name": "内六角圆柱头螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06b",
                    "standard": "GB/T71-1985",
                    "icon": "",
                    "name": "开槽锥端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06c",
                    "standard": "GB/T72-1985",
                    "icon": "",
                    "name": "开槽锥端定位螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06d",
                    "standard": "GB/T73-1988",
                    "icon": "",
                    "name": "开槽平端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06e",
                    "standard": "GB/T74-1985",
                    "icon": "",
                    "name": "开槽凹端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06f",
                    "standard": "GB/T75-1985",
                    "icon": "",
                    "name": "开槽长圆柱端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06g",
                    "standard": "GB/T77-1985",
                    "icon": "",
                    "name": "内六角平端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06h",
                    "standard": "GB/T78-2000",
                    "icon": "",
                    "name": "内六角锥端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06i",
                    "standard": "GB/T79-2000",
                    "icon": "",
                    "name": "内六角圆柱端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06j",
                    "standard": "GB/T80-2000",
                    "icon": "",
                    "name": "内六角凹端紧定螺钉",
                    "desc": ""
                },
                {
                    "PID": "a06k",
                    "standard": "GB/T825-1988",
                    "icon": "",
                    "name": "吊环螺钉",
                    "desc": ""
                },
            ]
        },
        pin: {
            typeID: "pin",
            name: "销",
            Standard: "",
            desc: "本公司通用的铸件等",
            path: "CreatePart",

            subtype: [{
                    "PID": "a07a",
                    "standard": "GB/T91-2000",
                    "icon": "",
                    "name": "开口销",
                    "desc": ""
                },
                {
                    "PID": "a07b",
                    "standard": "GB/T117-2000",
                    "icon": "",
                    "name": "圆锥销",
                    "desc": ""
                },
                {
                    "PID": "a07c",
                    "standard": "GB/T119.1-2000",
                    "icon": "",
                    "name": "圆柱销 不淬硬钢和奥氏体不锈钢",
                    "desc": ""
                },
                {
                    "PID": "a07d",
                    "standard": "GB/T119.2-2000",
                    "icon": "",
                    "name": "圆柱销 淬硬钢和马氏体不锈钢",
                    "desc": ""
                },
                {
                    "PID": "a07e",
                    "standard": "GB/T120.1-2000",
                    "icon": "",
                    "name": "内螺纹圆柱销不淬硬钢和奥氏体不锈钢",
                    "desc": ""
                },
                {
                    "PID": "a07f",
                    "standard": "GB/T120.2-2000",
                    "icon": "",
                    "name": "内螺纹圆柱销淬硬钢和马氏体不锈钢",
                    "desc": ""
                },
                {
                    "PID": "a07g",
                    "standard": "GB/T879.1-2000",
                    "icon": "",
                    "name": "弹性圆柱销 直槽 重型",
                    "desc": ""
                },
                {
                    "PID": "a07h",
                    "standard": "GB/T879.2-2000",
                    "icon": "",
                    "name": "弹性圆柱销 直槽 轻型",
                    "desc": ""
                },
                {
                    "PID": "a07i",
                    "standard": "GB/T879.3-2000",
                    "icon": "",
                    "name": "弹性圆柱销 卷制 重型",
                    "desc": ""
                },
                {
                    "PID": "a07j",
                    "standard": "GB/T879.4-2000",
                    "icon": "",
                    "name": "弹性圆柱销 卷制 标准型",
                    "desc": ""
                },
                {
                    "PID": "a07k",
                    "standard": "GB/T879.5-2000",
                    "icon": "",
                    "name": "弹性圆柱销 卷制 轻型",
                    "desc": ""
                },
                {
                    "PID": "a07l",
                    "standard": "GB/T881-2000",
                    "icon": "",
                    "name": "螺尾锥销",
                    "desc": ""
                },
            ]
        },
        rivet: {
            typeID: "rivet",
            name: "铆钉",
            Standard: "",
            desc: "本公司通用的铸件等",
            path: "CreatePart",

            subtype: [{
                    PID: "a08a",
                    standard: "GB/T827-1986",
                    name: "标牌用铆钉",
                    icon: "",
                    desc: "",
                },

            ],
        },
        washer: {
            typeID: "washer",
            name: "垫片",
            Standard: "",
            desc: "本公司通用的铸件等",
            path: "CreatePart",

            subtype: [{
                    "PID": "a09a",
                    "standard": "GB/T93-1987",
                    "icon": "",
                    "name": "标准型弹簧垫圈",
                    "desc": ""
                },
                {
                    "PID": "a09b",
                    "standard": "GB/T95-2002",
                    "icon": "",
                    "name": "平垫圈C级",
                    "desc": ""
                },
                {
                    "PID": "a09c",
                    "standard": "GB/T97.1-2002",
                    "icon": "",
                    "name": "平垫圈A级",
                    "desc": ""
                },
                {
                    "PID": "a09d",
                    "standard": "GB/T97.4-2002",
                    "icon": "",
                    "name": "平垫圈用于螺钉和垫圈组合",
                    "desc": ""
                },
                {
                    "PID": "a09e",
                    "standard": "GB/T848-2002",
                    "icon": "",
                    "name": "小垫圈A级",
                    "desc": ""
                },
                {
                    "PID": "a09f",
                    "standard": "GB/T856-1988",
                    "icon": "",
                    "name": "外舌止动垫圈",
                    "desc": ""
                },
                {
                    "PID": "a09g",
                    "standard": "GB/T857-1988",
                    "icon": "",
                    "name": "圆螺母用止动垫圈",
                    "desc": ""
                },
                {
                    "PID": "a09h",
                    "standard": "GB/T886-1986",
                    "icon": "",
                    "name": "轴肩挡圈",
                    "desc": ""
                },
                {
                    "PID": "a09i",
                    "standard": "GB/T893.1-1986",
                    "icon": "",
                    "name": "孔用弹性挡圈A型",
                    "desc": ""
                },
                {
                    "PID": "a09j",
                    "standard": "GB/T893.2-1986",
                    "icon": "",
                    "name": "孔用弹性挡圈B型",
                    "desc": ""
                },
                {
                    "PID": "a09k",
                    "standard": "GB/T894.1-1986",
                    "icon": "",
                    "name": "轴用弹性挡圈A型",
                    "desc": ""
                },
                {
                    "PID": "a09l",
                    "standard": "GB/T894.2-1986",
                    "icon": "",
                    "name": "轴用弹性挡圈B型",
                    "desc": ""
                },
                {
                    "PID": "a09m",
                    "standard": "GB/T895.1-1986",
                    "icon": "",
                    "name": "孔用钢丝挡圈",
                    "desc": ""
                },
                {
                    "PID": "a09n",
                    "standard": "GB/T895.2-1986",
                    "icon": "",
                    "name": "轴用钢丝挡圈",
                    "desc": ""
                },
                {
                    "PID": "a09o",
                    "standard": "GB/T921-1986",
                    "icon": "",
                    "name": "钢丝锁圈",
                    "desc": ""
                },
                {
                    "PID": "a09p",
                    "standard": "GB/T859-1987",
                    "icon": "",
                    "name": "轻型弹簧垫圈",
                    "desc": ""
                },
            ]
        },
        key: {
            typeID: "rivet",
            name: "铆钉",
            Standard: "",
            desc: "本公司通用的铸件等",
            path: "CreatePart",

            subtype: [{
                    PID: "a10a",
                    standard: "GB/T1095-1979",
                    name: "平键",
                    icon: "",
                    desc: "",
                    path: ""
                },
                {
                    PID: "a10b",
                    standard: "GB/T1096-1979",
                    name: "平键",
                    icon: "",
                    desc: "",
                    path: ""
                },

            ],
        },

    },
    relation: {
        typeID: "relation",
        name: "相关理论,孔等",
        Standard: "",
        desc: "本公司通用的铸件等",
        path: "CreatePart",

        subtype: [{
                "PID": "a01a",
                "standard": "GB/T2-2001",
                "icon": "",
                "name": "紧固件 外螺纹零件未端",
                "desc": ""
            },
            {
                "PID": "a01b",
                "standard": "GB/T152.2-1988",
                "icon": "",
                "name": "紧固件 沉头用沉孔",
                "desc": ""
            },
            {
                "PID": "a01c",
                "standard": "GB/T152.3-1988",
                "icon": "",
                "name": "紧固件 圆柱头用沉孔",
                "desc": ""
            },
            {
                "PID": "a01d",
                "standard": "GB/T152.4-1988",
                "icon": "",
                "name": "紧固件 六角头螺栓和六角螺母用沉孔",
                "desc": ""
            },
            {
                "PID": "a01e",
                "standard": "GB/T5277-1985",
                "icon": "",
                "name": "紧固件 螺栓和螺钉通孔",
                "desc": ""
            },
            {
                "PID": "a01f",
                "standard": "GB/T193-1981",
                "icon": "",
                "name": "普通螺纹直径,螺距",
                "desc": ""
            },
            {
                "PID": "a01g",
                "standard": "GB/T196-1981",
                "icon": "",
                "name": "普通螺纹基本尺寸",
                "desc": ""
            },
            {
                "PID": "a01h",
                "standard": "GB/T12716-1999",
                "icon": "",
                "name": "60度圆锥管螺纹基本尺寸",
                "desc": ""
            },
        ]
    },
}

export default {
    state,
    getters: {},
    mutations: {},
    actions: {}
};