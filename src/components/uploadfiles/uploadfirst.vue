<template>
    <article>
        <section>
            drag or button to upload files

            <!-- <mu-menu placement="bottom-end" :open.sync="listformatmore">
                <mu-button flat>选择清单格式
                    <mu-icon right vertical-align=bottom value="keyboard_arrow_down"></mu-icon>
                </mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>设备</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button to="Setting">
                        <mu-list-item-title>标准件</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>下载</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu> -->
        </section>
        <!-- <aside>
            帮助和建议
        </aside> -->
        <footer>
            帮助提示:
            文件的大小宜小于
            文件的格式支持

        </footer>
    </article>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                listformatmore: false,
            }
        }
    };
</script>