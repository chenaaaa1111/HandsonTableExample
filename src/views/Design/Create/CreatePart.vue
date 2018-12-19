<template>
  <main>
    <header>
      <ptoolbar />
    </header>
    <article>
      <div class="mygrid">
        <div class="mygridcol-1">

          <h2 style="text-align:left">新建</h2>
        </div>
        <div class="mygridcol-4" v-for="item in newitems" :key="item.id" style="text-align:center">

          <mu-button flat color="primary" :href="item.path" style=" height:90px;line-height: 90px;min-width: 90px;width:90px;">
            <mu-icon color="gray" size=80 :value="':iconfont '+item.icon"></mu-icon>
            <!-- @click.native="$router.push(item.path)" -->

            <!-- <img height="110px" width="110px" :src="item.icon"> -->

          </mu-button>

          <mu-tooltip :content="item.desc">
            <p>{{item.name}}</p>
          </mu-tooltip>
        </div>
        <div class="mygridcol-1">
          <h2 style="text-align:left;margin-top:20px">导入</h2>
        </div>
        <div class="mygridcol-4" v-for="item in importitems" :key="item.id" style="text-align:center">
          <mu-button flat color="primary" v-bind:href="item.path" style=" height:90px;line-height: 90px;min-width: 90px;width:90px;">
            <mu-icon color="gray" size=80 :value="item.icon"></mu-icon>
          </mu-button>
          <p>{{item.name}}</p>
        </div>
        <div class="mygridcol-1">
          <h2 style="text-align:left;margin-top:20px">自动创建BOM</h2>
        </div>
        <div class="mygridcol-4" v-for="item in autobom" :key="item.id" style="text-align:center">
          <mu-button flat color="primary" v-bind:href="item.path" style=" height:90px;line-height: 90px;min-width: 90px;width:90px;">
            <mu-icon color="gray" size=80 :value="item.icon"></mu-icon>
          </mu-button>
          <p>{{item.name}}</p>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
  import ptoolbar from "./CreatePartbar.vue";

  // import './Design.css'
  export default {
    components: {
      ptoolbar,
    },
    data() {
      return {
        newitems: [{
            name: "产品",
            icon: "icon-tongyong",
            desc: "公司的设计产",
            path: "BlankPart"
          },
          {
            name: "图/文",
            icon: ":iconfont icon-tuzhi111",
            desc: "this is documents",
            path: "document"
          },
          {
            name: "原材料",
            icon: "icon-icon_yuancailiaoguanli",
            desc: "raw",
            path: "Blankpart/getraw"
          },
          {
            name: "引用",
            icon: "icon-yuancailiaoruku",
            desc: "create from exsited part",
            path: "ImportProd"
          },
        ],
        importitems: [{
            name: "整套设备",
            icon: ":iconfont icon-duogangchaiyouji",
            desc: "",
            path: "uppartslist"
          },

          {
            name: "标准件",
            icon: ":iconfont icon-biaozhunjianmro",
            desc: "",
            path: "uppartslist"
          },
          {
            name: "图纸",
            icon: ":iconfont icon-tuzhi111",
            desc: "",
            path: "uploaddrawing"
          },

        ],
        autobom: [{
            name: "油缸",
            icon: ":iconfont icon-qigang",
            desc: "",
            path: "autoBOM"
          },
          {
            name: "敬请期待",
            icon: "more_horiz",
            desc: "",
            path: "BlankPart"
          },



        ],

      };
    }

  };
</script>
<style scoped>
  /* .mu-flat-button {
    height: 90px;
    line-height: 90px;
    min-width: 10px;
    font-size: 14px;
  } */


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
    margin-top: 1em;
    flex: 0 1 15%;
  }
</style>