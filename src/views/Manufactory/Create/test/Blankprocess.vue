<template>
  <div>
    <header class="headtop">
      <div class="headtoprow2">
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
            <mu-tab v-show="attrib" @click="changetab('attrib')">属性</mu-tab>
            <mu-tab v-show="drawings" @click="changetab('drawings')">图纸</mu-tab>
            <mu-tab v-show="search" @click="changetab('search')">搜索</mu-tab>
            <mu-tab v-show="material" @click="changetab('material')">材质</mu-tab>
            <mu-tab v-show="code" @click="changetab('code')">编码</mu-tab>
            <mu-tab v-show="mantan" @click="changetab('mantan')">维保</mu-tab>
            <mu-tab v-show="archive" @click="changetab('archive')">档案</mu-tab>

          </mu-tabs>
        </div>
        <div class="right">
          <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
            <mu-icon value="help_outline"></mu-icon>
          </mu-button>
          <mu-button flat>复制并新建</mu-button>

          <mu-button flat style="margin-right:-25px;width:85px;" color="primary">保存</mu-button>
          <mu-menu placement="bottom-end" :open.sync="open">
            <mu-button flat style="width:25px;font-size:10px;min-width: 10px;" color="primary">
              <mu-icon left value="keyboard_arrow_down" style="width:15px;font-size:10px"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-list-item button @click="savetolib">
                <mu-list-item-title>保存到库</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>


          <mu-dialog title="选择保存位置" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
            :open.sync="openScroll" scrollable>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when
            no
            apps are running.
            <mu-button slot="actions" flat @click="closelibDialog">取消</mu-button>
            <mu-button slot="actions" flat color="primary" @click="closelibDialog">保存</mu-button>
          </mu-dialog>

          <mu-dialog title="您正在离开此页面,请保存" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
            :open.sync="openAlert">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when
            no
            apps are running.
            <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
            <mu-button slot="actions" flat color="primary" @click="saveAlertDialog">保存</mu-button>
          </mu-dialog>
        </div>
      </div>
    </header>
    <article>

      <mu-slide-left-transition>
        <component :is=" currentTab " @adddrawing="getdrawing" @showpartcodelist="coderesult" @showrelationpartlist="getrelation"
          @showmaterial="getmaterial"></component>
      </mu-slide-left-transition>

    </article>

  </div>
</template>
<script>
  import CreateProdattrib from "./attribute"; //设计属性
  import CreateCode from "./ApplyCode"; //申请编码
  import ImportDraw from "./ImportDraw"; //插入图纸
  import ImportProd from "./ImportProd"; //引用存在的零件
  import materialmenu from "./materialmenu"; //指定材质
  import archive from "./archive"; //指定材质
  // import './Design.css'
  export default {

    components: {
      CreateProdattrib,
      CreateCode,
      ImportDraw,
      ImportProd,
      materialmenu,
      archive,

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
        openAlert: false,
        openScroll: false,
        open: false,
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
            this.active = 0;
            break;
          case 'drawings':
            this.currentTab = ImportDraw; // tab 为当前触发标签页的组件名
            this.active = 1;
            break;
          case 'search':
            this.currentTab = CreateCode;
            this.active = 2;
            break;
          case 'material':
            this.currentTab = materialmenu;
            this.active = 3;
            break;
          case 'code':
            this.currentTab = CreateCode;
            this.active = 4;
            break;
          case 'mantan':
            this.currentTab = CreateCode;
            this.active = 5;
            break;
          case 'archive':
            this.currentTab = archive;
            this.active = 6;
            break;
          default:
            break;
        }
      },

      closebtn: function () {
        this.openAlert = true; // tab 为当前触发标签页的组件名
      },
      savetolib() {
        this.openScroll = true;
      },
      closelibDialog() {
        this.openScroll = false;
      },
      closeAlertDialog() {
        this.openAlert = false;
      },
      saveAlertDialog() {
        this.openAlert = false;
        this.$router.go(-1)
      },
      // drawingsTab: function (tab) {
      //   this.currentTab = ImportDraw; // tab 为当前触发标签页的组件名
      // },
      getdrawing(text) {

        this.currentTab = ImportDraw;
        this.drawings = true;
        this.attrib = true;
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