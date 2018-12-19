<template>
  <main>
    <article class="mygrid">
      <div class="mygridcol-1">
        <h2 style="text-align:left">新建</h2>
        <mu-button flat color="primary" @click="showadd=true">
          <mu-icon value="add"></mu-icon>新建行
        </mu-button>
        <mu-button flat color="primary" @click="showadd=true">
          <mu-icon value="add"></mu-icon> 插入子件
        </mu-button>
        <mu-button flat color="primary" @click="deleteall">
          <mu-icon value="delete"></mu-icon> 清空
        </mu-button>
      </div>
      <div class="mygridcol-4" v-for="(titem,index) in table" :key="titem.id" style="text-align:center">

        <div class="mygridcol-5" v-for="ritem in titem.rows" :key="ritem.id">
          <p class="">{{index+1}}</p>
          <div class="mygridcol-6" v-for="item in ritem.colums" :key="item.id">
            <mu-button flat style="border: 1px solid #2196f3;height:40px;width:200px;line-height:120px;min-width:60px;"
              @mouseenter="enter" @mouseleave="leave">
              <h3>{{item.nodeno}}</h3>
              <p>{{item.name}}</p>
              <mu-checkbox v-if="show" v-model="selected"></mu-checkbox>
              <!-- <mu-button  icon color="red" @click="deleteitem">
                <mu-icon value="close"></mu-icon>
            </mu-button> -->
            </mu-button>
          </div>
          <mu-button icon color="primary" @click="showadd=true">
            <mu-icon value="add"></mu-icon>
          </mu-button>
        </div>
      </div>
      <div v-if="showadd">
        <mu-text-field label="前缀" v-model="codenode.prefix"></mu-text-field>
        <mu-text-field label="后缀" v-model="codenode.suffix"></mu-text-field><br />
        <mu-select label="间隔符" v-model="codenode.midfix" full-width>
          <mu-option v-for="option in midfixs" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-sub-header>类型</mu-sub-header>
        <mu-radio value="constant" label="固定值" v-model="codenode.type"></mu-radio>
        <mu-radio value="arrange" label="流水号" v-model="codenode.type"></mu-radio>



        <div v-if="codenode.type=='arrange'">
          <mu-select label="序列" v-model="codenode.chartype">
            <mu-option v-for="option in chartypes" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
          <mu-text-field label="启始值" v-model="codenode.startvalue"></mu-text-field>
          <mu-select label="计数器长度" v-model="codenode.charlength">
            <mu-option v-for="option in charlengths" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
          <mu-select label="步长" v-model="codenode.charstep">
            <mu-option v-for="option in charlengths" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
          <mu-checkbox label="递减" v-model="codenode.incres"> </mu-checkbox>
          <!-- <mu-text-field label="类型编码" v-model="codenode.nodeno"></mu-text-field>
                    <mu-text-field label="类型名称" v-model="codenode.name"></mu-text-field> -->
          <mu-text-field label="预览" v-model="codenode.description"></mu-text-field><br />
        </div>
        <div v-if="codenode.type=='constant'">
          <mu-text-field label="类型编码" v-model="codenode.nodeno"></mu-text-field>

          <mu-text-field label="类型名称" v-model="codenode.name"></mu-text-field>
        </div>

        <mu-button flat @click="save"> 保存</mu-button>
        <mu-button flat @click="showadd=false"> 取消</mu-button>
        <mu-button flat> 保存并创建同级</mu-button>
        <mu-button flat> 保存并创建下级</mu-button>
      </div>

      <!-- 创建编码
        导入时,针对标准件,自动编码为无序的编码
        在创建属性或分类时,改变其中的某一位值 -->
    </article>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        showadd: false,
        show: false,
        selected: false,
        midfixs: ["无", "空格", "-", "_", "/", ".", "+"],
        chartypes: ["数字", "大写字母", "小写字母"],
        charlengths: [
          "1位",
          "2位",
          "3位",
          "4位",
          "5位",
          "6位",
          "7位",
          "8位",
          "9位"
        ],
        codenode: {
          nodeno: "",
          name: "",
          prefix: "",
          suffix: "",
          midfix: "",
          description: "",
          type: "constant", //true为固定数值constant,false为可变arrange
          chartype: "", //
          startvalue: "",
          charlength: 4,
          charstep: 1,
          incres: true //true is 递增,
        },
        table: [{
            rows: [{
              colums: [{
                  nodeno: "A",
                  name: "项目",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                },
                {
                  nodeno: "流水号",
                  name: "6位",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                }
              ]
            }]
          }, //第一行
          {
            rows: [{
              colums: [{
                  nodeno: "B",
                  name: "专机",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                },
                {
                  nodeno: "01",
                  name: "夹具",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                },
                {
                  nodeno: "流水号",
                  name: "6位",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                }
              ]
            }]
          }, //第二行
          {
            rows: [{
              colums: [{
                  nodeno: "C",
                  name: "半成品",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                },
                {
                  nodeno: "厂标件",
                  name: "02",
                  prefix: "",
                  suffix: "",
                  midfix: "",
                  description: "项目",
                  type: "constant", //true为固定数值constant,false为可变arrange
                  chartype: "数字", //
                  startvalue: "1",
                  charlength: 9,
                  charstep: 1,
                  incres: true //true is 递增,
                }
              ]
            }]
          } //第三行
        ]
      };
    },
    methods: {
      deleteall() {
        this.table = [];
      }, //清空表格
      deleteitem() {
        this.table.rows.colums.splice(index, 1);
      },
      // pop() {
      //   this.items.pop();
      // },
      // shift() {
      //   this.items.shift();
      // },
      // unshift() {
      //   this.items.unshift(this.addValue);
      // },
      // splice() {
      //   this.items.splice(0, 1);
      // },
      // sort() {
      //   this.items.sort();
      // },
      // reverse() {
      //   this.items.reverse();
      // },

      save() {
        this.table.rows.colums.push({
          nodeno: this.codenode.nodeno,
          name: this.codenode.name,
          prefix: "",
          suffix: "",
          midfix: "",
          description: "",
          type: "constant", //true为固定数值constant,false为可变arrange
          chartype: "", //
          startvalue: "",
          charlength: 4,
          charstep: 1,
          incres: true
        });
      },
      enter: function () {
        this.show = true;
      },
      leave: function () {
        this.show = false;
      }
    }
  };
</script>
<style scoped>
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
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .mygridcol-5 {
    margin-right: 10px;
    flex: 0 1 15%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .mygridcol-6 {
    margin-right: 10px;
    flex: 0 1 15%;
  }
</style>