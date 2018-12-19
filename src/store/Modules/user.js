import {
    loginByUsername,
    logout,
    getUserInfo
} from '@/api/login'
import {
    getToken,
    setToken,
    removeToken
} from '@/api/auth'

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: getToken(),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },
}
const getters = {
    function (state) {
        return state.function
    },
    // 或另一种方式
    function: (state, {}) => {},
}
const mutations = {
    SET_CODE: (state, code) => {
        state.code = code
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
        state.setting = setting
    },
    SET_STATUS: (state, status) => {
        state.status = status
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },

    //原来的示例代码
    get_CODE: (state, {
        num,
        num2
    }) => {
        state.code = num;
        state.code2 = num2;
    },
}
export default {
    state,
    getters,
    mutations,
    actions: {
        // 用户名登录
        LoginByUsername({
            commit
        }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    const data = response.data
                    commit('SET_TOKEN', data.token)
                    setToken(response.data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
                        reject('error')
                    }
                    const data = response.data

                    if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', data.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }

                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_INTRODUCTION', data.introduction)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 第三方验证登录
        // LoginByThirdparty({ commit, state }, code) {
        //   return new Promise((resolve, reject) => {
        //     commit('SET_CODE', code)
        //     loginByThirdparty(state.status, state.email, state.code).then(response => {
        //       commit('SET_TOKEN', response.data.token)
        //       setToken(response.data.token)
        //       resolve()
        //     }).catch(error => {
        //       reject(error)
        //     })
        //   })
        // },

        // 登出
        LogOut({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({
            commit
        }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        },

        // 动态修改权限
        ChangeRoles({
            commit
        }, role) {
            return new Promise(resolve => {
                commit('SET_TOKEN', role)
                setToken(role)
                getUserInfo(role).then(response => {
                    const data = response.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_INTRODUCTION', data.introduction)
                    resolve()
                })
            })
        }
    },
    //另外一个例子https://www.cnblogs.com/weven/p/8143518.html
    //vue vuex vue-rouert后台项目——权限路由（超详细简单版）
    //动态路由的关键在于router配置的meta字段和vuex的状态共存
    Logins({
        commit
    }, info) {
        return new Promise((resolve, reject) => {
            let data = {};
            loginByUserInfo.map(function (item) { //获取所以用户信息
                if (info.username === item.username || info.pew === item.pew) {
                    commit('SET_USERNAME', item.username); //将username和role进行存储
                    sessionStorage.setItem('USERNAME', item.username); //存入 session 
                    commit('SET_ROLE', item.role);
                    sessionStorage.setItem('ROLE', item.role);
                    return data = {
                        username: item.username,
                        introduce: item.introduce
                    };
                } else {
                    return data;
                }
            });
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    },
    Roles({
        commit
    }, newrouter) {
        return new Promise((resolve, reject) => {
            commit('SET_NEWROUER', newrouter); //存储最新路由
            resolve(newrouter);
        }).catch(error => {
            reject(error);
        });

    },
    //原始的示例代码
    // SET_CODE: (store, {
    //     code
    // }) => {
    //     store.code = code
    // },}

};