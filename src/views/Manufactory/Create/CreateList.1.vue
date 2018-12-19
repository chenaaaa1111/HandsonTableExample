<template>
    <div class="mygrid">
        <div class="mygridcol-1">
            <h2 style="text-align:left">新建</h2>
        </div>
        <div class="mygridcol-4">

            <mu-button flat color="primary" v-bind:href="item.path">

                <!-- @click.native="$router.push(item.path)" -->
                <img height="110px" width="110px" :src="item.icon">
            </mu-button>

            <p>{{item.name}}</p>
        </div>
        <mu-select label="Normal" v-model="normal.value1" full-width>
            <mu-option v-for="item in items" :key="item.id" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-text-field class="mygridcol-4" v-model="projectcustomer" placeholder="输入内容"></mu-text-field>
    </div>
</template>
<script>
    // import './Design.css'
    export default {
        data() {
            return {
                items: [{
                        name: "原材料",
                        icon: "./import.png",
                        desc: "",
                        path: "ProcessPart"
                    },

                    {
                        name: "生产",
                        icon: "./import.png",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "采购",
                        icon: "./sync.png",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "检验",
                        icon: "./sync.png",
                        desc: "",
                        path: "CreatePart"
                    },
                    {
                        name: "入库",
                        icon: "./import.png",
                        desc: "",
                        path: "ProcessPart"
                    },

                    {
                        name: "出库",
                        icon: "./import.png",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "发货",
                        icon: "./sync.png",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "退货",
                        icon: "./sync.png",
                        desc: "",
                        path: "CreatePart"
                    }
                ],
                templatelists: ["211212", "43434434", "43344343"]
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