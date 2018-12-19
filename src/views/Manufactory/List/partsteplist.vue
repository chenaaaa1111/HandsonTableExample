<template>
    <article>
        <section>
            <mu-data-table :loading="false" :auto-expand="false" :expand-row-index="rowIndex" :columns="columns"
                :sort.sync="sort" @sort-change="handleSortChange" @row-click="selrow" :data="list.slice(0, 15)"
                selectable select-all :selects.sync="selects" checkbox>
                <template slot="expand" slot-scope="prop">
                    <div style="padding: 24px;">
                        {{prop.row.name}}
                        长 宽 厚
                    </div>
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
                    <td class="icongroup">
                        <mu-button icon color="primary" @click="viewproject()">
                            <mu-icon value="info"></mu-icon>
                        </mu-button>
                        <mu-button icon color="primary" @click="review()">
                            <mu-icon value="timeline"></mu-icon>
                        </mu-button>
                        <mu-menu placement="bottom-end" :moremenuopen.sync="openmenu">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button @click="$router.push({path:('Design')})">
                                    <mu-list-item-title>预览</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="$router.push({path:('Manufactory')})">
                                    <mu-list-item-title>生产</mu-list-item-title>
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

                    </td>



                </template>
            </mu-data-table>
            <mu-flex justify-content="end">
                <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
            </mu-flex>
        </section>

        <aside v-if="showhelp">
            <mu-button icon color="red" @click="showhelp=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>
            需要表格拖动功能
        </aside>
    </article>

</template>
<script>
    export default {
        data() {
            return {
                selects: [],
                rowIndex: -1,
                current: 1,
                iconimg: "keyboard_arrow_down",
                openmenu: true,
                extendopen: false,
                openmenu: false,
                showhelp: false,

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

                        name: "calories"
                    },
                    {
                        title: "工种",

                        name: "calories"
                    },

                    {
                        title: "工作设备/供应方_刀具-辅料",
                        name: "iron",
                        width: 156,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "工序名称",
                        name: "fat",

                        align: "center",
                        sortable: true
                    },
                    {
                        title: "数量(件）",
                        name: "carbs",
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
                    {
                        title: "操作人",
                        name: "name",
                        width: 160,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "上一任务",
                        name: "name",
                        width: 160,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "二维码",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    // {
                    //     title: "图纸",
                    //     name: "protein",
                    //     width: 126,
                    //     align: "center",
                    //     sortable: true
                    // },
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
            },
            selrow(index, row, e) {
                if (this.extendopen) {
                    this.rowIndex = -1
                    this.iconimg = "navigate_next"
                } else {
                    this.rowIndex = index
                    this.iconimg = "keyboard_arrow_down"
                }

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

    .buttongroups {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .fastaddgroup {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .fastaddgroup>.fastadd {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
</style>