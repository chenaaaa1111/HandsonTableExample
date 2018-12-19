<template>
    <nav class="depthshadow">

        <mu-sub-header>最近使用</mu-sub-header>
        <mu-list textline="two-line">
            <mu-list-item avatar button :ripple="false" v-for="item in rawtypes" :key="item.id" style="text-align:center;">

                <mu-list-item-content>
                    <mu-list-item-title>
                        <mu-icon :value="item.icon"></mu-icon>{{item.name}}
                    </mu-list-item-title>
                    <mu-list-item-sub-title>{{item.desc}}</mu-list-item-sub-title>
                </mu-list-item-content>
                <!-- <mu-list-item-action>
                    <mu-button icon>
                        <mu-icon value="launch"></mu-icon>
                    </mu-button>
                </mu-list-item-action> -->

                <!-- <mu-paper :z-depth="1" slot="nested">
                    thi是action

                    thiis 哎 啊table 展开子内容,类型很多很多
                </mu-paper> -->
            </mu-list-item>
        </mu-list>
        <!-- <mu-expansion-panel>
                <div slot="header">Panel 1</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
                <mu-button slot="action" flat>Cancel</mu-button>
                <mu-button slot="action" flat color="primary">Save</mu-button>
            </mu-expansion-panel> -->
        <mu-button flat>
            导入
        </mu-button>

    </nav>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                rawtypes: [{
                        name: "100-50-2",
                        icon: ":iconfont icon-buxiugang",
                        desc: "2000mm",
                        path: "test"
                    },
                    {
                        name: "管材",
                        icon: ":iconfont icon-guancai",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "板材",
                        icon: ":iconfont icon-dd-modules-g",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "棒材",
                        icon: ":iconfont icon-yuancailiaofei",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "线材",
                        icon: ":iconfont icon-xiancai",
                        desc: "",
                        path: "CreatePart"
                    },

                ],
            }
        }
    };
</script>
<style scoped>
    .depthshadow {
        -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
        margin-bottom: 10px;
    }
</style>