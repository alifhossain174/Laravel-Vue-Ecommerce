<template>
  <div class="hold-transition login-page" id="adminLogin">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>VMS</b>Admin</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form method="post" @submit.prevent="adminLogin()">
            <div class="input-group mb-3">
                <input type="email" v-model="form.email" class="form-control" placeholder="Email" />
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="password" v-model="form.password" class="form-control" placeholder="Password"/>
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember"> Remember Me </label>
                    </div>
                </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AdminLogin",
    data(){
        return{
            form:{
                email: '',
                password: '',
            }
        }
    },
    methods: {
        adminLogin(){
            axios.post('/admin/login', this.form)
                .then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                });
        }
    },
};
</script>

<style scoped>
</style>
