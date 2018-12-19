<template>

    <mu-paper class="headtop" color="white" style="margin-bottom:10px;">
        <div class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>

            </div>

            <div class="right">
                <mu-button icon color="primary">
                    <mu-icon value="refresh"></mu-icon>
                </mu-button>
                <mu-button flat color="primary" @click="isfilter=true">
                    <mu-icon left value="filter_list"></mu-icon>筛选
                </mu-button>
                <mu-button icon color="primary" @click="togglefullscreen">
                    <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
                    <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>

                </mu-button>


                <mu-menu placement="bottom-end" :open.sync="openmore">
                    <mu-button icon>
                        <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button>
                            <mu-list-item-title>导出</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>打印</mu-list-item-title>
                        </mu-list-item>

                    </mu-list>
                </mu-menu>
            </div>
        </div>

        <div class="headtoprow1" v-if="isfilter" style="width:100%; float:left;">
            <mu-button icon color="secondary">
                <mu-icon value="close"></mu-icon>
            </mu-button>
            <mu-text-field placeholder="Please input......"></mu-text-field>
        </div>
    </mu-paper>


</template>
<script>
    export default {

        data() {
            return {
                fullscreen: true,

                isfilter: false,


            };
        },
        methods: {
            togglefullscreen() {
                this.fullscreen = !this.fullscreen;
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
</style>