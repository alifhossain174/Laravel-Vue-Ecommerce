<template>
    <div>
        <h2>User Dashboard</h2>
        {{user}}
    </div>
</template>

<script>
export default {
    name: "UserDashboard",
    computed:{
        user(){
            return this.$store.getters['user_module/getAuthUserInfo']
        }
    },
    created(){ // load without any event
        this.$store.dispatch('user_module/getUser');
    }
}
</script>

<style scoped>

</style>
