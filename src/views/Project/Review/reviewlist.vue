<template>
    <article>
        <section>
            <mu-expansion-panel>
                <div slot="header">付款进度</div>
                <div>
                    <div>
                        <p>销售合同</p>
                        <p>采购合同xxx 名称:xx 付款60% 2018/2/10 发票号码:xxx</p>
                        <p>采购合同xxx 名称:xx 付款0% 2018/2/10 发票号码:xxx</p>
                        <p>采购合同xxx 名称:xx 付款30% 2018/2/10 发票号码:xxx</p>
                    </div>
                </div>
                <mu-button style="height: 32px;" slot="action" flat color="primary">增加</mu-button>
            </mu-expansion-panel>

            <mu-expansion-panel>
                <div slot="header">生产进度</div>
                <div>
                    <p>最近要做的内容</p>
                    <p>项目甘特图(含计划时候和实际时间对比,跳转到新页面</p>
                    <mu-button color="primary" @click="$router.push('Schedule')">
                        项目甘特图
                    </mu-button>
                </div>
            </mu-expansion-panel>

            <mu-expansion-panel>
                <div slot="header">发货进度</div>
                <div>

                    this iis

                </div>
                <!-- <mu-button style="height: 32px;" slot="action" flat>后退</mu-button>
                <mu-button style="height: 32px;" slot="action" flat color="primary">完成</mu-button> -->
            </mu-expansion-panel>
            <mu-button color="primary">
                完整项目报表
            </mu-button>
        </section>
        <aside v-if="rightsideshow">
            <mu-button icon color="red" @click="rightsideshow=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            this is asd
        </aside>

    </article>


</template>
<script>
    export default {


        data() {
            return {
                // rightsideshow: true,
                // items: [{
                //         name: "空白",
                //         icon: "./blank.png",
                //         desc: "",
                //         path: "CreateProject/ProjectAtt"
                //     },
                //     {
                //         name: "模板",
                //         icon: "./template.png",
                //         desc: "",
                //         path: "CreateCode"
                //     },
                //     {
                //         name: "导入",
                //         icon: "./import.png",
                //         desc: "",
                //         path: "CreateProdattrib"
                //     },
                //     {
                //         name: "同步",
                //         icon: "./sync.png",
                //         desc: "",
                //         path: ""
                //     },
                // ],
                // templatelists: ["211212", "43434434", "43344343"]
            }
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