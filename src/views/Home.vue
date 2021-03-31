<template>
  <div class="home">
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username"> ID: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="passward"> Password: </label>
        <input id="passward" type="passward" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.password);
      let url = "https://jsonplaceholder.typicode.com/users";
      const data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
