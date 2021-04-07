<template>
  <div class="albums">
    <MainPage
      msg="앨범"
      msg2="내 마음에 드는 앨범을 보관함에 모아보세요."
      :vIfTest="true"
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
