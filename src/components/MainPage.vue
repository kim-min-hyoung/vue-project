<template>
  <div class="mainPage">
    <h1 class="title">{{ msg }}</h1>
    <div class="sub">
      <h2 v-if="vIfTest" class="subTitle">좋아하는 {{ msg }}</h2>
      <p class="prag">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props: {
    msg: String,
    msg2: String,
    vIfTest: Boolean,
  },
};
</script>

<style>
.mainPage {
  margin: 100px;
}

.title {
  text-align: left;
  margin-left: 200px;
}

.sub {
  margin: 200px;
}
</style>
