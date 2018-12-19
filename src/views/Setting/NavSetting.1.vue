<template>
    <div>
        <p>(You can double click on an item to turn it into a folder.)</p>
        <li v-for="(item, index) of treeData" :key="index">
            <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
                {{ item.name }}
                <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <item class="item" v-for="(model, index) in item.children" :key="index" :model="model">
                </item>
                <li class="add" @click="addChild">+</li>
            </ul>
        </li>

    </div>
</template>
<script>
    // boot up the demo

    export default {
        // el: '#demo',
        name: "item",
        props: {
            model: Object
        },
        data: function () {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children &&
                    this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        }
    }
</script>
<style scoped>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }

    .item {
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }

    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>