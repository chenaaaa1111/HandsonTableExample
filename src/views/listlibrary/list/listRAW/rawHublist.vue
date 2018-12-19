<template>
    <article>
        <section>
            <mu-data-table :columns="listaction" :sort.sync="sort" @sort-change="handleSortChange" :data="list"
                @select-change="handleSelectChange" selectable select-all :selects.sync="selects" checkbox>
                <template slot-scope="scope">
                    <td class="is-right">{{scope.row.rawID}}</td>
                    <td class="is-right">{{scope.row.partcode}}</td>
                    <td>{{scope.row.rawcode}}</td>
                    <!-- <mu-button icon color="primary" @click="$router.push('RAWPart')">
                        <mu-icon value="call_split"></mu-icon>
                    </mu-button> -->
                    <td>
                        <!-- <mu-button icon color="primary" @click="$router.push('RAWPart')"> -->
                        <mu-icon color="primary" value="photo"></mu-icon>
                        {{scope.row.partname}}
                        <!-- </mu-button> -->
                    </td>


                    <td class="is-right">{{scope.row.rawsize}}</td>
                    <td class="is-right">{{scope.row.rawlength}}/{{scope.row.rawwidth}}/{{scope.row.rawthickness}}</td>
                    <td class="is-right">{{scope.row.rawqty}}</td>
                    <td class="is-right">{{scope.row.setweight}}</td>
                    <td class="is-right">{{scope.row.setprofile}}</td>
                    <td class="is-right">{{scope.row.cost}}</td>
                    <td class="icongroup">

                        <mu-button icon color="primary" @click="$router.push('RAWPart')">
                            <mu-icon value="add"></mu-icon>
                        </mu-button>
                        <mu-button icon color="primary" @click="$router.push('RAWPart')">
                            <mu-icon value="info"></mu-icon>
                        </mu-button>
                        <mu-menu placement="bottom-end" :moreopen.sync="moreopen">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button to="partstep">
                                    <mu-list-item-title>进入</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="viewdetail">
                                    <mu-list-item-title>预览</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>创建子件</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>创建工序</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>添加图纸</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="openAlertDialog">
                                    <mu-list-item-title>分享</mu-list-item-title>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item button>
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>

                    </td>
                </template>

            </mu-data-table>
            <mu-flex justify-content="end">
                <mu-pagination :total="100" :current.sync="current"></mu-pagination>
            </mu-flex>

        </section>
        <aside v-if="showhelp">
            <mu-button icon color="red" @click="showhelp=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            需要列筛选功能
            列编辑功能
            插入空行功能
        </aside>
    </article>
</template>
<script>
    export default {

        data() {
            return {
                showhelp: false,
                current: 1,
                selects: [],
                sort: {
                    name: '',
                    order: 'asc'
                },
                listaction: [{
                        title: '序号',
                        width: 60,
                        name: 'rawID'
                    },
                    {
                        title: '零件号',

                        name: 'partcode',
                        align: 'center',
                    },
                    {
                        title: '子件号',

                        name: 'rawcode'
                    },
                    {
                        title: '零件名',

                        name: 'partname',
                        align: 'left',
                    },
                    {
                        title: '物料类型',
                        name: 'rawtype',
                        width: 100,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '规格尺寸',
                        name: 'rawsize',
                        width: 120,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '长/宽/厚',
                        name: 'rawlength',
                        width: 100,
                        align: 'center',
                        sortable: true
                    },

                    {
                        title: '数量',
                        name: 'rawqty',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '单重',
                        name: 'setweight',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '总重',
                        name: 'setweight*rawqty',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: "操作",
                        name: "iron",
                        width: 200,
                        align: "center",

                    }

                ],
                list: [{
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Frozen Yogurt", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "槽钢",
                        rawsize: "100*50", // 型号规格、截面积
                        rawlength: "2010",
                        rawwidth: "",
                        rawthickness: "",
                        rawqty: "2",
                        setweight: "2323",
                        setprofile: "",
                        cost: "21",
                    },
                    {
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Ice cream sandwich", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "矩形管",
                        rawsize: "100*50*10", // 型号规格、截面积
                        rawlength: "2000",
                        rawwidth: "",
                        rawthickness: "",
                        rawqty: "2",
                        setweight: "2323",
                        setprofile: "",
                        cost: "21",
                    },
                    {
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Eclair", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "方钢",
                        rawsize: "50*10", // 型号规格、截面积
                        rawlength: 200,
                        rawwidth: 0,
                        rawthickness: 0,
                        rawqty: 2,
                        setweight: 2323,
                        setprofile: "",
                        cost: "21",
                    },

                ]
            }
        },
        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            },
            viewdetail() {
                this.rightsideshow = true;
            },
            handleSelectChange() {
                if (this.selects.length > 0)
                    this.$parent.selectitem = true;
                else
                    this.$parent.selectitem = false;
            },
        }
    };
</script>
<style lang="less" scoped>
    .icongroup {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
        width: 100%;
        align-content: center;
    }
</style>