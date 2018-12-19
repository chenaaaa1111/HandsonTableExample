<template>
    <article>
        <section>
            <mu-expansion-panel>
                <div class="mygrid" slot="header">类型1</div>
                <div class="mygrid">
                    <div class="mygridcol-1" v-for="item in items" :key="item.id">
                        <mu-button flat color="primary" v-bind:href="item.path">
                            <!-- @click.native="$router.push(item.path)" -->
                            <img height="110px" width="110px" :src="item.icon">
                        </mu-button>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <mu-button style="height: 32px;" slot="action" flat color="primary">前进</mu-button>
            </mu-expansion-panel>

            <mu-expansion-panel>
                <div class="mygrid" slot="header">类型2</div>
                <div class="mygrid">
                    <div class="mygridcol-1" v-for="item in items" :key="item.id">
                        <mu-button flat color="primary" v-bind:href="item.path">
                            <img height="110px" width="110px" :src="item.icon">
                        </mu-button>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <mu-button style="height: 32px;" slot="action" flat>后退</mu-button>
                <mu-button style="height: 32px;" slot="action" flat color="primary">前进</mu-button>
            </mu-expansion-panel>

            <mu-expansion-panel>
                <div class="mygrid" slot="header">类型3</div>
                <div class="mygrid">
                    <div class="mygridcol-1" v-for="item in items" :key="item.id">
                        <mu-button flat color="primary" v-bind:href="item.path">
                            <!-- @click.native="$router.push(item.path)" -->
                            <img height="110px" width="110px" :src="item.icon">
                        </mu-button>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <mu-button style="height: 32px;" slot="action" flat>后退</mu-button>
                <mu-button style="height: 32px;" slot="action" flat color="primary">完成</mu-button>
            </mu-expansion-panel>
        </section>
        <aside v-if="helppage" class="centersmidright">
            <mu-button class="mygridcol-3" icon color="primary" @click="closehelp">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            <span>这是帮助区域或辅助文件</span>
        </aside>
    </article>






</template>
<script>
    const projectmembers = [];
    const projecttypes = ['Apple', 'Blood Orange', 'Cantaloupe', ];
    const projectpics = ['Apple', 'Blood Orange', 'Cantaloupe', ];
    export default {
        name: "",
        data() {
            return {
                codenode: {
                    nodeno: "",
                    name: "",
                    prefix: "",
                    suffix: "",
                    midfix: "",
                    description: "",
                    type: "constant", //true为固定数值constant,false为可变arrange
                    chartype: "", //
                    startvalue: "",
                    charlength: 4,
                    charstep: 1,
                    incres: true //true is 递增,
                },
                table: [{
                        rows: [{
                            colums: [{
                                    nodeno: "A",
                                    name: "项目",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                },
                                {
                                    nodeno: "流水号",
                                    name: "6位",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                }
                            ]
                        }]
                    }, //第一行
                    {
                        rows: [{
                            colums: [{
                                    nodeno: "B",
                                    name: "专机",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                },
                                {
                                    nodeno: "01",
                                    name: "夹具",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                },
                                {
                                    nodeno: "流水号",
                                    name: "6位",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                }
                            ]
                        }]
                    }, //第二行
                    {
                        rows: [{
                            colums: [{
                                    nodeno: "C",
                                    name: "半成品",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                },
                                {
                                    nodeno: "厂标件",
                                    name: "02",
                                    prefix: "",
                                    suffix: "",
                                    midfix: "",
                                    description: "项目",
                                    type: "constant", //true为固定数值constant,false为可变arrange
                                    chartype: "数字", //
                                    startvalue: "1",
                                    charlength: 9,
                                    charstep: 1,
                                    incres: true //true is 递增,
                                }
                            ]
                        }]
                    } //第三行
                ],
            };
        },
        methods: {
            closehelp() {
                this.helppage = false;
                this.helpbutton = true;
            },
            showhelp() {
                this.helppage = true;
                this.helpbutton = false;
            },
        }
    };
</script>
<style lang="less" scoped>
    .mytitle {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: space-between;
        padding: 10px;
    }

    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: space-between;
        padding-left: 20px;
    }

    .mygridcol-1 {
        flex: 1;
    }

    .mu-flat-button {
        height: 120px;
        line-height: 120px;
        min-width: 120px;
        font-size: 14px;
    }
</style>