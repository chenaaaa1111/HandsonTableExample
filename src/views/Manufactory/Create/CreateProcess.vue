<template>
    <main>
        <header>
            <div class="headtoprow2">
                <div class="left">
                    <mu-button icon color="primary" @click="$router.go(-1)">
                        <mu-icon value="arrow_back"></mu-icon>
                    </mu-button>
                    <mu-breadcrumbs divider="—">
                        <mu-icon value="chevron_right" slot="divider"></mu-icon>
                        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                    </mu-breadcrumbs>
                </div>
                <div class="right ">
                    <mu-button color="primary" @click="$router.go(-1)">
                        <mu-icon left value="arrow_downward"></mu-icon>导入
                    </mu-button>
                    <mu-button icon color="primary" @click="$router.go(-1)">
                        <mu-icon value="help_outline"></mu-icon>
                    </mu-button>
                </div>
            </div>
        </header>
        <article>
            <div class="mygrid">
                <div class="mygridcol-1">
                    <h2 style="text-align:left">新建类型</h2>
                </div>
                <div class="mygridcol-4" v-for="item in newitems" :key="item.id" style="text-align:center">
                    <mu-button flat color="primary" :href="item.path" style=" height:90px;line-height: 90px;min-width: 90px;width:90px;">
                        <!-- @click.native="$router.push(item.path)" -->
                        <mu-icon color="gray" size=80 :value="item.icon"></mu-icon>
                    </mu-button>
                    <p>{{item.name}}</p>
                </div>
                <mu-divider style="margin-top:10px"></mu-divider>

                <div class="mygridcol-1">
                    <mu-subheader>模板 </mu-subheader>
                    <!-- <h2 style="text-align:left">模板</h2> -->
                </div>
                <div class="mygridcol-4" v-for="item in processtemplates" :key="item.id" style="text-align:center">
                    <mu-button flat color="primary" :href="item.path" style=" height:60px;line-height: 60px;min-width: 60px;width:60px;">
                        <!-- @click.native="$router.push(item.path)" -->
                        <mu-icon color="gray" size=50 :value="item.icon"></mu-icon>
                    </mu-button>
                    <p>{{item.temName}}</p>
                </div>
                <!-- <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
                    <div class="griditem" v-for="item in 5" :key="item">
                        <mu-avatar text-color="primary" color="white">
                            <mu-icon value="insert_drive_file"></mu-icon>{{item}}
                        </mu-avatar>
                    </div>
                </div> -->
                <router-view />
                <!-- <div class="mygridcol-1">
                    <h2 style="text-align:left">导入</h2>
                </div>
                <div class="mygridcol-4" v-for="item in importitems" :key="item.id" style="text-align:center">
                    <mu-button flat color="primary" v-bind:href="item.path">
                        <img height="110px" width="110px" :src="item.icon">
                    </mu-button>
                    <p>{{item.name}}</p>
                </div> -->

            </div>
        </article>
    </main>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                newitems: [{
                        name: "下料",
                        icon: ":iconfont icon-Knife",
                        desc: "",
                        path: "RAWPart"
                    },

                    {
                        name: "加工",
                        icon: ":iconfont icon-jichuang",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "采购",
                        icon: "shopping_cart",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "检验",
                        icon: ":iconfont  icon-jianyan",
                        desc: "",
                        path: "CreatePart"
                    },
                    {
                        name: "更多",
                        icon: "arrow_forward",
                        desc: "",
                        path: "CreatePart"
                    },


                ],
                items: [{
                        text: "项目",
                        disabled: false
                    },
                    {
                        text: "Link 1",
                        disabled: false
                    },
                    {
                        text: "Link 2",
                        disabled: true
                    }
                ],
            };
        },
        computed: {
            ...mapGetters(['processtemplates'])
        }
        // methods: {
        //     btnclik: function () {
        //         this.$route.push({});
        //     }
        // }
    };
</script>
<style scoped>
    /* .mu-flat-button {
        height: 120px;
        line-height: 120px;
        min-width: 120px;
        font-size: 14px;
    } */


    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
    }

    .mygridcol-1 {
        flex: 1 1 100%;
    }

    .mygridcol-2 {
        flex: 1 1 50%;
    }

    .mygridcol-3 {
        flex: 1 1 33.33%;
    }

    .mygridcol-4 {
        margin-top: 1em;
        flex: 0 1 15%;
    }
</style>