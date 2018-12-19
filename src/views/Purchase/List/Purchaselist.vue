<template>
    <article>
        <mu-paper class="leftcontent" :z-depth="1">
            <mu-data-table :loading="false" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
                <template slot="expand" slot-scope="prop">
                    <div style="padding: 24px;">this is expand row, name {{prop.row.name}}</div>
                </template>
                <template slot-scope="scope">
                    <mu-button icon color="primary">
                        <mu-icon value="navigate_next"></mu-icon>
                    </mu-button>
                    <td class="is-right">{{scope.row.iron}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td>{{scope.row.name}}</td>


                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td class="is-right">{{scope.row.protein}}</td>

                    <td class="is-right">操作</td>

                    <div class="buttongroup" v-if="listtoolbar">
                        <mu-button icon color="primary">
                            <mu-icon value="info"></mu-icon>
                        </mu-button>
                        <mu-button icon color="primary" @click="isfilter=true">
                            <mu-icon value="filter_list"></mu-icon>
                        </mu-button>
                        <mu-menu placement="bottom-end" :open.sync="open">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>预留</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>添加到</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>上移</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>下移</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>拆分</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>预留</mu-list-item-title>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item button>
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </div>

                </template>
            </mu-data-table>
            <mu-pagination :total="100" :current.sync="current"></mu-pagination>
        </mu-paper>
        <div v-if="rightsideshow" class="rightside">
            <mu-button icon color="red" @click="rightsideshow=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            this is asd
        </div>
    </article>

</template>
<script>
    export default {
        data() {
            return {
                rightsideshow: true,
                current: 1,
                sort: {
                    name: "",
                    order: "asc"
                },
                columns: [{
                        title: "",
                        width: 30,
                        name: "name"
                    },
                    // {
                    //     title: "序号",
                    //     width: 50,
                    //     name: "name"
                    // },
                    {
                        title: "工序号",
                        width: 20,
                        name: "calories"
                    },

                    {
                        title: "工序名称",
                        name: "fat",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "数量",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },

                    {
                        title: "单位",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },

                    {
                        title: "工作设备/供应方",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "费用",
                        name: "name",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                ],
                list: [{
                        name: "Frozen Yogurt",
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1
                    },
                    {
                        name: "Ice cream sandwich",
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1
                    },
                    {
                        name: "Eclair",
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7
                    },
                    {
                        name: "Cupcake",
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8
                    },
                    {
                        name: "Gingerbread",
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16
                    },
                    {
                        name: "Jelly bean",
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0
                    },
                    {
                        name: "Lollipop",
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2
                    },
                    {
                        name: "Honeycomb",
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45
                    },
                    {
                        name: "Donut",
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22
                    },
                    {
                        name: "KitKat",
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: 6
                    }
                ]
            };
        },
        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort(
                    (a, b) => (order === "asc" ? a[name] - b[name] : b[name] - a[name])
                );
            }
        }
    };
</script>
<style lang="less" scoped>
    .title-left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        align-content: center;
    }

    .title-right {
        flex: 1 1 100px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        /* margin-left: -50px; */
    }
</style>