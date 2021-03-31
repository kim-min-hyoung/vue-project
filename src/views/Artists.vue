<template>
  <div class="artists">
    <MainPage
      msg="아티스트"
      msg2="내가 좋아하는 아티스트를 보관함에서 확인해보세요."
    />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage.vue";

export default {
  name: "mainPage",
  components: {
    MainPage,
  },
};
</script>

<style></style>
