import Vue from 'vue'
import Vuex from 'vuex'
import project from './Modules/project.js'
import process from './Modules/process.js';
import raw from './Modules/raw.js';
import material from './Modules/material.js';
import unit from './Modules/unit.js';
import productTypes from './Modules/productTypes.js'
import costconfig from './Modules/costconfig.js';
import listhubtype from './Modules/listhub.js'
import login from './Modules/login';
import getters from './getters';
Vue.use(Vuex)

const state = {

  projecttypes: ['Apple', 'Blood Orange', 'Cantaloupe', ],
  devicesubtypes: ['备件', '机械', '液压', '气动', '程序', ],


  partsubtypes: ["��̼�", "���", "Option 3", "Option 4", "Option 5"],
  partrelations: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  partmaterials: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  staffs: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
  listtype: [],

}
export default () => {
  return new Vuex.Store({
    state,
    modules: {
      project,
      raw,
      process,
      material,
      unit,
      productTypes,
      costconfig,
      listhubtype,
      login,
    },


    mutations: {
      addprojecttem() {
        this.$store.state.templates.push()
      }
    },
    actions: {

    },
  })
}