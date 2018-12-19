<template>

    <body>
        <header>
            <sheader />
        </header>
        <aside>
            <snav v-if="shownav" @togglenav="switchnav" />
            <snavmini v-if="shownavmini" @togglenavmini="switchnavmini" />
        </aside>
        <main>

            <router-view></router-view>

        </main>
    </body>
</template>
<script>
    import sheader from "./SearchHeader.vue";
    import snav from "./SearchNav.vue";
    import snavmini from "./SearchNavmini.vue";

    export default {
        data() {
            return {
                shownav: true,
                shownavmini: false,

            };
        },
        components: {
            sheader,
            snav,
        },
        methods: {
            switchnav: function (toggle) {
                this.shownav = toggle;
            },
        },
    };
</script>