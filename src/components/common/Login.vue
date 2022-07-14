<template>
  <a-form
    class="mx-auto"
    :model="loginData"
    layout="vertical"
    name="basic"

    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="loginData.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="loginData.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="loginData.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent,  } from 'vue';

export default defineComponent({

  methods:{
    onFinish (values){
      console.log('login to do:', values);
      this.$emit("onLogin", true);
    },
    onFinishFailed(errorInfo){
      console.log('Failed:', errorInfo);
    }
  },
  data(){
    return {
      loginData:{
        username: '',
        password: '',
        remember: true,
      }
    }
  }
});
</script>

<style scoped>

</style>
