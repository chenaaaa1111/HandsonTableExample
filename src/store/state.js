const state = {
    name: 'weish',
    age: 22,
    projecttemplates: ['Apple', 'Blood Orange', 'Cantaloupe', 'Apple', 'Blood Orange', 'Cantaloupe',
        'Apple', 'Blood Orange', 'Cantaloupe', 'Apple', 'Blood Orange', 'Cantaloupe',
    ],
    projecttypes: ['Apple', 'Blood Orange', 'Cantaloupe', ],

};

// export default state;
export default () => {
    return new Vuex.Store({
        state,
    })
}