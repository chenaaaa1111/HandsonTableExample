<template>
    <div>
        <p>(You can double click on an item to turn it into a folder.)</p>
        <item :model="treeData">
        </item>

    </div>
</template>
<script>
    import item from './favitem.vue';
    // boot up the demo

    export default {
        // el: '#demo',
        name: "",
        data() {
            return {
                model: [],
                treeData: data,
                name: 'My Tree',
                children: [{
                        name: 'hello'
                    },
                    {
                        name: 'wat'
                    },
                    {
                        name: 'child folder',
                        children: [{
                                name: 'child folder',
                                children: [{
                                        name: 'hello'
                                    },
                                    {
                                        name: 'wat'
                                    }
                                ]
                            },
                            {
                                name: 'hello'
                            },
                            {
                                name: 'wat'
                            },
                            {
                                name: 'child folder',
                                children: [{
                                        name: 'hello'
                                    },
                                    {
                                        name: 'wat'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

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