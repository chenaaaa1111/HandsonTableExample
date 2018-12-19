<template>

    <body>
        <topheader />
        <div class="pagecontent">
            <router-view v-if="show" name="navside"></router-view>
            <transition name="fade-transform" mode="out-in">
                <router-view name="content"></router-view>
            </transition>
        </div>
    </body>
</template>
<script>
    import topheader from "@/components/topheader.vue";
    import '@/assets/iconfont/iconfont.css'

    export default {
        data() {
            return {
                show: true
                // pagecontentclass: 'pagecontentnorm',
            }

        },
        components: {
            topheader,
            //   NavLeft

        },
    };
</script>