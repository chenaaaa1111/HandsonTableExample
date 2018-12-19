<template>
  <main>
    <header class="headtoprow2">

      <div class="left">
        <mu-button icon color="primary" @click="$router.go(-1)">
          <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
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
        <!-- <div v-if="addtoolbar"> -->
        <mu-button icon color="primary">
          <mu-icon value="playlist_add"></mu-icon>
        </mu-button>
        <mu-button flat>审核</mu-button>
        <mu-button flat>发布</mu-button>
        <mu-button icon color="primary">
          <mu-icon value="lock_open"></mu-icon>
        </mu-button>
        <mu-button icon color="primary">
          <mu-icon value="save"></mu-icon>
        </mu-button>
        <mu-menu placement="bottom-end" :open.sync="moreopen">
          <mu-button icon>
            <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button @click="toview('public')">
              <mu-list-item-title>添加到库</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="toview('print')">
              <mu-list-item-title>打印</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="rightsideshow=!rightsideshow">
              <mu-list-item-title>帮助</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="toview('delete')">
              <mu-list-item-title>删除</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </div>
    </header>

    <article>
      <section class="list">
        <div>
          <mu-text-field icon=":iconfont icon-xuhao" style="min-width:10px;width:100px" type='number' v-model="no"
            placeholder="序号"></mu-text-field>
          <mu-text-field icon=" " v-model="partno" prefix="*" placeholder="物料号，零件号..." :action-icon="'search'"
            :action-click="searchcode"></mu-text-field>
          <mu-text-field icon=" " style="min-width:10px;width:100px" v-model="version" placeholder="版本"></mu-text-field>
        </div>

        <div>
          <mu-text-field icon=" " v-model="name" placeholder="名称，描述..."></mu-text-field>
          <mu-text-field icon=" " type='number' v-model="setqty" label="数量" :suffix="unit" label-float :action-icon="'arrow_drop_down'"
            :action-click="selectunit"></mu-text-field>

        </div>
        <mu-text-field icon=" " v-if="stand" v-model="gb" prefix="GB/T-" placeholder="国标/规格"></mu-text-field>
        <div>
          <mu-auto-complete icon=" " :data="materials" placeholder="品牌/材质" :max-search-results="5" v-model="material"
            open-on-focus :action-icon="'more_vert'" :action-click="getmaterial"></mu-auto-complete>
          <mu-auto-complete icon=" " :data="materials" placeholder="材料" :max-search-results="5" v-model="material"
            open-on-focus :action-icon="'more_vert'" :action-click="getraw"></mu-auto-complete>
          <mu-text-field icon=" " type='number' v-model="setweight" label="重量" suffix="kg" label-float></mu-text-field>
        </div>

        <mu-auto-complete icon=" " :data="relations" prefix="关系" placeholder="和该零件有关系的..." :max-search-results="5"
          v-model="relation" :action-icon="'add'" :action-click="getrelation"></mu-auto-complete>

        <mu-divider></mu-divider>
        <mu-sub-header>自定义属性</mu-sub-header>

        <mu-text-field icon=" " v-model="size" label="长" type='number' suffix="mm" label-float></mu-text-field>



        <div>
          <mu-icon style="margin:15px" value="photo"> </mu-icon>
          <mu-chip style="margin:8px" v-for="chip in projectpic" :key="chip" color="chip" @delete="remove(index)"
            delete>{{chip}}</mu-chip>
          <mu-button flat style="margin-top:20px;" @click="getdrawing">
            <mu-icon left value="add"></mu-icon>
            图纸
          </mu-button>
        </div>
        <mu-expansion-panel :expand="true" @change="toggle('panel1')">
          <div slot="header">选择类型</div>
          <div class="mygrid">
            <mu-select label="类型" v-model="type">
              <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
            </mu-select>
            <mu-select label="子类型" v-model="subtype">
              <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
            </mu-select>

            <!-- <mu-radio :value="1" v-model="othertype" :label="1"></mu-radio>
                <mu-radio :value="2" v-model="othertype" :label="2"></mu-radio>
                <mu-radio :value="3" v-model="othertype" :label="3"></mu-radio> -->
            <mu-switch v-model="weldtrue" label="焊接件"></mu-switch>
            <mu-switch v-model="maintaintrue" label="维保"></mu-switch>
            <mu-switch v-model="backuptrue" label="备件"></mu-switch>
            <mu-switch v-model="rawtrue" label="原材料"></mu-switch>

          </div>
        </mu-expansion-panel>
      </section>
      <aside v-if="showtemplist">
        <mu-sub-header>模板</mu-sub-header>
        <mu-list>
          <mu-list-item button :ripple="false" v-for="temp in parttemplates" :key="temp">
            <mu-list-item-title>{{temp}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </aside>

      <aside v-if="showunit">
        <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-list>
          <mu-list-item :key="option" v-for="option in units">
            <mu-list-item-content>
              <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
      </aside>
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
      <mu-dialog title="选择单位" width="360" scrollable :open.sync="openunitdalog">
        <mu-list>
          <mu-list-item :key="option" v-for="option in units">
            <mu-list-item-content>
              <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat @click="closeunitDialog">管理</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
      </mu-dialog>

    </article>



  </main>
</template>
<script>
  import ReviewProdattrib from "../Create/NewPart/attribute"; //设计属性

  export default {

    components: {
      ReviewProdattrib,


    },
    props: {

    },
    data() {
      return {
        currentTab: 'ReviewProdattrib',
        active: 0,
        attrib: false,
        drawings: false,
        search: false,
        material: false,
        code: false,
        mantan: false,
        rightsideshow: true,

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
      getdrawing(text) {

        this.currentTab = ImportDraw;
        this.drawings = true;
        this.attrib = true;
        this.active = 1;
      },
      getdcode(text) {

        this.currentTab = CreateCode;
        this.code = true;
        this.attrib = true;
        this.active = 4;
      },
      newcode() {
        this.currentTab = 'CreateCode';
        this.code = true;
        this.attrib = true;
      },
    },
  };
</script>

<style lang="less" scoped>
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
    width: auto;

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
</style>