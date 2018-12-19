<template>
    <article>
        <section class="list">

            <div>
                <mu-auto-complete icon=" " :data="projecttypes" placeholder="项目类型" :max-search-results="5" v-model="projecttype"
                    open-on-focus :action-icon="'more_vert'" :action-click="searchcode"></mu-auto-complete>
                <mu-text-field icon=" " v-model="projectno" placeholder="项目编号" :action-icon="'search'" :action-click="searchcode"></mu-text-field>

            </div>
            <mu-flex>
                <mu-text-field icon=" " v-model="projectname" placeholder="项目名称"></mu-text-field>
                <mu-text-field icon=" " v-model="projectcustomer" placeholder="客户名称" :action-icon="'more_vert'"
                    :action-click="searchcode"></mu-text-field>
            </mu-flex>
            <div>
                <mu-date-input icon="date_range" v-model="projectstartday" label="开始时间" label-float landscape></mu-date-input>
                <mu-date-input icon="keyboard_arrow_right" v-model="projectendday" label="完成时间" label-float landscape></mu-date-input>
                <mu-button flat color="blue" to="/Schedule/ProjectWBS">详细计划</mu-button>
            </div>
            <div>
                <mu-icon style="margin:15px" value="people"> </mu-icon>
                <mu-chip style="margin:8px" color="chip" @delete="remove(index)" delete>负责人</mu-chip>
                <mu-select icon=" " label="项目成员" multiple separator="/" v-model="projectmembers" style="width:700px">
                    <mu-option v-for="staff in staffs" :key="staff" :label="staff" :value="staff"></mu-option>
                </mu-select>
            </div>
            <mu-text-field icon="comment" v-model="projectcomment" placeholder="备注" full-width></mu-text-field>
            <div>
                <mu-icon style="margin:15px" value="attach_file"> </mu-icon>
                <mu-chip style="margin:8px" v-for="chip in projectpic" :key="chip" color="chip" @delete="remove(index)"
                    delete>{{chip}}</mu-chip>
                <mu-button icon>
                    <mu-icon value="add"></mu-icon>
                </mu-button>
            </div>
            <div>
                <mu-icon style="margin:15px" value="people"> </mu-icon>
                启用分类:
                <mu-switch v-model="backupenable"></mu-switch>
                <mu-select icon=" " label="分类" multiple separator="/" v-model="devicesubtype" style="width:700px">
                    <mu-option v-for="subtypes in devicesubtypes" :key="subtypes" :label="subtypes" :value="subtypes"></mu-option>
                </mu-select>
            </div>
        </section>
        <aside v-if="showstafflist">
            <mu-sub-header>人员表</mu-sub-header>
            <mu-list>
                <mu-list-item button :ripple="false" v-for="person in staffs" :key="person">
                    <mu-list-item-title>{{person}}</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </aside>
        <aside v-if="showtemplist">
            <mu-sub-header>模板</mu-sub-header>
            <mu-list>
                <mu-list-item button :ripple="false" v-if="temp.temID!='tem000'" v-for="temp in projecttemplates" :key="temp.temID">
                    <mu-list-item-title>{{temp.temName}}</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </aside>
        <aside v-if="showhelp">
            <mu-button icon color="red" @click="showhelp=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>
            <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
            <!-- <vue-q-art :config="config"></vue-q-art> -->
            <VueQArt :config="config" />

            该处显示帮助文件
        </aside>
    </article>

</template>
<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        props: {
            showstafflist: false,
            showtemplist: false,
            showhelp: false
        },

        computed: {
            //这里的三点叫做 : 扩展运算符
            ...mapGetters([
                "projecttypes",
                "projecttemplates",
                "staffs",
                "devicesubtypes"
            ])
        },

        //   computed:mapState({     //步骤二,对象方式
        //    count:state => state.count
        //   })
        //  },
        // computed: {
        // templates() {
        //     return this.$store.state.projecttemplates;
        // }}
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
        },

        components: {
            VueQArt
        },
        data() {
            return {
                navshow: true,
                config: {
                    value: "httpdsdsdsm",
                    imagePath: "./blank.png",
                    filter: "color"
                    // size: 200
                },
                projectno: "",
                projectname: "",
                projecttype: "",
                projectsubtype: "",
                projectstartday: "",
                projectendday: "",
                projectpic: ["Apple", "Blood Orange", "Cantaloupe"],
                projectstation: "",
                projectcomment: "",
                projectcustomer: "",
                projectmembers: [],
                projectattachfiles: [],
                projectlifttime: "",
                projectenable: true,
                downloadButton: true,
                backupenable: false,
                devicesubtype: []
            };
        }
    };
</script>
<style lang="less" scoped>
    .list {
        display: flex;
        flex-direction: column;
    }
</style>