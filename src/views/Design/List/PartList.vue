<template>
  <main>
    <header class="headtoprow2">
      <div class="left">
        <mu-button color="primary" @click="addbtn">
          <mu-icon value="add"></mu-icon>新建
        </mu-button>
        <mu-breadcrumbs divider="—">
          <mu-icon value="chevron_right" slot="divider"></mu-icon>
          <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>
      </div>

      <div class="right">
        <mu-button v-if="selectitem" icon color="primary" @click="isedit=true">
          <mu-icon value="playlist_add"></mu-icon>
        </mu-button>

        <mu-menu v-if="selectitem" placement="bottom-end" :open.sync="editopen">
          <mu-button flat color="primary">编辑
            <mu-icon right value="arrow_drop_down"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button v-for="(item,index) in editcolumntitle" :key="index" @click="edititem(index)">
              <mu-list-item-title>{{item}}</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
        <!-- 发布和变更 -->
        <mu-menu v-if="selectitem" placement="bottom-end" :open.sync="applyopen">
          <mu-button flat color="primary">审批
            <mu-icon right value="arrow_drop_down"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button v-for="(item,index) in actionlist" :key="index" @click="applyitem(index)">
              <mu-list-item-title>{{item}}</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>

        <mu-button icon color="primary">
          <mu-icon value="refresh"></mu-icon>
        </mu-button>

        <mu-button icon color="primary" @click="filtitems.isfilter=true">
          <mu-icon value="filter_list"></mu-icon>
        </mu-button>
        <mu-button icon color="primary" @click="togglefullscreen">
          <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
          <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>
        </mu-button>
        <!-- 视图 -->
        <mu-menu placement="bottom-end" :open.sync="viewopen">
          <mu-button flat color="primary">
            <mu-icon vertical-align="bottom" :value="viewtype"></mu-icon>视图
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button :ripple="true" @click="toggleview('view_headline')">
              <mu-list-item-action>
                <mu-icon value="view_headline"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>列表</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="true" @click="toggleview('view_stream')">
              <mu-list-item-action>
                <mu-icon value="view_stream"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>带形</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="true" @click="toggleview('view_module')">
              <mu-list-item-action>
                <mu-icon value="view_module"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>网格</mu-list-item-title>
            </mu-list-item>

            <mu-divider></mu-divider>
            <mu-sub-header>左右边栏显示</mu-sub-header>
            <mu-list-item button :ripple="false" @click="shownav">
              <mu-list-item-title>左侧</mu-list-item-title>
              <mu-list-item-action>
                <mu-switch v-model="nav" readonly></mu-switch>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false" @click="ads = !ads">
              <mu-list-item-title>右侧</mu-list-item-title>
              <mu-list-item-action>
                <mu-switch v-model="ads" readonly></mu-switch>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
        </mu-menu>
        <mu-menu placement="bottom-end" :open.sync="moreopen">
          <mu-button icon>
            <mu-icon vertical-align="bottom" value="more_vert"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button @click="toview('subtype')">
              <mu-list-item-title>导入Excel</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="toview('subtype')">
              <mu-list-item-title>创建分组</mu-list-item-title>
            </mu-list-item>
            <mu-list-item v-if="selectitem" button @click="toview('output')">
              <mu-list-item-title>导出Excel</mu-list-item-title>
            </mu-list-item>
            <mu-list-item v-if="selectitem" button @click="toview('delete')">
              <mu-list-item-title>删除</mu-list-item-title>
            </mu-list-item>
            <mu-list-item v-if="selectitem" button @click="toview('public')">
              <mu-list-item-title>发布</mu-list-item-title>
            </mu-list-item>
            <mu-list-item v-if="selectitem" button @click="toview('print')">
              <mu-list-item-title>打印</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="toview('help')">
              <mu-list-item-title>帮助</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </div>
      <!-- 编辑列 -->
      <div v-if="selectitem" class="headtoprow1">
        <div>
          <div v-if="type">
            <mu-select label="类型" v-model="type">
              <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
            </mu-select>
            <mu-select label="子类型" v-model="subtype">
              <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
            </mu-select>
            <mu-switch v-model="weldtrue" label="焊接件"></mu-switch>
            <mu-switch v-model="maintaintrue" label="维保"></mu-switch>
            <mu-switch v-model="backuptrue" label="备件"></mu-switch>
            <mu-switch v-model="rawtrue" label="原材料"></mu-switch>
          </div>
          <mu-text-field v-if="qty" icon=" " type="number" v-model="setqty" label="数量" :suffix="unit" label-float
            :action-icon="'arrow_drop_down'" :action-click="selectunit"></mu-text-field>
          <mu-text-field v-if="gb" icon=" " placeholder="请输入国标"></mu-text-field>
          <mu-text-field v-if="material" icon=" " placeholder="请输入材料或品牌" :action-icon="'more_vert'" :action-click="selectcate"></mu-text-field>
          <mu-text-field v-if="drawing" icon=" " placeholder="请输入图纸"></mu-text-field>
        </div>
        <mu-flex class="flex-wrapper" justify-content="center">
          <mu-button v-if="editsave" icon color="primary">
            <mu-icon value="save"></mu-icon>
          </mu-button>
          <mu-button v-if="editsave" icon color="primary" @click="colseedit">
            <mu-icon value="close"></mu-icon>
          </mu-button>
        </mu-flex>
      </div>
      <!-- 发布 -->
      <div v-if="version.public" class="headtoprow1">
        <mu-text-field icon=" " label="内容概要" type="number" v-model="version.publiccontent" label-float></mu-text-field>
        <mu-flex class="flex-wrapper" justify-content="center">
          <mu-button v-if="version.public" icon color="primary">
            <mu-icon value="save"></mu-icon>
          </mu-button>
          <mu-button v-if="version.public" icon color="primary" @click="colseedit">
            <mu-icon value="close"></mu-icon>
          </mu-button>
        </mu-flex>
      </div>
      <!-- 变更 -->
      <div v-if="version.update" class="headtoprow1">
        <mu-select label="变更影响" placeholder="类型" v-model="version.updateeffort">
          <mu-option v-for="option in filtitems.parttypes" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-text-field icon=" " label="变更原因" v-model="version.updatereason" label-float></mu-text-field>
        <mu-text-field icon="keyboard_arrow_right" label="变更内容" v-model="version.updatecontent" label-float></mu-text-field>
        <mu-flex class="flex-wrapper" justify-content="center">
          <mu-button v-if="version.update" icon color="primary">
            <mu-icon value="save"></mu-icon>
          </mu-button>
          <mu-button v-if="version.update" icon color="primary" @click="colseedit">
            <mu-icon value="close"></mu-icon>
          </mu-button>
        </mu-flex>
      </div>
      <!-- 过滤 -->
      <mu-paper :z-depth="1" v-if="filtitems.isfilter" class="headtoprow1">
        <div>
          <!-- <mu-text-field full-width v-model="keyword" placeholder="输入关键字" :action-icon="'search'"
                        :action-click="search" style="padding-left:20px;margin-right:-60px;padding-right:60px"></mu-text-field>
                    <mu-button icon color="primary" @click="filtitems.openpastedalog=!filtitems.openpastedalog">
                        <mu-icon value="content_paste"></mu-icon>
          </mu-button>-->
          <mu-text-field full-width v-model="filtitems.keyword" placeholder="输入关键字" :action-icon="'content_paste'"
            :action-click="pastedalog" style="padding-left:20px;margin-right:-60px;padding-right:60px"></mu-text-field>
          <mu-button icon color="primary" @click="searchword">
            <mu-icon value="search"></mu-icon>
          </mu-button>
        </div>
        <div>
          <mu-date-input icon="date_range" v-model="filtitems.starttime" label="创建起始时间" label-float landscape></mu-date-input>
          <mu-date-input icon="keyboard_arrow_right" v-model="filtitems.endtime" label="创建终止时间" label-float landscape></mu-date-input>
          <mu-text-field icon=" " label="起始数量" type="number" v-model="filtitems.startqty" label-float></mu-text-field>
          <mu-text-field icon="keyboard_arrow_right" label="终止数量" type="number" v-model="filtitems.endqty" label-float></mu-text-field>
        </div>
        <mu-select label="类型" placeholder="类型" v-model="filtitems.parttype" multiple>
          <mu-option v-for="option in filtitems.parttypes" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-select label="设计人" multiple v-model="filtitems.value1">
          <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-select label="品牌/材质" multiple v-model="filtitems.value2">
          <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-select label="标签" multiple v-model="filtitems.value4">
          <div v-if="labelid.type=='design'" v-for="labelid in productLabels" :key="labelid">
            <mu-option v-for="option in labelid.subtype" :key="option" :label="option.text" :value="option"></mu-option>
          </div>
        </mu-select>
        <div>
          <mu-checkbox v-model="filtitems.checkbox1" value="eat" label="含图纸"></mu-checkbox>
          <mu-checkbox v-model="filtitems.checkbox2" value="sleep" label="已发布"></mu-checkbox>
          <mu-checkbox v-model="filtitems.checkbox3" value="eat" label="参考图"></mu-checkbox>
          <mu-checkbox v-model="filtitems.checkbox4" value="sleep" label="工作图"></mu-checkbox>
          <mu-checkbox v-model="filtitems.checkbox5" value="run" label="工艺图"></mu-checkbox>
          <mu-checkbox v-model="filtitems.checkbox6" value="movie" label="装配图"></mu-checkbox>
        </div>
        <div>
          <mu-select label="类型" v-model="type">
            <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
          </mu-select>
          <mu-select label="子类型" v-model="subtype">
            <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
          </mu-select>
          <mu-switch v-model="weldtrue" label="焊接件"></mu-switch>
          <mu-switch v-model="maintaintrue" label="维保"></mu-switch>
          <mu-switch v-model="backuptrue" label="备件"></mu-switch>
          <mu-switch v-model="rawtrue" label="原材料"></mu-switch>
        </div>
        <mu-button full-width @click="filtitems.isfilter=!filtitems.isfilter">隐藏</mu-button>
        <mu-button full-width>展开</mu-button>

        <mu-dialog title="多条件搜索" width="360" scrollable :open.sync="filtitems.openpastedalog">
          <mu-text-field v-model="filtitems.multikeyword" placeholder="只查询零件号,每行作为一个关键字" multi-line :rows="10"
            :rows-max="10"></mu-text-field>
          <mu-button slot="actions" flat color="primary" @click="closeunitDialog">剪切板</mu-button>
          <mu-button slot="actions" color="primary" @click="closeunitDialog">搜索</mu-button>
        </mu-dialog>
      </mu-paper>
    </header>
    <mu-dialog title="选择单位" width="360" scrollable :open.sync="openunitdalog">
      <mu-list>
        <mu-list-item :key="option" v-for="option in qtyunitList">
          <mu-list-item-content>
            <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
    </mu-dialog>

    <drawingselectdialog ref="drawingselectdialog" />
    <applyDialog ref="apply" />
    <mu-paper :z-depth="1" class="mygrid">
      <div class="mygridcol-4" v-for="item in 4" :key="item.temID">
        <mu-button flat color="gray" @click="enterProject">
          <!-- @click.native="$router.push(item.path)" -->
          <mu-icon left color="gray" value="folder"></mu-icon>组{{item}}
        </mu-button>
      </div>
      <mu-button flat color="primary" @click="enterProject">
        <!-- @click.native="$router.push(item.path)" -->
        <mu-icon left color="primary" value="create_new_folder"></mu-icon>新建
      </mu-button>
    </mu-paper>
    <tablecomponent :is="currenttable"></tablecomponent>
  </main>
</template>
<script>
  const suppliers = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  import list from "./List.vue";
  // import ribbon from "./Ribbon.vue";
  // import thumb from "./Thumb.vue";
  import drawingselectdialog from "@/components/drawingselectdialog.vue";
  import applyDialog from "@/components/approve/applyDialog.vue";
  import {
    mapGetters
  } from "vuex";
  export default {
    components: {
      list,

      drawingselectdialog,
      applyDialog
    },
    data() {
      return {
        editsave: false,
        editopen: false,
        // pastedalogopen: false,
        ads: true,
        nav: true,
        isedit: false,
        viewopen: false,
        moreopen: false,
        applyopen: false,
        fullscreen: true,
        openunitdalog: false,
        viewtype: "view_headline",
        editcolumntitle: ["类型", "数量", "标准", "材质/品牌", "图纸"],
        actionlist: ["审批", "发布", "变更"],
        selectitem: false,
        currenttable: "list",
        type: false,
        qty: false,
        setqty: 1,
        unit: "件",
        drawing: false,
        version: {
          public: false,
          publiccontent: "",
          update: false,
          updateeffort: "",
          updatereason: "",
          updatecontent: ""
        },
        edititems: {
          editopen: false,
          editsave: false,
          columnlist: ["类型", "数量", "标准", "材质/品牌", "图纸"],
          ID1: {
            name: "设备/供应方",
            show: false,
            value: "",
            tip: "",
            values: [...suppliers]
          },
          ID2: {
            name: "负责人",
            show: false,
            value: "",
            tip: "",
            values: [...suppliers]
          },
          ID3: {
            name: "技术文件",
            show: false,
            value: "",
            tip: "",
            values: [...suppliers]
          },
          ID4: {
            name: "场地",
            show: false,
            value: "",
            tip: "",
            values: [...suppliers]
          }
        },
        filtitems: {
          isfilter: false,
          keyword: "",
          multikeyword: [],
          openpastedalog: false,
          starttime: "",
          endtime: "",
          startqty: 1,
          endqty: 1,

          value3: 0,
          value1: [],
          value2: [],
          value4: [],

          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
          checkbox5: false,
          checkbox6: false,
          parttype: [],
          parttypes: ["设计件", "标准件", "通用件"]
        },

        options: [
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4",
          "Option 5",
          "Option 6",
          "Option 7",
          "Option 8",
          "Option 9",
          "Option 10"
        ],
        gb: false,
        material: false,
        items: [{
            text: "项目",
            disabled: false
          },
          {
            text: "Link 1",
            disabled: false
          },
          {
            text: "Link 2",
            disabled: true
          }
        ]
      };
    },
    methods: {
      shownav() {
        this.$parent.show = !this.$parent.show;
        this.nav = !this.nav;

      },
      pastedalog() {
        this.filtitems.openpastedalog = true;
      },
      searchword() {},
      searchmultiword() {},
      selectunit() {
        // this.showunit = true;

        this.openunitdalog = true;
      },
      closeunitDialog() {
        this.openunitdalog = false;
      },
      toggleview(pviewtype) {
        switch (pviewtype) {
          case "view_headline":
            this.currenttable = list;
            this.viewopen = false;
            this.viewtype = "view_headline";
            break;
          case "view_stream":
            this.currenttable = ribbon;
            this.viewopen = false;
            this.viewtype = "view_stream";
            break;
          default:
            this.currenttable = thumb;
            this.viewopen = false;
            this.viewtype = "view_module";
        }
      },
      addbtn() {
        this.$router.push({
          path: "/Design/CreatePart"
        });
      },

      closebtn() {
        this.$router.push("/");
      },
      togglefullscreen() {
        this.fullscreen = !this.fullscreen;
        this.$parent.show = !this.$parent.show;
        this.nav = !this.nav;
      },
      // toggleview(pviewtype) {
      //     this.viewtype = pviewtype;
      //     this.$emit('changetable', pviewtype);

      // },
      toview(pviewtype) {
        // this.$emit('changetable', pviewtype);
        this.moreopen = false;
      },
      edititem(index) {
        switch (index) {
          case 0:
            this.type = true;
            this.editopen = false;
            this.editsave = true;
            break;
          case 1:
            this.qty = true;
            this.editopen = false;
            this.editsave = true;
            break;
          case 2:
            this.gb = true;
            this.editopen = false;
            this.editsave = true;
            break;
          case 3:
            this.material = true;
            this.editopen = false;
            this.editsave = true;
            break;
          case 4:
            this.$refs.drawingselectdialog.opendrawingdalog = true;
            this.editopen = false;
            this.editsave = false;
            break;
          default:
            break;
        }
      },
      colseedit() {
        this.type = false;
        this.qty = false;
        this.gb = false;
        this.material = false;
        this.editsave = false;
      },
      applyitem(index) {
        switch (index) {
          case 0:

            // this.$refs.apply.apply = true;
            this.$refs.apply.applydialog = true;
            this.applyopen = false;
            break;
          case 1:
            this.version.public = true;
            this.applyopen = false;
            break;
          case 2:
            this.version.update = true;
            this.applyopen = false;
            break;
          default:
            break;
        }
      }
    },
    computed: {
      // ...mapState({
      //     units: state => state.g
      // }),
      // ...mapGetters({
      //   units: "unit.qtyunitList"
      // })
      ...mapGetters(["qtyunitList", "productLabels"])
    }
  };
</script>
<style scoped>
  .mu-menu {
    vertical-align: initial;
  }

  .mu-ripple-wrapper {
    position: inherit;
  }

  .test {
    border-radius: 2px;
    background-color: #fff;
    -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    -o-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
    /* box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12) box-shadow: 0 7px 8px -4px rgba(0, 0, 0, .2), 0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12) */
  }

  .mygrid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;

  }

  .mygridcol-1 {
    flex: 1 1 100%;
  }

  .mygridcol-2 {
    flex: 1 1 50%;
  }

  .mygridcol-3 {
    flex: 1 1 33.33%;
  }

  .mygridcol-4 {

    flex: 0 1 15%;
  }
</style>