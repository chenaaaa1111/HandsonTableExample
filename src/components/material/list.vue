<template>
    <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
        <template slot-scope="scope">
            <td>{{scope.row.name}}</td>
            <td class="is-right">{{scope.row.calories}}</td>
            <td class="is-right">{{scope.row.protein}}</td>
            <td class="is-right">{{scope.row.fat}}</td>
            <td class="is-right">{{scope.row.carbs}}</td>
            <td class="is-right">{{scope.row.iron}}%</td>
        </template>
    </mu-data-table>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                sort: {
                    name: '',
                    order: 'asc'
                },
                columns: [{
                        title: '项目',
                        width: 200,
                        name: 'name'
                    },
                    {
                        title: '零件号',
                        name: 'calories',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '版本',
                        name: 'protein',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '名称',
                        name: 'fat',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        name: 'carbs',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },


                ],
                list: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,

                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,

                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,

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
<style>
    .gridview-table {
        grid-row: 2/3;
        grid-column: 2/3;
        background-color: transparent;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;

    }
</style>