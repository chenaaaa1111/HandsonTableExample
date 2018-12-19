<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
            </div>
            <div class="right">
                <mu-button color="primary" @click="importproject">
                    <mu-icon left value="arrow_downward"></mu-icon>导入
                </mu-button>
                <mu-button icon color="primary" @click="showrightside=!showrightside">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
            </div>
        </header>

        <article>
            <div class="mygrid">
                <div class="mygridcol-1">
                    <h2 style="text-align:left">新建</h2>
                </div>

                <div class="mygridcol-4" v-for="item in projecttemplates" :key="item.temID" style="text-align:center">
                    <mu-button flat color="primary" @click="enterProject" style=" height: 90px;line-height: 90px;min-width: 90px;">
                        <!-- @click.native="$router.push(item.path)" -->
                        <mu-icon color="gray" size=80 :value="item.icon"></mu-icon>
                    </mu-button>
                    <p>{{item.temName}}</p>
                </div>
            </div>
            <aside v-if="showrightside" class="mu-elevation-1">

                ffssfsfdks
            </aside>
        </article>
    </main>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {

        data() {
            return {
                showrightside: false,

            }
        },
        computed: { ...mapGetters(['projecttemplates'])
        },
        methods: {
            importproject() {
                this.$router.push('importproject');
            },
            enterProject() {
                this.$router.push({
                    path: 'BlankProject',
                    // query: {
                    //     temID: 'tem001'
                    // }
                });
            }
            // this.$router.push({ name: 'user', params: { userId: 123 }})
        }
    };
</script>
<style scoped>
    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: 95%;
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
        margin-top: 2em;
        flex: 0 1 25%;
    }

    nav {
        display: none;
    }
</style>