<template>
    <article>
        <section>
            <mu-paper class="ribbonlayout" v-for="item in items" :key="item.id" :z-depth="1">
                <mu-checkbox class="ribboncheck" uncheck-icon="" checked-icon="favorite"></mu-checkbox>
                <mu-button class="ribbonimg" flat color="primary" v-bind:href="item.path" style="height:120px">
                    <!-- @click.native="$router.push(item.path)" -->

                    <img height="110px" width="110px" :src="item.icon">
                </mu-button>
                <div class="ribbondesc">
                    <div class="ribbondesc-1">
                        {{item.name}} {{item.desc}} {{item.type}} {{item.processtype}} {{item.material}}
                        {{item.rawtype}}{{item.rawrule}} {{item.rawlength}}
                        {{item.rawwidth}}
                    </div>
                    <div class="ribbondesc-2">
                        <mu-button icon color="primary" @click="addstep">
                            <mu-icon value="add_circle_outline"></mu-icon>
                        </mu-button>

                        <mu-button flat v-for=" pstep in item.processsteps" :key="pstep">{{pstep.step}}</mu-button>

                        <mu-button icon color="primary" @click="morestep">
                            <mu-icon value="arrow_drop_down"></mu-icon>
                        </mu-button>
                    </div>
                    <div class="ribbondesc-3">
                        <mu-button icon color="primary" @click="() => (favorite ? 'favorite_border' : 'favorite')">
                            <mu-icon value="favorite"></mu-icon>
                        </mu-button>
                        <mu-button flat>编辑</mu-button>
                        <mu-button flat>导出</mu-button>
                        <mu-button flat>打印</mu-button>
                        <mu-button flat>发布</mu-button>
                        <mu-menu slot="right" placement="bottom-end" :open.sync="open">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>导出</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>打印</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>Help</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>Sign out</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </div>
                </div>
            </mu-paper>
        </section>
        <!-- this is ads -->
        <aside v-if="showhelp">
            <mu-button icon color="primary" @click="closehelp">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            <span>这是帮助区域或辅助文件</span>
        </aside>
    </article>
</template>

<script>
    export default {
        // props: {
        //     viewtype: ribbon,
        // },
        data() {
            return {
                showhelp: false,
                items: [{
                        name: "零件号001",
                        icon: "./blank.png",
                        desc: "底板",
                        path: "CreateProject/ProjectAtt",
                        type: "机械",
                        processtype: "机加工",
                        processsteps: [{
                                step: "下料"
                            },
                            {
                                step: "焊接"
                            },
                            {
                                step: "打砂"
                            },
                            {
                                step: "回火"
                            },
                            {
                                step: "龙门铣床"
                            },
                            {
                                step: "钻孔"
                            },
                        ],
                        material: "Q235B",
                        rawtype: "方钢",
                        rawrule: "口60mm",
                        rawlength: "480mm",
                        width: "",

                    },
                    {
                        name: "零件号002",
                        icon: "./template.png",
                        desc: "定位夹",
                        path: "CreateCode",
                        processsteps: [{
                                step: "下料"
                            },
                            {
                                step: "焊接"
                            },
                            {
                                step: "打砂"
                            },
                            {
                                step: "回火"
                            },

                        ],
                    },
                    {
                        name: "零件号003",
                        icon: "./import.png",
                        desc: "this is import",
                        path: "CreateProdattrib",
                        processsteps: [{
                                step: "下料"
                            },
                            {
                                step: "焊接"
                            },
                            {
                                step: "打砂"
                            },
                        ],
                    },
                    {
                        name: "零件号004",
                        icon: "./sync.png",
                        desc: "this is sync",
                        path: "",
                        processsteps: [{
                                step: "焊接"
                            },
                            {
                                step: "打砂"
                            },
                        ],
                    },
                ],
            }
        },
    };
</script>
<style scoped>
    section {

        -webkit-box-shadow: none;
        box-shadow: none;

    }

    .mu-flat-button {
        /* height: 30px; */
        /* line-height: 120px;
        min-width: 120px; */
        font-size: 14px;
        /* position: initial; */
    }

    /* .mu-ripper-wrapper {
        height: 24px;
    } */

    .mytitle {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: space-between;
        padding: 10px;
    }

    .ribbonlayout {
        display: flex;
        flex-direction: row;
        /* width: auto; */
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 5px;

    }

    .ribboncheck {
        flex: 0 0 5px;
        order: -1;
    }

    .ribbonimg {
        flex: 0 0 120px;
        order: 0;
    }

    .ribbondesc {

        align-items: flex-start;
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: auto;


    }

    .ribbondesc-1 {
        flex: 0 1 auto;
        order: -1;
        margin-right: 20px;


    }

    .ribbondesc-2 {
        flex: 0 1 32px;
        order: 1;
        align-self: flex-start;
        flex-wrap: inherit;

    }

    .ribbondesc-3 {
        flex: 0 1 32px;

        order: 2;

    }
</style>