<template>
    <div>
        <mu-expansion-panel open>
            <div slot="header">活动记录</div>
            <!-- <router-view name="actionlog"></router-view> -->
            <actionlog />

            <mu-button slot="action" flat color="primary">新增</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel>
            <div slot="header">清单明细表</div>
            <!-- <router-view name="pruchaselist"></router-view> -->
            <purchaselist />
            <mu-button slot="action" flat color="primary">编辑</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel>
            <div slot="header">其他内容一</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
        </mu-expansion-panel>
    </div>
</template>
<script>
    import actionlog from "./purchaseoverviewlist.vue";
    import purchaselist from "./Purchaselist.vue";
    export default {
        components: {
            actionlog,
            purchaselist,

        },
        name: "",
        data() {
            return {
                sort: {
                    name: '',
                    order: 'asc'
                },
                listaction: [{
                        title: '序号',
                        width: 200,
                        name: 'name'
                    },
                    {
                        title: '操作',
                        name: 'calories',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作内容',
                        name: 'fat',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '金额',
                        name: 'carbs',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作时间',
                        name: 'protein',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作人',
                        name: 'iron',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '备注',
                        name: 'comment',
                        width: 126,
                        align: 'center',
                        sortable: false
                    }
                ],

                listcontent: [{
                        title: '序号',
                        width: 200,
                        name: 'name',
                    },
                    {
                        title: '项目',
                        name: 'calories',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '零件号',
                        name: 'fat',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '名称',
                        name: 'carbs',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '数量',
                        name: 'protein',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '品牌',
                        name: 'iron',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '备注',
                        name: 'comment',
                        width: 126,
                        align: 'center',
                        sortable: false
                    }
                ],
                list: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1,
                        comment: '备注'
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1,
                        comment: '备注'
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7,
                        comment: '备注'
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
            }
        }
    };
</script>