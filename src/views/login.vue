<style>
  .content {
    background: url('../assets/login.jpg');
    height: 100%;
  }
  .overly{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #3e3e3e9a;
  }
</style>
<template>
<v-app>
  <div class="content">
    <div class="overly"></div>
    <v-row justify="center" align="center"  style="height:100%">

      <v-col cols="12" md="5">
        <material-card color="accent" full-header>
          <template #heading> 
            <div class="pa-4 white--text">
              <div class="text-h2 font-weight-light text-center">
                <strong class="mr-1 font-weight-black">LOGIN </strong>T-MEDIC
                <v-avatar size="80">
                  <img src="../assets/logo.png">
                </v-avatar>
                <!-- <v-img :src="require('@/assets/logo.png')" />  -->
              </div>
            </div>
          </template>
          <v-card>
            <v-card-text>
              <v-form ref="form" lazy-validation v-model="valid">
                <v-col cols="12">
                  <v-text-field outlined v-model="form.username" hide-details="auto" dense label="User Name" />
                </v-col>
                <v-col cols="12">
                  <v-text-field outlined v-model="form.password" hide-details="auto" dense label="Password" />
                </v-col>
                <v-col cols="12" sm="4" offset="9" class="">
                    <v-btn color="primary" class="text-h4" @click="Login">Login <v-icon>mdi-exit-run</v-icon></v-btn>
                </v-col> 
              </v-form>
              {{ user }}
            </v-card-text>
          </v-card>
        </material-card>
      </v-col>
    </v-row>
  </div>
</v-app>
</template>

<script>
import { get,set,call,sync  } from 'vuex-pathify'

export default {
  name: 'DashboardView',

  data: () => ({
    form:{
      username: 'admin',
      password: 'admin123',
    },
    valid: '', 
  }),
  computed: {
    ...sync('login', [
      'user',
    ]), 
  },
  methods: {
     ...call(['login/login']),
    async Login(){
      try {
        let data = await this.login(this.form) 
        this.$router.push('/') 
      } catch (err) {
        console.log('err :>> ', err);
      }
    }
  }, 
}
</script>

<style>

</style>
