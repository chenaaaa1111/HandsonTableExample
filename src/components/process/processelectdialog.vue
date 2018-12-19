<template>
    <mu-dialog title="工种" width="800" scrollable :open.sync="openprocessgdialog">
        <processnavTable />

        <mu-button slot="actions" flat color="primary" @click="closeprocessDialog">选择</mu-button>

    </mu-dialog>
</template>
<script>
    import processnavTable from '@/components/process/processnavTable';
    export default {
        components: {
            processnavTable
        },
        name: "",
        data() {
            return {

                openprocessgdialog: false,

            }
        },
        methods: {
            closeprocessDialog() {
                // this.showunit = true;

                this.openprocessgdialog = false;
            },
            show(index) {
                switch (index) {
                    case 1:
                        this.active = 1;


                        break;
                    case 2:
                        this.active = 2;
                        break;
                    case 3:
                        // this.$refs.drawingselectdialog.opendrawingdalog = true;
                        this.active = 3;
                        break;
                    default:
                        break;
                }

            }
        }
    };
</script>
<style scoped>
    .mu-dialog-body {
        padding: 0px 2px 2px;

    }

    .mu-appbar {
        height: 40px;
    }
</style>