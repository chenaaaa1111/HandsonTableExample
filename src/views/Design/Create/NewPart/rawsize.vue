<template>
    <mu-container>

        <mu-paper :z-depth="1">
            <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
                <template slot-scope="scope">
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">
                        <mu-text-field solo style="min-width:10px;width:100px" v-model="material" placeholder="Q235"
                            :action-icon="'arrow_drop_down'" :action-click="selectmaterial"></mu-text-field>
                    </td>
                    <td class="is-right">
                        <mu-text-field solo style="min-width:10px;width:100px" type='number' v-model="size" placeholder="100mm"></mu-text-field>
                    </td>
                    <td class="is-right">
                        <mu-text-field solo style="min-width:10px;width:100px" type='number' v-model="qty" placeholder="1"></mu-text-field>
                    </td>

                    <td>
                        <mu-button icon @click="showdetail=!showdetail">
                            <mu-icon value="more_horiz"></mu-icon>
                        </mu-button>
                    </td>
                </template>
            </mu-data-table>
            <div class="fastaddgroup">
                <mu-button icon color="primary" @click="enablefastadd=true">
                    <mu-icon value="add_circle_outline"></mu-icon>
                </mu-button>
                <div class="fastadd" v-if="enablefastadd">
                    <mu-text-field action-icon="search"></mu-text-field>
                    <mu-text-field></mu-text-field>
                    <mu-button icon color="primary">
                        <mu-icon value="save"></mu-icon>
                    </mu-button>
                    <mu-button icon color="primary" @click="enablefastadd=false">
                        <mu-icon value="close"></mu-icon>
                    </mu-button>
                </div>
            </div>
        </mu-paper>
        <!-- <mu-divider></mu-divider> -->
        <div>

            <createdrawing v-if="showdetail" />
        </div>
        <materialDialog ref="materialDialog" />
    </mu-container>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    import createdrawing from '@/components/createdrawing.vue';
    import materialDialog from '@/components/material/materialDialog.vue';
    export default {
        name: "",
        components: {
            createdrawing,
            materialDialog
        },
        data() {
            return {
                material: "Q235",
                size: "",
                qty: 1,
                comment: "",
                showdetail: false,
                enablefastadd: false,
                columns: [{
                        title: '序号',
                        width: 50,
                        name: 'carbs'
                    }, {
                        title: '规格',
                        width: 200,
                        name: 'name'
                    },
                    {
                        title: '国标',
                        name: 'calories',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '材质',
                        name: 'material',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '尺寸',
                        name: 'size',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '数量',

                        width: 126,
                        align: 'center',

                    },

                    {
                        title: '详情',

                        width: 126,
                        align: 'center',

                    },


                ],
                list: [{ //来自于store
                        name: 'Frozen Yogurt',
                        calories: 159,


                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,


                    },
                    {
                        name: 'Eclair',
                        calories: 262,


                    },
                ]


            }
        },
        computed: {},
        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            },
            selectmaterial() {

                this.$refs.materialDialog.openselectmaerialcatedalog = true
            }
        }
    };
</script>
<style scoped>
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