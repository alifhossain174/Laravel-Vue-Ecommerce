export const user = {
    namespaced: true, // for specifying which module you are accessing by getters, action and mutation
    state:{
        name: 'Fahim'
    },
    getters:{
        myName(state){
            return state.name;
        }
    },
    actions:{

    },
    mutations:{

    }

}
