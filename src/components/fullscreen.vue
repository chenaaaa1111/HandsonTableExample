<template>
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
        <mu-appbar color="primary" title="Fullscreen Diaolog">
            <mu-button slot="left" icon @click="openFullscreen=false">
                <mu-icon value="print"></mu-icon>
            </mu-button>
            <mu-button slot="left" icon @click="openFullscreen=false">
                <mu-icon value="keyboard_arrow_up"></mu-icon>
            </mu-button>
            <mu-button slot="left" icon @click="openFullscreen=false">
                <mu-icon value="keyboard_arrow_down"></mu-icon>
            </mu-button>
            <mu-button slot="right" flat @click="openFullscreen=false">
                保存
            </mu-button>
            <mu-button slot="left" icon @click="openFullscreen=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>
        </mu-appbar>
        <div class="pagecontent" style="padding: 24px;">
            <nav class="test">
                <mu-bottom-nav :value.sync="active" class="test">
                    <mu-bottom-nav-item title="下料" icon="tab"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="工序" icon="favorite"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="核价" icon="location_on"></mu-bottom-nav-item>

                </mu-bottom-nav>
                <div v-if="active===0">
                    左侧是竖向的tab或button group,可以最小化
                    下料
                </div>
                <div v-if="active===1">
                    工序
                </div>
                <div v-if="active===2">
                    核价
                </div>


            </nav>
            <main>
                <img src="@/assets/drawing.png" />
            </main>
        </div>
    </mu-dialog>
</template>
<script>
    export default {
        data() {
            return {
                openFullscreen: false,
                active: 0,
            };
        },
        methods: {

        }
    };
</script>
<style lang="less" scoped>
    .test {
        display: flex;
        flex-direction: column;
        width: 10px;
    }
</style>