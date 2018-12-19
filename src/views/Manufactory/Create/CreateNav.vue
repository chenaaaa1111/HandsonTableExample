<template>
    <nav>
        <mu-button flat>
            导入
        </mu-button>
        <mu-list textline="two-line">
            <mu-sub-header inset>已完成列表</mu-sub-header>
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

        <div class="mygridcol-1" style="padding-left:40px;padding-right:40px;margin-top:30px">
            <mu-button color="primary">
                <mu-icon value="playlist_add"></mu-icon>排料单
            </mu-button>
            <mu-button flat>
                <mu-icon value="add_shopping_cart"></mu-icon>购物车
            </mu-button>
        </div>
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
                    {
                        name: "公司内部材料",
                        icon: "",
                        desc: "本公司通用的铸件等",
                        path: "CreatePart"
                    }
                ],
            }
        }
    };
</script>