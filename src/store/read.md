
最后将store实例挂载到main.js里面的vue上去就行了

import store from './store/index.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});



------------------
在vue组件中使用时，我们通常会使用mapGetters、mapActions、mapMutations，然后就可以按照vue调用methods和computed的方式去调用这些变量或函数，示例如下：

import {mapGetters, mapMutations, mapActions} from 'vuex';

/* 只写组件中的script部分 */
export default {
    computed: {
        ...mapGetters([
            name,
            age
        ])
    },
    methods: {
        ...mapMutations({
            setName: 'SET_NAME',
            setAge: 'SET_AGE'
        }),
        ...mapActions([
            nameAsyn
        ])
    }
};