<template>


    <body>
        <topheader />

        <div class="pagecontentclass">
            <nav>
                <NavLeft />
            </nav>

            <transition name="fade-transform" mode="out-in">
                <router-view></router-view>
            </transition>

        </div>

    </body>
</template>


<script>
    import topheader from "@/components/topheader.vue";
    import NavLeft from "./Sidebar.vue";


    export default {
        data() {
            return {

            }

        },
        components: {
            topheader,
            NavLeft

        },
    };
</script>