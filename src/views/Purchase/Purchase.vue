<template>

    <body>
        <topheader />
        <div class="pagecontent">
            <nav>
                <router-view name="navside"></router-view>
            </nav>

            <transition name="fade-transform" mode="out-in">
                <router-view name="content"></router-view>
            </transition>

        </div>
    </body>
</template>
<script>
    import topheader from "@/components/topheader.vue";
    //   import NavLeft from "./NavLeft.vue";

    export default {
        data() {
            return {

            }

        },
        components: {
            topheader,


        },
    };
</script>