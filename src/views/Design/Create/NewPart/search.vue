<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon @click="$router.go(-1)" color="primary">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>

                <!-- <mu-tabs :value.sync="tab" inverse color="secondary" text-color="rgba(0, 0, 0, .54)">
                    <mu-tab @click="changetab('attrib')">属性</mu-tab>
                    <mu-tab @click="changetab('search')">搜索</mu-tab>

                </mu-tabs> -->
                <!-- <mu-button flat style="background:#cfd8dc;" @click="$router.go(-2)" text-color="black">
            <mu-icon left value="list"></mu-icon>列表
          </mu-button> -->

            </div>
            <div class="right">
                <mu-text-field v-model="partno" placeholder="物料号，零件号..." :action-icon="'search'" :action-click="searchcode"></mu-text-field>

                <mu-button flat color="primary" @click="$router.push('getcode')">
                    <mu-icon left value="add_circle_outline"></mu-icon> 创建新图号
                </mu-button>
                <mu-button flat color="primary" @click="$router.go(-1)">
                    <mu-icon left value="content_copy"></mu-icon> 全部引用
                </mu-button>
                <mu-button flat color="primary" @click="$router.go(-1)">
                    <mu-icon left value="search"></mu-icon> 查询库存
                </mu-button>
            </div>

        </header>
        <article>
            <section>
                <!-- <component :is=" currentTab " @adddrawing="getdrawing" @showpartcodelist="coderesult"
                    @showrelationpartlist="getrelation" @showmaterial="getmaterial" @showraw="getraw" :showhelp="rightsideshow"
                    ref="att"></component> -->
                <table border="1" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>序号</td>
                        <td>项目号</td>
                        <td>零件号.版本</td>
                        <td>名称</td>
                        <td>含子集</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>3500</td>
                        <td>1111.a</td>
                        <td>夹具</td>
                        <td>
                            <mu-checkbox v-model="includechild" value="movie"></mu-checkbox>
                        </td>
                        <td>
                            <div>
                                <mu-button flat color="primary" @click="$router.push('archive')">
                                    查看档案
                                </mu-button>
                                <mu-button flat color="primary">
                                    引用
                                </mu-button>
                                <mu-button flat color="primary">
                                    查询库存
                                </mu-button>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>
        </article>
    </main>
</template>
<script>
    import CreateProdattrib from "./attribute"; //设计属性
    import search from "./search"; //申请编码
    export default {
        name: "",
        components: {
            CreateProdattrib,
            search,

        },
        data() {
            return {
                includechild: false,
                active: 0,
                attrib: false,
                search: false,
            }
        },
        methods: {
            changetab(tab) {
                switch (tab) {
                    case 'attrib':
                        this.currentTab = CreateProdattrib; // tab 为当前触发标签页的组件名
                        // this.active = 0;
                        this.attrib = true;
                        break;
                    case 'search':
                        this.currentTab = search; // tab 为当前触发标签页的组件名
                        // this.active = 1;
                        this.search = true;
                        break;

                    default:
                        break;
                }
            },
        }
    };
</script>