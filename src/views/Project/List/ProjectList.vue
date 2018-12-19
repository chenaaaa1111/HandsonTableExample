<template>
  <article>
    <section>
      <mu-data-table :loading="false" :auto-expand="false" :expand-row-index="rowIndex" :columns="columns" :sort.sync="sort"
        @sort-change="handleSortChange" @row-click="selrow" :data="list.slice(0, 15)" selectable select-all
        :selects.sync="selects" checkbox>

        <template slot="expand" slot-scope="prop">
          <div style="padding: 24px;">
            <p>销售合同{{prop.row.name}}</p>
            <p>采购合同xxx 名称:xx 付款60% 2018/2/10 发票号码:xxx <mu-button flat color="primary" @click="viewpurchaselistatt()">详情</mu-button>
            </p>
            <p>采购询价xxx 名称:xx 付款0% 2018/2/10 发票号码:xxx</p>
            <p>采购合同xxx 名称:xx 付款30% 2018/2/10 发票号码:xxx</p>
            <mu-button icon color="primary" @click="createlist()">
              <mu-icon value="add"></mu-icon>
            </mu-button>
          </div>
        </template>

        <template slot-scope="scope">
          <mu-button icon color="primary" @click="extendtable(scope.row)">
            <mu-icon :value="iconimg"></mu-icon>
          </mu-button>

          <td class="is-right">{{scope.row.sortno}}</td>
          <td class="is-right">{{scope.row.projectcode}}</td>
          <td class="is-left">{{scope.row.projecttype}}</td>
          <td class="is-left">{{scope.row.projectname}}</td>
          <td class="is-right">{{scope.row.projectstartday}}</td>
          <td class="is-left">{{scope.row.projectcustomer}}</td>
          <td class="is-right">{{scope.row.projectendday}}</td>

          <td class="icongroup">

            <mu-button icon color="primary" @click="viewproject()">
              <mu-icon value="info"></mu-icon>
            </mu-button>
            <mu-button icon color="primary" @click="review()">
              <mu-icon value="timeline"></mu-icon>
            </mu-button>
            <mu-menu placement="bottom-end" :moremenuopen.sync="openmenu">
              <mu-button icon>
                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
              </mu-button>
              <mu-list slot="content">
                <mu-list-item button @click="$router.push({path:('Design')})">
                  <mu-list-item-title>设计</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button @click="$router.push({path:('Manufactory')})">
                  <mu-list-item-title>生产</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button @click="$router.push({path:('maintain')})">
                  <mu-list-item-title>维保</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-title>报表</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button>
                  <mu-list-item-title>删除</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-menu>

          </td>
        </template>
      </mu-data-table>
      <mu-flex justify-content="end">
        <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
    </section>
    <div v-if="rightsideshow" class="rightside">
      <mu-button icon color="red" @click="rightsideshow=false">
        <mu-icon value="close"></mu-icon>
      </mu-button>
      外来项目增加个网络图标
      该表格需要嵌套功能,展开行功能
    </div>

  </article>

</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        selects: [],
        rowIndex: -1,
        current: 1,
        iconimg: "keyboard_arrow_down",
        openmenu: true,
        rightsideshow: false,
        extendopen: false,
        // auto-expand:false,
        sort: {
          name: "",
          order: "asc"
        },
        columns: [{
            title: "",
            width: 30,
            name: "name"
          },

          {
            title: "序号",
            width: 80,
            align: "center",
            name: "sortno",
            sortable: true
          },
          {
            title: "项目编码",
            name: "projectcode",

            align: "right",
            sortable: true
          },
          {
            title: "类型",
            name: "projecttype",
            width: 126,
            align: "left",
            sortable: true
          },
          {
            title: "项目名称",
            name: "projectname",

            align: "left",
            sortable: true
          },
          {
            title: "创建时间",
            name: "projectstartday",
            width: 126,
            align: "center",
            sortable: true
          },
          {
            title: "客户",
            name: "projectcustomer",

            align: "left",
            sortable: true
          },

          {
            title: "交货时间",
            name: "projectendday",
            width: 126,
            align: "center",
            sortable: true
          },
          {
            title: "操作",
            name: "",

            align: "center"
          }
        ],
        list: [{
            sortno: "01",
            projectcode: "3561",
            projectname: "Froze Yogurt",
            projecttype: "共享",
            projectstartday: "2017/09/01",
            projectendday: "2019/10/01",
            projectcustomer: "xxx工作组"
          },
          {
            sortno: "02",
            projectcode: "3565",
            projectname: "Froze Yogurt",
            projecttype: "共享",
            projectstartday: "2017/09/01",
            projectendday: "2019/10/01",
            projectcustomer: "网友"
          },
          {
            sortno: "03",
            projectcode: "3567",
            projectname: "Froze Yogurt",
            projecttype: "白车身",
            projectstartday: "2017/09/01",
            projectendday: "2019/10/01",
            projectcustomer: "江淮"
          },
          {
            sortno: "04",
            projectcode: "3579",
            projectname: "Froze Yogurt",
            projecttype: "造型线",
            projectstartday: "2017/09/01",
            projectendday: "2019/10/01",
            projectcustomer: "上汽"
          },
          {
            sortno: "05",
            projectcode: "3563",
            projectname: "Froze Yogurt",
            projecttype: "砂处理",
            projectstartday: "2017/09/01",
            projectendday: "2019/10/01",
            projectcustomer: "特斯拉"
          }
        ]
      };
    },
    methods: {
      handleSortChange({
        name,
        order
      }) {
        this.list = this.list.sort(
          (a, b) => (order === "asc" ? a[name] - b[name] : b[name] - a[name])
        );
      },
      review() {
        this.$router.push({
          path: "review"
          // query: {
          //     id: thisId,
          //     option: ""
          // }
        });
      },
      extendtable(row) {
        // this.auto-expand=true;
        this.extendopen = !this.extendopen;
      },
      selrow(index, row, e) {
        if (this.extendopen) {
          this.rowIndex = -1
          this.iconimg = "navigate_next"
        } else {
          this.rowIndex = index
          this.iconimg = "keyboard_arrow_down"
        }

      },
      viewproject() {
        this.$router.push({
          path: "BlankProject"
          // query: {
          //     id: thisId,
          //     option: ""
          // }
        });
      },
      viewpurchaselistatt() {
        this.$router.push({
          path: "purchaseoverview"
          // query: {
          //     id: thisId,
          //     option: ""
          // }
        });
      },
      createlist() {
        this.$router.push({
          path: "CreateList"
          // query: {
          //     id: thisId,
          //     option: ""
          // }
        });
      },
      getprojectlist() {
        axios.get("/api/project.json").then(
          res => {
            this.list = res.data;
          },
          err => {
            console.log(err);
          }
        );
      }
      // getprojectlist() {
      //     axios.get("/api/project.json")
      //         .then(this.prjlist)
      // },
      // prjlist(res) {
      //   let res = res.data;
      //   if (res.status && res.data) {
      //     this.list = res.data;
      //   }
      // }
    },
    mounted() {
      this.getprojectlist();
    }
  };
</script>
<style lang="less" scoped>
  .mu-table {
    width: 1100px;
  }

  .icongroup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    align-content: center;
  }

  .mu-table-body {
    width: auto;
    max-width: 83vw;
  }
</style>