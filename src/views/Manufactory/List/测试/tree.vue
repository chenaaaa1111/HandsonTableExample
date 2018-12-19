<script>
    import data from './data.js'
    export default {
        data() {
            return {
                data,
                childItem: ""
            }
        },
        render(createElement) {
            const items = this.data.map(item => this.createItem(createElement, item))
            return createElement('mu-list',
                items)
        },
        methods: {
            // 创建子组件
            createItem(createElement, item, slot = 'default') {
                //创建子组件
                const children = item.children ? item.children.map(childItem => this.createItem(createElement,
                    childItem, 'nested')) : []
                // 插入图标组件 
                children.push(createElement('mu-icon', {
                    slot: 'left',
                    props: {
                        value: item.icon
                    },
                }))
                return createElement('mu-item', {
                    slot: 'nested',
                    props: {
                        title: childItem.title
                    },
                    on: { // 如果有事件绑定可以写在这里
                    }
                }, children)
            }
        }
    }
</script>