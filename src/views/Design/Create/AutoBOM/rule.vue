<template>

    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                添加条件
            </div>
            <div class="right">
            </div>
        </header>
        <article>
            <section>
                <mu-expansion-panel>
                    <div class="mygrid" slot="header">类型一</div>
                    <div class="mygrid">
                        <div class="mygridcol-1" v-for="item in items" :key="item.id">
                            <mu-button flat color="primary" v-bind:href="item.path">
                                <!-- @click.native="$router.push(item.path)" -->
                                <img height="110px" width="110px" :src="item.icon">
                            </mu-button>
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                    <mu-button style="height: 32px;" slot="action" flat color="primary">前进</mu-button>
                </mu-expansion-panel>

                <mu-expansion-panel>
                    <div class="mygrid" slot="header">类型2</div>
                    <div class="mygrid">
                        <div class="mygridcol-1" v-for="item in items" :key="item.id">
                            <mu-button flat color="primary" v-bind:href="item.path">
                                <img height="110px" width="110px" :src="item.icon">
                            </mu-button>
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                    <mu-button style="height: 32px;" slot="action" flat>后退</mu-button>
                    <mu-button style="height: 32px;" slot="action" flat color="primary">前进</mu-button>
                </mu-expansion-panel>

                <mu-expansion-panel>
                    <div class="mygrid" slot="header">类型3</div>
                    <div class="mygrid">
                        <div class="mygridcol-1" v-for="item in items" :key="item.id">
                            <mu-button flat color="primary" v-bind:href="item.path">
                                <!-- @click.native="$router.push(item.path)" -->
                                <img height="110px" width="110px" :src="item.icon">
                            </mu-button>
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                    <mu-button style="height: 32px;" slot="action" flat>后退</mu-button>
                    <mu-button style="height: 32px;" slot="action" flat color="primary">完成</mu-button>
                </mu-expansion-panel>
            </section>
            <aside v-if="helppage" class="centersmidright">
                <mu-button class="mygridcol-3" icon color="primary" @click="closehelp">
                    <mu-icon value="close"></mu-icon>
                </mu-button>

                <span>这是帮助区域或辅助文件</span>
            </aside>
        </article>
    </main>
</template>
<script>
    export default {
        name: "",
        data() {
            return {}
        }
    };
</script>