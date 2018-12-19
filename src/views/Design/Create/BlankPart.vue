<template>
  <main>
    <header class="headtoprow2">
      <div class="left">

        <!-- <mu-button icon v-if="attrib" @click="closebtn" color="secondary">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button> -->
        <!-- <mu-button flat style="background:#cfd8dc;" @click="$router.go(-2)" text-color="black">
            <mu-icon left value="list"></mu-icon>列表
          </mu-button> -->
        <mu-breadcrumbs divider="—">
          <mu-icon value="chevron_right" slot="divider"></mu-icon>
          <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>
        <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
          <mu-tab v-if="attrib" @click="changetab('attrib')">属性</mu-tab>
          <mu-tab v-if="drawings" @click="changetab('drawings')">图纸</mu-tab>
          <mu-tab v-if="search" @click="changetab('search')">搜索</mu-tab>
          <mu-tab v-if="material" @click="changetab('material')">材质</mu-tab>
          <mu-tab v-if="code" @click="changetab('code')">编码</mu-tab>
          <mu-tab v-if="mantan" @click="changetab('mantan')">维保</mu-tab>
          <mu-tab v-if="archive" @click="changetab('archive')">档案</mu-tab>
          <mu-tab v-if="rawcat" @click="changetab('rawcat')">规格</mu-tab>
        </mu-tabs>
      </div>
      <div class="right">
        <mu-tooltip content="基于模板新建">
          <mu-button icon @click="opentemplist">
            <mu-icon value="library_add"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip content="复制当前内容并新建">
          <mu-button icon>
            <mu-icon value="content_copy"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-button icon style="margin-right:-10px;" color="primary">
          <mu-icon value="save"></mu-icon>
        </mu-button>
        <mu-menu placement="bottom-end" :open.sync="opensaveto">
          <mu-button flat style="width:25px;font-size:10px;min-width: 10px;" color="primary">
            <mu-icon left value="keyboard_arrow_down" style="width:15px;font-size:10px"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button @click="savetolib">
              <mu-list-item-title>保存到库</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>

        <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
          <mu-icon value="help_outline"></mu-icon>
        </mu-button>
      </div>
      <saveto ref="savelocation" />
    </header>

    <component :is=" currentTab " @adddrawing="getdrawing" @showpartcodelist="coderesult" @showrelationpartlist="getrelation"
      @showmaterial="getmaterial" @showraw="getraw" :showhelp="rightsideshow" ref="att"></component>

  </main>
</template>
<script>
  import CreateProdattrib from "./attribute"; //设计属性
  import CreateCode from "./ApplyCode"; //申请编码
  import ImportDraw from "./ImportDraw"; //插入图纸
  import ImportProd from "./ImportProd"; //引用存在的零件
  import materialmenu from "./materialmenu"; //指定材质
  import Archive from "./archive"; //指定材质
  import rawcat from "@/components/rawcatenav"; //指定规格
  import saveto from "@/components/savelocation";
  // import './Design.css'
  export default {

    components: {
      CreateProdattrib,
      CreateCode,
      ImportDraw,
      ImportProd,
      materialmenu,
      archive,
      rawcat,
      saveto,
    },
    props: {

    },
    data() {
      return {
        currentTab: 'CreateProdattrib',
        active: 0,
        attrib: false,
        drawings: false,
        search: false,
        material: false,
        code: false,
        mantan: false,
        archive: false,
        rawcat: false,


        opensaveto: false,
        rightsideshow: true,
        items: [{
            text: '项目',
            disabled: false
          },
          {
            text: '...',
            disabled: false
          },
          {
            text: 'Link2',
            disabled: true
          }
        ]

      };

    },
    methods: {
      changetab(tab) {
        switch (tab) {
          case 'attrib':
            this.currentTab = CreateProdattrib; // tab 为当前触发标签页的组件名
            // this.active = 0;
            this.attrib = true;
            break;
          case 'drawings':
            this.currentTab = ImportDraw; // tab 为当前触发标签页的组件名
            // this.active = 1;
            this.drawings = true;
            break;
          case 'search':
            this.currentTab = CreateCode;
            // this.active = 2;
            this.search = true;
            break;
          case 'material':
            this.currentTab = materialmenu;
            // this.active = 3;
            this.material = true;
            break;
          case 'code':
            this.currentTab = CreateCode;
            // this.active = 4;
            this.code = true;
            break;
          case 'mantan':
            this.currentTab = CreateCode;
            // this.active = 5;
            this.mantan = true;
            break;
          case 'archive':
            this.currentTab = archive;
            // this.active = 6;
            this.archive = true;
            break;
          case 'rawcat':
            this.currentTab = rawcat;
            // this.active = 7;
            this.rawcat = true;
            break;
          default:
            break;
        }
      },
      opentemplist() {
        this.$refs.att.showtemplist = !this.$refs.att.showtemplist;
      },

      savetolib() {
        this.$refs.savelocation.showdialog = true;
      },


      // drawingsTab: function (tab) {
      //   this.currentTab = ImportDraw; // tab 为当前触发标签页的组件名
      // },


      getdrawing(text) {

        this.currentTab = ImportDraw;
        this.drawings = true;
        // this.attrib = true;
        this.active = 1;
      },

      coderesult(text) {
        this.currentTab = CreateCode;
        this.code = true;
        this.attrib = true;
        this.active = 2;
      },
      getrelation(text) {
        this.currentTab = CreateCode;
        this.code = true;
        this.attrib = true;
        this.active = 3;
      },
      getmaterial(text) {
        this.currentTab = materialmenu;
        this.material = true;
        this.attrib = true;
        this.active = 4;
      },

      getdcode(text) {

        this.currentTab = CreateCode;
        this.code = true;
        this.attrib = true;
        this.active = 5;
      },
      getraw(text) {
        this.currentTab = rawcat;
        this.rawcat = true;
        this.attrib = true;
        this.active = 7;
      },

    },
  };
</script>

<style lang="less" scoped>
  .mu-menu {
    vertical-align: initial;
  }

  .mu-ripple-wrapper {
    position: inherit;
  }

  .mu-tab-link-highlight {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0px;
    background-color: #2196f3;
  }

  .mu-tabs {
    /* 背景颜色 */
    background-color: transparent;
    /* 未激活字体颜色 */
    color: black;
    max-width: auto;
    height: 50px;
    width: 700px;

  }

  .mu-tab-active {
    color: #2196f3;
  }

  .mu-tab {
    max-width: 200px;
    background: transparent;
    transition: ease-in-out;
    font-size: 14;
    min-width: 100px;
  }

  .mu-raised-button,
  .mu-ripple-wrapper,
  .mu-button {
    // min-width: 10px;
    // width: 25px;
    // border-radius: 2px;
    line-height: 30px;
    // text-align: left;
  }
</style>