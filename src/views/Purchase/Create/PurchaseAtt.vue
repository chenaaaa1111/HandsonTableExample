<template>
    <div>
        <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
            <mu-tab @click="changetab('attrib')">属性</mu-tab>
            <mu-tab @click="changetab('material')">价格明细</mu-tab>
        </mu-tabs>
        <div>
            <mu-text-field v-model="name" placeholder="序号" icon="looks_one" style="min-width:10px;width:120px"></mu-text-field>
            <mu-tooltip content="自定义颜色">
                <mu-button icon style="margin-left:50px">
                    <mu-icon value="color_lens" color="red"></mu-icon>
                </mu-button>
            </mu-tooltip>
            <mu-text-field v-model="name" prefix="编码:" solo style="margin-left:50px"></mu-text-field>
        </div>
        <div>
            <mu-auto-complete :data="cutmethod" icon="shopping_cart" :action-icon="'keyboard_arrow_down'"
                :max-search-results="7" v-model="name" open-on-focus style="min-width:10px;width:160px"></mu-auto-complete>
            <mu-text-field v-model="name" placeholder="内容"></mu-text-field>

            <!-- <mu-icon value="color_lens"> </mu-icon>材质:xxxxxxx -->
        </div>
        <mu-auto-complete class="mygridcol-3" :data="suppliers" icon="person" placeholder="供应商" :max-search-results="5"
            v-model="material" open-on-focus :action-icon="'more_vert'"></mu-auto-complete>

        <div>
            <mu-text-field v-model="name" label="单价" prefix="￥" icon="star" style="min-width:10px;width:200px" type='number'></mu-text-field>
            <mu-text-field v-model="name" label="数量" icon="close" style="min-width:10px;width:200px" suffix="个" type='number'></mu-text-field>
            <mu-text-field v-model="name" label="总价" prefix="￥" icon="drag_handle" :action-icon="'more_vert'"
                :action-click="selectcostway" style="min-width:10px;width:200px" type='number'></mu-text-field>
        </div>
        <div>
            <mu-date-input v-model="startdate" label="计划开始时间" label-float icon="date_range"></mu-date-input>
            <mu-date-input v-model="enddate" label="计划完成时间" label-float icon="keyboard_arrow_right"></mu-date-input>
        </div>
        <div>
            <mu-text-field class="mygridcol-3" v-model="gb" icon="list_alt" placeholder="采购订单号" solo></mu-text-field>
            <mu-text-field class="mygridcol-3" v-model="gb" placeholder="采购合同号" solo></mu-text-field>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                cutmethod: ["询价", "合同", "付款", "收货", "检验", "开票", "收款"],
                suppliers: ["询价", "合同", "付款", "收货", "检验", "开票", "收款"],
            }
        },
        methods: {
            open() {
                this.msg = "个"
            },
            count() {
                this.msg = "件"
            },
        }
    }
</script>