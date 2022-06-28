<template>
<div class="container">
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <h4>LOGIN</h4>
      <label for="" class="inputs-label">Email:</label>
      <input class="form-control form-control-sm" type="text" v-model="login_obj.email">

      <label for="" class="inputs-label">Password:</label>
      <input class="form-control form-control-sm" type="text" v-model="login_obj.password">
      <div class="btn-actions-div">
        <button type="button" class="btn btn-primary btn-sm btn-login" @click="loginFunction">LOGIN</button>
        <button type="button" class="btn btn-link btn-sm btn-register" @click="RegisterFunction">DON'T HAVE ACCOUNT?</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name : 'LoginComponent',
  data() {
    return {
       login_obj : {
        email : "", 
        password : ""
      },
    }
  },
  created() {
    NProgress.start()
  },
  mounted() {
    NProgress.done()
  },
  methods: {
    loginFunction() {
      this.axios.post('http://127.0.0.1:8000/api/login', this.login_obj)
      .then(res => {
        // console.log(res)
        NProgress.start()
        NProgress.done()
      }).catch(error => {
        console.log(error)
      })
    },
    RegisterFunction() {
     this.$router.push('/register')
    }
  },
}
</script>

<style scoped>
  .btn-actions-div :is(.btn-login, .btn-register) {
    margin-top: 1em;
  }
  .btn-actions-div :is(.btn-login) { 
    width: 110px;
  }
  .btn-actions-div :is(.btn-register) { 
    text-decoration: none;
    width: 180px;
  }
</style>