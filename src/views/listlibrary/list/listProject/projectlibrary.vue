<template>
  <main>
    <header class="headtoprow2">
      <div class="left">
        <mu-button color="primary" @click="$router.push('createlist')">
          <mu-icon value="add"></mu-icon>新建
        </mu-button>
      </div>

      <div class="right">
        <!-- 视图 -->
        <mu-button icon color="primary">
          <mu-icon value="refresh"></mu-icon>
        </mu-button>

        <mu-button icon color="primary">
          <mu-icon value="filter_list"></mu-icon>
        </mu-button>
        <mu-button icon color="primary" @click="togglefullscreen">
          <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
          <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>
        </mu-button>
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
            <mu-list-item button :ripple="false">
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
              <mu-list-item-title>创建分组</mu-list-item-title>
            </mu-list-item>
            <mu-list-item v-if="selectitem" button @click="toview('output')">
              <mu-list-item-title>导出</mu-list-item-title>
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
    </header>
    <mu-paper :z-depth="1" class="mygrid">
      <div class="mygridcol-4" v-for="item in 4" :key="item.temID">
        <mu-button flat color="primary" @click="enterProject" style=" height: 90px;line-height: 90px;min-width: 90px;">
          <!-- @click.native="$router.push(item.path)" -->
          <mu-icon color="gray" size=80 value="folder"></mu-icon>
        </mu-button>
        <p>项目号{{item}}</p>
        <p>项目名称</p>
      </div>
      <mu-button flat color="primary" @click="enterProject" style=" height: 90px;line-height: 90px;min-width: 90px;">
        <!-- @click.native="$router.push(item.path)" -->
        <mu-icon color="primary" size=80 value="create_new_folder"></mu-icon>
      </mu-button>新建
    </mu-paper>
  </main>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "",
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

        selectitem: false,
        currenttable: "list",
      };
    },
    methods: {
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
      togglefullscreen() {
        this.fullscreen = !this.fullscreen;
        this.$parent.show = !this.$parent.show;
        this.nav = !this.nav;
      },
      toview(pviewtype) {
        // this.$emit('changetable', pviewtype);
        this.moreopen = false;
      },

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