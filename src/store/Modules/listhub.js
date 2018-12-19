const state = {
    listTypes: [{
            icon: "group",
            name: "项目",
            routepath: "/listlibrary",
            user: []
        },
        {
            icon: ":iconfont icon-Knife",
            name: "下料",
            routepath: "/listlibrary/rawlibrary"
        },
        {
            icon: ":iconfont icon-jichuang",
            name: "加工",
            routepath: "/listlibrary/processlibrary"
        },
        {
            icon: "shopping_cart",
            name: "采购",
            routepath: "/listlibrary/purchaselibrary"
        },
        {
            icon: "local_library",
            name: "装配",
            routepath: "/listlibrary/assemblylibrary"
        },

        {
            icon: ":iconfont icon-jianyan",
            name: "检验",
            routepath: "/listlibrary/inspectionlibrary"
        },
        {
            icon: "local_library",
            name: "入库",
            routepath: "/listlibrary/"
        },

        {
            icon: "local_library",
            name: "出库",
            routepath: "/listlibrary/"
        },
        {
            icon: "local_library",
            name: "发货",
            routepath: "/listlibrary/"
        },

        {
            icon: "local_library",
            name: "退货",
            routepath: "/listlibrary/"
        },


    ],
    reportTypes: [{
            icon: "group",
            name: "机床状态",
            routepath: "/RecentList"
        },
        {
            icon: "group",
            name: "人员状态",
            routepath: "/RecentList"
        },
        {
            icon: "group",
            name: "项目看板",
            routepath: "/RecentList"
        },
        {
            icon: "local_library",
            name: "资金状态",
            routepath: "/FavouriteList"
        },
        {
            icon: "local_library",
            name: "产品状态",
            routepath: "/FavouriteList"
        },
    ],
}
const getters = {
    listTypes(state) {
        return state.listTypes
    },
    reportTypes(state) {
        return state.reportTypes
    },
}
export default {
    state,
    getters,
    mutations: {},
    actions: {}
};