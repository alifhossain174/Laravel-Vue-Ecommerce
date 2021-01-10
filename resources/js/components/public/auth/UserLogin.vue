<template>
    <div>
		<!-- login content section start -->
		<section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="main-input padding60">
							<div class="log-title">
								<h3><strong>Login customers</strong></h3>
							</div>
							<div class="login-text">
								<div class="custom-input">
									<p>If you have an account with us, Please log in!</p>
									<form method="post" @submit.prevent="userLogin()">
										<input type="text" v-model="form.email" placeholder="Email" />
                                        <span style="margin-bottom: 5px" class="text-danger" v-if="errors['email']">{{errors['email'][0]}}</span>
										<input type="password" v-model="form.password" placeholder="Password" />
                                        <span style="margin-bottom: 5px" class="text-danger" v-if="errors['password']">{{errors['password'][0]}}</span>
										<a class="forget" href="#">Forget your password?</a>
										<div class="submit-text">
                                            <button type="submit">Login</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- login content section end -->
    </div>
</template>

<script>
export default {
    name: "UserLogin",
    data(){
        return{
            errors:{},
            form:{
                email: '',
                password: ''

            }
        }
    },
    methods:{
        userLogin(){
            axios.post('/login',this.form)
                .then((result) => {
                    console.log(result);
                    this.$router.push({name: 'User-Dashboard'});
                }).catch((err) => {
                    console.log(err);
                    this.errors = err.response.data.errors
                });
        }
    }
}
</script>

<style scoped>

</style>
