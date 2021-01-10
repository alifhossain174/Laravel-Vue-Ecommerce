<template>
    <div>
		<!-- login content section start -->
		<section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="main-input padding60 new-customer">
							<div class="log-title">
								<h3><strong>new customers</strong></h3>
							</div>
							<div class="custom-input">
								<form action="mail.php" method="post" @submit.prevent="userRegister()">
									<input type="text" v-model="from.name" placeholder="Name here" />
                                    <span style="margin-bottom: 5px" class="text-danger" v-if="errors['name']">{{errors['name'][0]}}</span>
									<input type="email" v-model="from.email" placeholder="Email Address" />
                                    <span style="margin-bottom: 5px" class="text-danger" v-if="errors['email']">{{errors['email'][0]}}</span>
									<input type="text" v-model="from.phone" placeholder="Phone Number" />
                                    <span style="margin-bottom: 5px" class="text-danger" v-if="errors['phone']">{{errors['phone'][0]}}</span>
									<input type="text" v-model="from.address" placeholder="Address" />
                                    <span style="margin-bottom: 5px" class="text-danger" v-if="errors['address']">{{errors['address'][0]}}</span>
									<input type="password" v-model="from.password " placeholder="Password" />
                                    <span style="margin-bottom: 5px" class="text-danger" v-if="errors['password']">{{errors['password'][0]}}</span>
									<input type="password" v-model="from.password_confirmation" placeholder="Confirm Password" />
									<span style="margin-bottom: 5px" class="text-danger" v-if="errors['password_confirmation']">{{errors['password_confirmation'][0]}}</span>
									<div class="submit-text coupon">
										<button type="submit">Register</button>
									</div>
								</form>
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
    name: "UserRegister",
    data(){
        return {
            errors:{},
            from:{
                name: '',
                email: '',
                phone: '',
                address: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        userRegister(){
            axios.post('/register', this.from)
                .then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                    this.errors = err.response.data.errors
                });
        }
    },
}
</script>

<style scoped>

</style>
