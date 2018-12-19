<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon @click="$router.go(-1)" color="primary">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <!-- <mu-button flat style="background:#cfd8dc;" @click="$router.go(-2)" text-color="black">
            <mu-icon left value="list"></mu-icon>列表
          </mu-button> -->
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>

            </div>
            <div class="right">
            </div>
        </header>
        <article>
            <section class="list">

                历史档案
            </section>
        </article>
    </main>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 0,
            }
        }
    };
</script>
<style scoped>

</style>