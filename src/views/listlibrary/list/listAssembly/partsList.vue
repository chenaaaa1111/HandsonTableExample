<template>
    <article>
        <section style="padding:0px;">
            <!-- this is  -->
            <hot-table :settings="settings"></hot-table>
        </section>
        <!-- this is ads -->
        <aside v-if="rightsideshow">
            <mu-button icon color="red" @click="rightsideshow=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            <span>这是帮助区域或辅助文件</span>
        </aside>
    </article>
</template>

<script>
    import {
        HotTable
    } from '@handsontable/vue';

    export default {
        data: function () {
            return {
                settings: {
                    data: [
                        ["", "Ford", "Volvo", "Toyota", "Honda"],
                        ["2016", 10, 11, 12, 13],
                        ["2017", 20, 11, 14, 13],
                        ["2018", 30, 15, 12, 13]
                    ],
                    colHeaders: true,
                    rowHeaders: true,
                }
            };
        },
        components: {
            HotTable
        }
    }
</script>
<style lang="" scoped>

</style>