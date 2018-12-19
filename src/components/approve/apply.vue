<template>
  <div>
    <!-- <div class="pagecontent"> -->
    <!-- <aside>
        <mu-stepper :activeStep="0" :linear="false" orientation="vertical">
          <mu-step>
            <mu-step-label>审批人</mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label class="demo-step-label-warning">
              <mu-icon slot="icon" value="warning" color="red"></mu-icon>文件列表
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>状态</mu-step-label>
          </mu-step>
        </mu-stepper>
    </aside>-->
    <!-- 审批人 -->
    <!-- <main>
    <header>-->
    <mu-select v-model="applytype" full-width>
      <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="index"></mu-option>
    </mu-select>
    <!-- </header> -->
    <mu-subheader>最近的联系人</mu-subheader>
    <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
      <div class="griditem" v-for="item in 5" :key="item">
        <mu-avatar text-color="orange200" color="pink400">
          <mu-icon value="folder"></mu-icon>{{item}}
        </mu-avatar>
      </div>
    </div>


    <mu-divider></mu-divider>
    <mu-subheader>所有联系人</mu-subheader>
    <mu-bottom-nav :value.sync="active">
      <mu-bottom-nav-item title="人员" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="组" icon="favorite"></mu-bottom-nav-item>
    </mu-bottom-nav>

    <mu-list textline="two-line" v-if="active==0">
      <!-- <mu-sub-header inset>所有人员列表</mu-sub-header> -->
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="folder"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>张三</mu-list-item-title>
          <mu-list-item-sub-title>zhangsan@163.com</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="add"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="folder"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>李四</mu-list-item-title>
          <mu-list-item-sub-title>lisi@sohu.com</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-menu placement="bottom-end" :open.sync="moreopen">
            <mu-button icon>
              <mu-icon value="add"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-subheader>添加到</mu-subheader>
              <mu-list-item button @click="openAlertDialog">
                <mu-list-item-title>设计组</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button @click="isMBOM=true">
                <mu-list-item-title>工艺组</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button @click="openAlertDialog">
                <mu-list-item-title>项目组</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button @click="deletebtn">
                <mu-list-item-title>采购组</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>

    <mu-list v-if="active==1">
      <!-- <mu-sub-header inset>所有组列表</mu-sub-header> -->
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="folder"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>设计组</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="info"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action>
          <mu-avatar>
            <mu-icon value="folder"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>工艺组</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon>
            <mu-icon value="info"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>

      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action>
          <mu-avatar color="indigo">
            <mu-icon value="add"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>创建</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <!-- 审批对象列表 -->
    <mu-button flat @click="applyconfig">查看列表</mu-button>
    <table>
      <tr>
        <td>序号</td>
        <td>项目</td>
        <td>零件号.版本</td>
        <td>名称</td>
        <td>数量</td>
      </tr>
    </table>



  </div>
</template>

<script>
  export default {

    name: "",
    data() {
      return {
        apply: true,
        config: false,
        applydialog: false,
        configdialog: false,
        costway: 0,
        applytype: "选择审批模板",
        options: ["设计", "采购", "发货", ],
        active: 0
      };
    },
    methods: {
      closeDialog() {
        // this.rightsideshow = true;
        this.applydialog = false;
      },
      applyconfig() {
        this.applydialog = false;
        this.configdialog = true;

      }
    }
  };
</script>