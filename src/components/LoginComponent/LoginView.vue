<template>
<div class="container">
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <h4>SIGNIN</h4>
      <label for="" class="inputs-label">Email:</label>
      <input class="form-control form-control-sm" type="text" v-model="login_obj.email">

      <label for="" class="inputs-label">Password:</label>
      <input class="form-control form-control-sm" type="text" v-model="login_obj.password">
      <button type="button" class="btn btn-primary btn-sm btn-save" @click="loginFunction">LOGIN</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name : 'LoginView',
  data() {
    return {
       login_obj : {
        email : "", 
        password : ""
      },
    }
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
    }
  },
}
</script>