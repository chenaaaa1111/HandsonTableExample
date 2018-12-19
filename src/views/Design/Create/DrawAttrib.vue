<template>
    <article>
        <section class="list">
            <div>
                <mu-text-field icon=":iconfont icon-xuhao" style="min-width:10px;width:100px" type='number' v-model="no"
                    placeholder="序号"></mu-text-field>
                <mu-text-field icon=" " v-model="doccode" prefix="*" placeholder="文档编号" :action-icon="'search'"
                    :action-click="codesearch"></mu-text-field>
                <mu-text-field icon=" " style="min-width:10px;width:100px" v-model="docversion" placeholder="版本"></mu-text-field>
            </div>

            <div>
                <mu-text-field icon=" " v-model="docname" placeholder="标题/图号"></mu-text-field>
                <mu-text-field icon=" " type='number' v-model="docscale" label="比例" label-float></mu-text-field>
                <mu-text-field icon=" " type='number' v-model="doctotalpages" label="页数" label-float></mu-text-field>
                <mu-text-field icon=" " v-model="docorigin" label="文档来源" label-float></mu-text-field>
                <mu-text-field icon=" " v-model="docformat" label="文件格式:软件名或后缀类型" label-float></mu-text-field>
            </div>

            <mu-text-field icon=" " v-model="doccreator" placeholder="设计人"></mu-text-field>

            <mu-divider></mu-divider>
            <mu-sub-header>自定义属性</mu-sub-header>

            <mu-text-field icon=" " v-model="size" placeholder="长..." type='number'></mu-text-field>

            <mu-expansion-panel :expand="true" @change="toggle('panel1')">
                <div slot="header">选择类型</div>
                <div class="mygrid">
                    docimg: "", // 效果图
                    docfrontview: "", // 主视图
                    docmainview: "", // 俯视图
                    docleftview: "", // 左侧视图
                    // 右侧视图
                    docsectionview: "", // 剖面图1
                    <mu-select label="类型" v-model="type">
                        <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
                    </mu-select>
                    <mu-select label="子类型" v-model="subtype">
                        <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                    </mu-select>

                </div>
            </mu-expansion-panel>

            <div>
                <mu-icon style="margin:15px" value="photo"> </mu-icon>
                <mu-chip style="margin:8px" v-for="chip in projectpic" :key="chip" color="chip" @delete="remove(index)"
                    delete>{{chip}}</mu-chip>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="add"></mu-icon>
                    图纸
                </mu-button>
            </div>

        </section>



        <aside v-if="showhelp">
            <mu-button icon color="red" @click="showhelp=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            该处显示帮助文件
            <mu-bottom-nav>
                <mu-bottom-nav-item title="帮助" icon="help"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="模板" icon="library_books"></mu-bottom-nav-item>

            </mu-bottom-nav>
        </aside>


    </article>
</template>

<script>
    const types = ["效果图", "主视图", "俯视图", "左侧视图", "右侧视图", "剖面图"];
    const subtypes = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];


    export default {
        components: {

        },
        props: {
            showhelp: true,

        },
        data() {
            return {

                helpbutton: true,
                rightsideshow: true,

                no: 1,
                type: "",
                subtype: "",
                types,
                subtypes,
                othertype: "",
                doccode: "",
                docversion: "",
                docname: "",
                docscale: 1,
                doctotalpages: 1,
                docorigin: "",
                docformat: "",


                drawings: true,
                search: true,
                material: "",
                materials,
                code: true,
                mantan: true,
                backup: false,
                archive: true,
                size: ""

                // normal: {
                //     value1: '',
                //     value2: '',
                //     value3: '',
                //     value4: 'Option 1',
                //     value5: 'Option 2'
                // }
            };
        },
        //   created: {},
        //   mounted: {

        //   },
        // this.attrib = '/CreateProd/' + '/CreateProdattrib';
        // beforeRouteUpdate(to, from, next) {
        //   this.detail = this.getPlayer(to.params.uid);
        //   this.profile = "/CreateProd/" + to.params.uid + "/profile";
        //   this.stats = "/CreateProd/" + to.params.uid + "/stats";
        //   next();
        // },
        methods: {

            showhelp() {
                this.helpbutton = false;
                this.helppage = true;
            },
            closehelp() {
                this.helpbutton = true;
                this.helppage = false;
            },
            codesearch() {
                this.$emit("showpartcodelist");
            },



            // addcodebtn() {
            //     this.$emit('addcode');
            // },
            // attribbtn: function(pname) {
            //   // this.$router.push();
            //   // this.$router.push({ path: `/player/${uid}/stats` });
            //   // this.$router.push({ name: 'CreateProdattrib', params: { uid: uid } });
            //   this.$router.push({ name: "CreateProdattrib" });
            // }

        }
    };
</script>
<style lang="less" scoped>
    .list {
        display: flex;
        flex-direction: column;

    }
</style>