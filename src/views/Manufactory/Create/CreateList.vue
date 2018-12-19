<template>
    <div class="mygrid">
        <div class="mygridcol-1">
            <mu-button icon color="primary" @click="$router.push('/CreateProject')">
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
            <mu-text-field v-model="listname" placeholder="类型"></mu-text-field>
            <mu-text-field v-model="listname" placeholder="清单名称"></mu-text-field>
            <mu-button icon color="primary" @click="showhelp">
                <mu-icon value="save"></mu-icon>
            </mu-button>
            <mu-button icon color="primary" @click="showhelp">
                <mu-icon value="close"></mu-icon>
            </mu-button>
        </div>
        <div class="mygridcol-4">
            <mu-button icon color="primary" @click="showhelp">
                <mu-icon value="check"></mu-icon>
            </mu-button>
            <mu-select v-model="listtype">
                <mu-option v-for="item in listtypes" :key="item.id" :label="item" :value="item"></mu-option>
            </mu-select>
            <mu-text-field class="mygridcol-3" v-model="partno" placeholder="请输入项目号,零件号,名称..." :action-icon="'search'"
                @click="codesearch()"></mu-text-field>

        </div>

    </div>
</template>
<script>
    // import './Design.css'
    export default {
        data() {
            return {
                templatelists: ["原材料", "43434434", "43344343"],
                listtypes: ["原材料", "生产", "采购", "检验", "入库", "出库", "发货", "退货"],
                listtype: "采购",
                partno: "",
                listname: "",
            };
        }
        // methods: {
        //     btnclik: function () {
        //         this.$route.push({});
        //     }
        // }
    };
</script>
<style scoped>
    .mu-flat-button {
        height: 120px;
        line-height: 120px;
        min-width: 120px;
        font-size: 14px;
    }
</style>