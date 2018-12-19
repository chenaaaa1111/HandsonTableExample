const designattribute = { // 设计属性
    state: {
        partID: "", //8位数字,系统内编码
        partcode: "",
        partversion: "",
        partname: "",
        parttype: '', //类型
        partsubtype: '', //子类型
        othertype: "", //其他类型
        partmaterial: "", //材质
        partgb: "", //国标
        partspecification: "", //规格
        partsetweight: "", //单重
        partdrawing: true, //是否有图纸
        partdrawings: ['文档类型, 文档编号'], //是否有图纸
        partenable: "", //启用状态
        partbrand: "", //品牌
        editenable: true, // 是否可变更,业务会影响零件是否可以变更

        // 创建时间
        // 修改时间

    }
};
const drawingattribute = { //图纸属性
    state: {
        docID: "", //8位数字,系统内编码
        doccode: "", // 文档号
        docversion: "", // 版本
        docformat: "", // 文件格式:软件名或后缀类型
        docorigin: "", // 文档来源
        docscale: "", // 图纸比例
        docsizeformat: "", // 图幅
        doctotalpages: '', // 页数
        doccreator: "", // 设计人
        doctitle: "", // 标题、图号
        docpath: "", // 文件路径和名称
        docimg: "", // 效果图
        docfrontview: "", // 主视图
        docmainview: "", // 俯视图
        docleftview: "", // 左侧视图
        // 右侧视图
        docsectionview: "", // 剖面图1
        // 剖面图2
        // 截图1
        // 截图2
        // 可用性状态
        // 体积
        // 创建时间
        // 修改时间
        // 修改次数
        // 保密性
        // 保密期限
        // 下载次数

    }
};

export default {
    state,
    getters: {},
    mutations: {
        addpart(state, {
            partID,
            partcode
        }) {
            state.partID = partID;
            state.partcode = partcode;

        },
        modifypart(state, newpart) {
            state.partID = xxxx;
            state.partcode = xx;

        },
    },

    actions: {
        addpartAsync(srore, {}) {
            Store.commit('addpart', parms)
        }

    }
};