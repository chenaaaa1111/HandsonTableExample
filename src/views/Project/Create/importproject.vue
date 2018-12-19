<template>
    <main>
        <article>

            <section>
                <uploadfirst />
                <mu-button to="importresult" color="primary">打开此上传</mu-button>
                <mu-menu placement="bottom-end" :open.sync="editopen">
                    <mu-button flat color="primary">
                        类型
                        <mu-icon right value="arrow_drop_down"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button v-for="(item,index) in editcolumntitle" :key="index" @click="edititem(index)">
                            <mu-list-item-title>{{item}}</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>
            </section>
            <aside>
                帮助和建议
            </aside>

        </article>
    </main>
</template>
<script>
    import uploadfirst from '@/components/uploadfiles/uploadfirst.vue';
    export default {
        components: {
            uploadfirst,
        },
        name: "",
        data() {
            return {
                editcolumntitle: ['类型1', '类型2', '类型3', '类型4'],
            }
        }
    };
</script>