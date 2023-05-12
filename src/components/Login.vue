<template>
  <div>
    <h2>Login</h2>
    <form @submit='submitForm'>
      <div>
        <label for='username'>Username:</label>
        <input type='username' v-model='username' required>
      </div>
      <div>
        <label for='password'>Password:</label>
        <input type='password' v-model='password' required>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
    <div v-if='error' class='error'>{{ error }}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import router from '../router';
const CryptoJS = require('crypto-js');
import axios from 'axios';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    submitForm(event: Event) {
      event.preventDefault();

      const newPassword = CryptoJS.MD5(this.password).toString();
      this.getUserOne(this.username, newPassword)
    },
    async getUserOne(newUserName: string, newPassword: string) {
      try {
        const response = await axios.post('http://localhost:3000/login', { newUserName, newPassword });
        console.log(response)
         if (response.data.message ==='The user is valid') {
          console.log('Login successful');
          router.push('/home');
        } else if(response.data.message==='The user is not valid'){
          this.error = 'Credenciales inválidas';
          console.log('Login failed');
        } 
      } catch (error) {
        throw error; 
      }
    }
  }
});
</script>
