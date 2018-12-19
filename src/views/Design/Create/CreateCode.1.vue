<template>
    <div class="centersmid">
        <div class="centersmidleft">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">选择类型</div>

                <mu-select label="类型" v-model="type">
                    <mu-option v-for="item in types" :key="item" :label="类型" :value="item"></mu-option>
                </mu-select>
                <mu-select label="子类型" v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="子类型" :value="subtypeitem"></mu-option>
                </mu-select>
                <mu-button slot="action" flat>Cancel</mu-button>
                <mu-button slot="action" flat color="primary">Save</mu-button>
            </mu-expansion-panel>
        </div>
        <div v-if="helppage" class="centersmidright">
            <mu-button class="mygridcol-3" icon color="primary" @click="closehelp">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            <span>这是帮助区域或辅助文件</span>
        </div>
    </div>



</template>
<script>
    const projectmembers = [];
    const projecttypes = ['Apple', 'Blood Orange', 'Cantaloupe', ];
    const projectpics = ['Apple', 'Blood Orange', 'Cantaloupe', ];
    export default {
        name: "",
        data() {
            return {
                helppage: false,
                helpbutton: true,
                projectno: "",
                projectname: "",
                projecttypes,
                projecttype: "",
                projectsubtype: "",
                projectstartday: "",
                projectendday: "",
                projectpics,
                projectpic: "",
                projectstation: "",
                projectcomment: "",
                projectcustomer: "",
                projectmembers: ['Apple', 'Blood Orange', 'Cantaloupe', ],
                mutivalue: [],
                projectattachfile: "",
                projectlifttime: "",
                projectenable: true,
            }
        },
        methods: {
            closehelp() {
                this.helppage = false;
                this.helpbutton = true;
            },
            showhelp() {
                this.helppage = true;
                this.helpbutton = false;
            },
        }
    };
</script>
<style lang="less" scoped>
    .mu-text-field-input {
        width: 320px;
    }

    .mytitle {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: space-between;
        padding: 10px;
    }

    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: flex-start;
        padding-left: 20px;
    }

    .mygridcol-1 {
        flex: 0 0 83%;
    }

    .mygridcol-2 {
        flex: 0 0 40%;
        margin-right: 30px; // padding-left: 25px;
    }

    .mygridcol-3 {
        flex: 0 0 40%;

    }

    .mygridcol-4 {
        flex: 0 1 20%;
    }
</style>