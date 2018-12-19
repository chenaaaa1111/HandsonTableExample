const state = {
    code: "",
    code2: ""

}
const getters = {
    function (state) {
        return state.function
    },
    // 或另一种方式
    function: (state, {}) => {},
}
const mutations = {
    get_CODE: (state, {
        num,
        num2
    }) => {
        state.code = num;
        state.code2 = num2;
    },
    SET_CODE: (state, code) => {
        state.code = code
    },
}
export default {
    state,
    getters,
    mutations,
    actions: {
        SET_CODE: (store, {
            code
        }) => {
            store.code = code
        },
    }
};