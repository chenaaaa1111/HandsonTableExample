<template>
    <main>
        <header>

            <toolbar keep-alive @changetable="dochangetable" />
        </header>

        <tablecomponent :is="currenttable"></tablecomponent>

    </main>
</template>
<script>
    import toolbar from "./reviewlistbar.vue";
    import list from "./reviewlist.vue";
    export default {
        components: {
            toolbar,
            list,

        },
        data() {
            return {
                currenttable: "list",
            }
        },
        methods: {
            dochangetable(pviewtype) {

                switch (pviewtype) {
                    case "view_headline":
                        this.currenttable = list;
                        break;
                    case "view_stream":
                        this.currenttable = ribbon;
                        break;
                    default:
                        this.currenttable = thumb;
                }
            }
        }
    }
</script>