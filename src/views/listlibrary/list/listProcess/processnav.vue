<template>
    <nav>
          <mu-bottom-nav :value.sync="active"> 
    <mu-bottom-nav-item title="最近" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="常规" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="自定义" icon="favorite"></mu-bottom-nav-item>    
  </mu-bottom-nav>
  <div  v-if="active === 0">
      最近
  </div>
  <div  v-if="active === 1">
        <mu-select label="类型" multiple separator="/" v-model="processshowlist" full-width>
            <!-- <mu-option v-for="processitem in processcatelists" :key="processitem" :label="processitem" :value="processitem"></mu-option> -->
            <mu-option v-for="processitem in processcate" :key="processitem" :label="processitem.type" :value="processitem"></mu-option>
        </mu-select>
        <mu-list toggle-nested v-for="item in processcate" :key="item">
            <mu-list-item button :ripple="false" nested :open="processgroupopen === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                <mu-list-item-action>
                    <mu-icon value="label"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{item.type}}</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action>
                <mu-list-item v-for="labelid in item.subtype" :key="labelid.id" button :ripple="false" slot="nested">
                    <mu-list-item-title>{{labelid.name}}</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-menu placement="bottom-end" :processgroupto.sync="processgroupto">
                            <mu-button icon>
                                <mu-icon value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>应用到选中内容</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>应用到本页</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>应用到本项目</mu-list-item-title>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item button>
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </mu-list-item-action>
                </mu-list-item>
                <!-- 新建按钮，使用mutation方法 -->
                <mu-list-item button @click="addprocess" slot="nested">
                    <mu-list-item-action>
                        <mu-icon value="add"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list-item>
        </mu-list>
  </div>
        <!-- 用户定义的组 -->
        <div  v-if="active === 2">
        <mu-list toggle-nested>
            <mu-list-item button :ripple="false" nested :open="usergroupopen === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
                <mu-list-item-action>
                    <mu-icon value="send"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>用户定义</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action>
                <mu-list-item button :ripple="false" slot="nested" v-for="(cusitem,index) in  userlists" :key="index">
                    <mu-list-item-title>{{cusitem}}</mu-list-item-title>
                    <mu-menu placement="bottom-end" :cusitemopen.sync="cusitemto">
                        <mu-button icon>
                            <mu-icon value="more_vert"></mu-icon>
                        </mu-button>
                        <mu-list slot="content">
                            <mu-list-item button>
                                <mu-list-item-title>应用到选中内容</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button>
                                <mu-list-item-title>应用到本页</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button>
                                <mu-list-item-title>应用到本项目</mu-list-item-title>
                            </mu-list-item>
                            <mu-divider></mu-divider>
                            <mu-list-item button>
                                <mu-list-item-title>删除</mu-list-item-title>
                            </mu-list-item>
                        </mu-list>
                    </mu-menu>
                </mu-list-item>
                <!-- 新建按钮，使用mutation方法 -->
                <mu-list-item button @click="addcusgroup" slot="nested">
                    <mu-list-item-action>
                        <mu-icon value="add"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list-item>
        </mu-list>
        </div>
    </nav>

</template>
<script>
import {
  mapState,
  mapGetters
  // mapMutations
} from "vuex";
export default {
  data() {
    return {
      processgroupopen: "label",
      usergroupopen: "send",
      processgroupto: false,
      cusitemto: false,
      processshowlist: [],
      active: 1
    };
  },

  computed: {
    ...mapState({
      //步骤二,对象方式
      processcate: state => state.process.processcate,
      userlists: state => state.process.userlists
    }),
    ...mapGetters(["processcatelist"])
  },
  methods: {
    addprocess() {
      //用mapmutation来替代
    },
    addcusgroup() {
      //用mapmutation来替代
    }
  }
};
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 200px;
  overflow: hidden;
}
</style>