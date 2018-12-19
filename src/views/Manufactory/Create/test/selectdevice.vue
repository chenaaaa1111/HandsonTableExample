<template>
    <mu-paper :z-depth="1" style="padding-left:40px;padding-right:40px;">
        <mu-tabs :value.sync="costway" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
            <mu-tab>自制</mu-tab>
            <mu-tab>外协</mu-tab>
        </mu-tabs>
        <mu-data-table selectable select-all :selects.sync="selectdevices" checkbox :columns="devicetitle" :sort.sync="sort"
            @sort-change="handleSortChange" :data="devicelist.slice(0, 6)">
            <template slot-scope="scope">
                <td class="is-right">{{scope.row.fat}}</td>
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
                <td class="is-right">{{scope.row.iron}}%</td>
                <mu-button icon color="primary" @click="reviewpart()">
                    <mu-icon value="view"></mu-icon>查看
                </mu-button>
            </template>
        </mu-data-table>
    </mu-paper>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                selectdevices: [],
                sort: {
                    name: '',
                    order: 'asc'
                },
                devicetitle: [{
                        title: "序号",
                        width: 30,
                        name: "name"
                    },
                    {
                        title: "设备名称",
                        name: "name",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "型号",
                        name: "fat",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "类型",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "加工范围",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "位置",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },

                    {
                        title: "负责人",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "状态",
                        name: "iron",
                        width: 126,
                        align: "center",

                    },
                ],
                devicelist: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: 6
                    }
                ],
            }
        }
    };
</script>