const pid = { //零部件执行时间
    state: {
        pid: "", //虚拟项目号(用于临时数据)+实际项目ID+零件号ID+版本号+类型码(供应商1,供应商2,车间1,车间2等)+工序ID+状态位+预留4位,无数据为0
        pidplanstarttime: "",
        pidplanfinishtime: "",
        pidactualstarttime: "",
        pidactualfinishtime: "",

    }
};

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
const materialattribute = { // 材质属性,等
    state: {
        materialID: "", // ID（材质编号）
        materialname: "", // 名称,牌号
        materialcatelog: "", // 材料大类
        materialsubcat: "", // 材料细类
        // 材料牌号
        // 形态特征
        // 供应状态
        // 材料规格
        materialimg: "", // 附加码
        materialsetweight: "", // 单位重量
        materialGB: "", // 国家标准
        materialbrand: "", // 品牌
        materialenable: true, // 材质状态
        // 型号
        // 创建时间
        // 修改时间

    }
};
const rawattribute = { //原材料属性
    state: {
        rawID: "", //（材料编号）
        rawname: "", //名称
        rawtype: "", // 是板材
        rawsubtype: "",
        rawsize: "", // 型号规格、截面积
        // 长度
        // 宽度
        // 附加信息
        // 供应状态
        rawimg: "", //材料图片标志
        rawGB: "", // 国家标准
        rawsetweight: "", // 单位重量
        rawbrand: "", // 品牌
        rawenable: true, // 状态
        // 创建时间
        // 修改时间

    }
};
const processattribute = { //工序属性
    state: {
        processID: "", //8位数字,系统内编码
        processcode: "", //工序编号
        processversion: "", //工序版本
        processname: "", //工序名称
        processtype: '', //工序类型
        processsubtype: '', //工序子类型
        processcost: "", //工序成本
        processenable: "", //工序状态
        processmachine: [], //使用设备,关联设备表
        processperson: [], //操作人员,关联人员表
        processmaterial: [] //辅助材料工具,关联工具表
        // material: "",
        // gb: "",
        // Specification: "",
        // setweight: "",
        // drawings: true,
        // size: "",
        // 创建时间
        // 修改时间


    }
};

const machineattribute = { // 机床属性,等
    state: {
        machineID: '', // 工作中心编号
        machinename: '', // 工作中心名称
        machineplace: '', // 位置
        machinetype: '', // 类型
        machinespecification: '', // 型号
        machinerange: '', // 加工范围
        machinefunction: '', // 功能
        machineenable: true // 可用性状态
        // 创建时间
        // 修改时间

    }
};
const staffattribute = { // 人员属性:等
    state: {
        staffID: "", //8位数字,系统内编码
        staffcode: "", // 人员编号
        staffname: "", // 名称
        staffpart: "", // 部门
        staffcompany: "", // 公司
        companytype: "", //公司类型:内部,外部,供应商,客户
        stafftaxinfo: "", // 公司开票信息
        staffphone: "", // 电话
        staffmail: "", // 邮箱
        staff: "", // 其他方式
        staffposition: "", // 职位
        staffenable: true, // 可用性状态
        // 创建时间
        // 修改时间

    }
};

const purchaseattribute = { // 采购属性:数量,交货期,优先级等
    state: {
        // 创建时间
        // 修改时间

    }
};
const inspectattribute = { // 检验属性:检查项,检查频率,判断结果等
    state: {
        // 创建时间
        // 修改时间

    }
};
const purchaselistattribute = { // 采购清单属性/也可以把车间当做供应商管理:等
    state: {
        purchaselistID: "", //系统内编号
        purchaselistcode: "", // 清单编号
        purchaselistname: "", // 清单名称
        purchaselistversion: "", // 清单版本
        purchaselistcreator: "", // 创建人
        purchaselistsupplier: "", //供应商
        purchaselistperson: "", //供应商联系人       
        purchaselistenable: "", //采购清单状态

        // 创建时间
        // 修改时间
        purchaselisttable: [{ //序号
                purlno: "",
            },
            { //成员
                pid: "", //
            },
            { //项目code
                projectcode: "",
            },
            { //partname
                partname: "",
            },
            { //partversion
                partversion: "",
            },
            { //采购qty
                qty: "",
            },
            { //预计交货时间
                pidplanfinishtime: "",
            },
            { //备注
                comment: "",
            },
        ],



        purchaselistaction: [{ //序号
                purlano: "",
            },
            { //动作
                action: "", //如create contract,
            },
            { //动作内容
                actioncontent: "", //
            },
            { //金额
                money: "", //payment money
            },
            { //时间
                acttime: "", //payment time
            },
            { //票号
                taxID: "", //
            },
            { //执行人
                actor: "", //
            },
            { //备注
                purchaselistcomment: "", //
            },
        ],





    }
};
const assemblylistattribute = { // 装配件清单属性,也许类似项目清单属性:等
    state: {
        // 创建时间
        // 修改时间

    }
};
const inspectlistattribute = { // 检验清单属性:等
    state: {
        // 创建时间
        // 修改时间
    }
};


//
const assemblylist = { // 装配件,项目bom等
    state: {
        // 创建时间
        // 修改时间

        assemblylist: [{ //序号
                asslno: "",
            },
            { //层级
                asslayer: "", //
            },
            { //成员
                pid: "", //
            },
            { //partname
                name: "",
            },
            { //零件版本
                partversion: "", //
            },
            { //单套qty
                setqty: "",
            },
            { //总套qty
                totqty: "",
            },
            { //单位
                qtyunite: "",
            },
            { //备注
                comment: "",
            },
        ]
    }
};

//其他清单bom,如审批
//工艺bom
const technologylist = { // 生产过程清单,工艺属性,工艺bom:等
    state: {
        // 创建时间
        // 修改时间
        technologylist: [{ //序号
                techlno: "",
            },
            { //成员
                pid: "", //
            },
            { //项目code
                projectcode: "",
            },
            { //partname
                name: "",
            },
            { //生产qty
                qty: "",
            },
            { //预计交货时间
                pidplanfinishtime: "",
            },
            { //备注
                comment: "",
            },
        ]
    }
};

const store = new Vuex.Store({
    modules: {
        pjt: projectattribute,
        dsn: designattribute,
    },
    state: {
        rtState: 'Root'
    }
});
export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};