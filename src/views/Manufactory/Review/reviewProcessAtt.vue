<template>
    <main>
        <header class="headtop">
            <div class="headtoprow2">
                <div class="left">
                    <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                        <mu-tab @click="changetab('attrib')">工艺图</mu-tab>
                        <mu-tab @click="changetab('drawings')">零件图</mu-tab>
                    </mu-tabs>
                </div>
                <!-- add toolbar -->
                <div class="right">
                    <mu-button icon color="primary" @click="togglefullscreen">
                        <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
                        <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>

                    </mu-button>
                    <mu-button flat color="primary" @click="israw=true">
                        <mu-icon value="keyboard_arrow_left"></mu-icon>上一步
                    </mu-button>
                    <mu-button flat color="primary" @click="israw=true">下一步
                        <mu-icon value="keyboard_arrow_right"></mu-icon>
                    </mu-button>
                </div>
            </div>
        </header>
        <article>
            <section style="padding:0px">
                <div>
                    <mu-text-field v-model="name" placeholder="工序编码" disabled solo style="margin-left:15px"></mu-text-field>
                    <mu-text-field prefix="*" v-model="name" placeholder="工序名称" style="min-width:10px;width:240px;margin-left:15px"></mu-text-field>
                    <mu-text-field v-model="name" placeholder="数量" prefix="*" style="min-width:10px;width:80px" type="number"></mu-text-field>
                    <mu-select v-model="qtytype" style="min-width:10px;width:70px;">
                        <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                </div>
                <img style="height:600px;width:900px" :src="carouselImg1">
                <!-- <mu-carousel>
                    <mu-carousel-item>
                        <img :src="carouselImg1">
                    </mu-carousel-item>
        </mu-carousel>-->
            </section>
            <aside class="mygrid">
                <div class="depthshadow">
                    <div>
                        <mu-text-field prefix="*" v-model="name" label="工种" :action-icon="'more_vert'" :action-click="selectprocesscate"
                            style="min-width:10px;width:90px;margin-left:15px;"></mu-text-field>
                        <mu-auto-complete :data="cutmethod" label="设备" :action-icon="'more_vert'" :action-click="showdevices"
                            :max-search-results="5" v-model="deviceselected" open-on-focus style="min-width:10px;width:150px"></mu-auto-complete>
                    </div>
                    <div>
                        <mu-text-field v-model="name" label="成本" prefix="￥" icon :action-icon="'more_vert'"
                            :action-click="selectcostway" style="min-width:10px;width:110px;margin-left:15px;" type="number"></mu-text-field>
                        <!-- <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:50px" type="number"></mu-text-field>
                        <mu-select v-model="qtytype" style="min-width:10px;width:70px;">
                            <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
                        </mu-select> -->
                    </div>
                    <div>
                        <mu-text-field solo multi-line :rows="3" :rows-max="6" v-model="name" placeholder="工艺内容"
                            :action-icon="'expand_more'" :action-click="opendetail" style="min-width:10px;width:200px;margin-left:15px;"></mu-text-field>
                    </div>

                    <div v-if="showdetail">
                        <!-- 展开的内容 -->
                        <mu-text-field v-model="name" label="截面/规格" icon :action-icon="'more_vert'" :action-click="selectrawcate"
                            style="min-width:10px;width:150px;margin-left:15px;"></mu-text-field>
                        <mu-text-field v-model="name" placeholder="长/宽" style="min-width:10px;width:160px;margin-left:15px"
                            suffix="mm"></mu-text-field>
                        <mu-text-field v-model="name" placeholder="单边余量" style="min-width:10px;width:160px;margin-left:15px"
                            suffix="mm"></mu-text-field>
                        <mu-button flat @click="adddrawing">
                            <mu-icon style="margin-left:15px;" value="attach_file"></mu-icon>图纸
                        </mu-button>
                    </div>
                </div>
                <!-- <mu-select label="生产批量" v-model="qtytype" style="min-width:10px;width:160px;margin-left:15px;">
            <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
                    <mu-text-field v-model="name" label="数量" style="min-width:10px;width:120px" type='number' suffix="小批"
        :action-icon="'arrow_drop_down'" :action-click="chooserqtytype"></mu-text-field>-->
                <div class="depthshadow">
                    <div>
                        <mu-select label="刀具" v-model="tool" style="min-width:10px;width:160px;margin-left:15px;">
                            <mu-option v-for="item in tools" :key="item" :label="item" :value="item"></mu-option>
                        </mu-select>
                        <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:80px" type="number"></mu-text-field>
                    </div>
                    <div>
                        <mu-select label="辅料" v-model="auxtool" style="min-width:10px;width:160px;margin-left:15px;">
                            <mu-option v-for="option in auxtools" :key="option" :label="option" :value="option"></mu-option>
                        </mu-select>
                        <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:80px" type="number"></mu-text-field>
                    </div>
                </div>

                <div class="depthshadow">
                    <mu-text-field v-model="name" label="前置工序" :action-icon="'search'" style="min-width:10px;width:150px;margin-left:15px;"></mu-text-field>
                    <mu-date-input v-model="startdate" label="计划开始时间" label-float style="min-width:10px;width:150px;margin-left:15px;"></mu-date-input>
                    <mu-date-input v-model="enddate" label="计划完成时间" label-float icon="keyboard_arrow_right" style="min-width:10px;width:150px;margin-left:15px;"></mu-date-input>
                </div>
                <!-- <rawcate ref="rawcate" /> -->
                <costcate ref="costcate" />
                <drawingselectdialog ref="drawingselectdialog" />
                <processnavTable ref="processnavTable" />
            </aside>
        </article>
    </main>
</template>

<script>
    // import rawcate from './RAW/RAWDialog';
    import carouselImg1 from "@/assets/drawing.png";
    import costcate from "@/components/cost/selectDialog";
    import processnavTable from "@/components/process/processelectdialog";
    import rawsize from "@/components/raw/rawcatetable";
    import drawingselectdialog from "@/components/drawingselectdialog";
    export default {
        components: {
            // rawcate,
            costcate,
            rawsize,
            drawingselectdialog,
            processnavTable
        },
        data() {
            return {
                active: 0,
                qtytype: "单件",
                showdetail: false,
                qtytypes: ["单件", "小批", "大批"],
                tool: "高速钢",
                tools: ["激光", "高速钢", "成形刀", "合金刀"],
                auxtool: "",
                auxtools: ["焊条", "冷却液"],
                cutmethod: ["火焰切割机", "激光", "等离子", "锯床", "线切割", "水刀"],
                showdevice: false,
                showdevicetable: false,
                selectdevices: [],
                deviceselected: "",
                carouselImg1,
                fullscreen: true,
                startdate: "",
                enddate: "",
                actualstartdate: "",
                actualenddate: "",
                purchaseyes: false
            };
        },

        // methods: {
        //     btnclik: function () {
        //         this.$route.push({});
        //     }
        // }
        methods: {
            togglefullscreen() {
                this.fullscreen = !this.fullscreen;
                this.$parent.show = !this.$parent.show;
                this.nav = !this.nav;
            },
            selectcostway() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = true;
            },
            closeselectcostwayDialog() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = false;
            },

            selectcostway() {
                // this.rightsideshow = true;
                this.$refs.costcate.openselectcostwaydalog = true;
            },
            showdevices() {
                this.showdevice = true;
            },
            selectrawcate() {
                this.$refs.rawcate.openrawcatedialog = true;
            },
            selectprocesscate() {
                this.$refs.processnavTable.openprocessgdialog = true;
            },
            selectrawsize() {
                this.showrawsize = true;
            },
            opendetail() {
                this.showdetail = true;
            },
            adddrawing() {
                this.$refs.drawingselectdialog.opendrawingdalog = true;
            }
        }
    };
</script>
<style scoped>
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
        display: flex;
        justify-content: space-between;
    }

    .mygridcol-3 {
        flex: 1 1 33.33%;
    }

    .mygridcol-4 {
        margin: 10px;
        flex: 0 1 10%;
    }

    .drawing {
        display: flex;
        justify-content: space-between;
    }

    .drawingtext {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .list {
        display: flex;
        flex-direction: column;
    }

    .depthshadow {
        -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
            0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 1px 3px 0 rgba(0, 0, 0, 0.12);
        margin-bottom: 10px;
    }
</style>