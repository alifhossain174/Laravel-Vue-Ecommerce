import Axios from "axios";

export const user = {
    namespaced: true, // for specifying which module you are accessing by getters, action and mutation
    state:{
        user: {}
    },
    getters:{
        getAuthUserInfo(state){
            return state.user;
        }
    },
    actions:{
        getUser(context){
            Axios.get('/user/get/user/info')
                .then((result) => {
                    context.commit('getUserData',result.data.user_info);
                })
                .catch((err) => {
                    console.log(err)
                });
        },
        userLogout(context){
            Axios.post('/logout')
            .then((result) => {
                context.commit('getUserData',result.data);
            })
        }
    },
    mutations:{
        getUserData(state,payload){
            return state.user = payload;
        }
    }

}
