<template>
  <div class="playlists">
    <MainPage msg="플레이리스트" :vIfTest="true" />
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
