<template>
  <div id="nav">
    <router-link to="/">투데이</router-link>
    <router-link to="/library">보관함</router-link>
    <router-link to="/tracks">노래</router-link>
    <router-link to="/artists">아티스트</router-link>
    <router-link to="/albums">앨범</router-link>
    <router-link to="/playlists">플레이리스트</router-link>
    <router-link to="/mp3">구매한 MP3</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav {
  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);
}

#nav {
  padding: 40px 25px;
}

#nav a {
  text-decoration: none;
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ff5781;
}

#nav {
  min-width: 11rem;
  width: 11rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

#nav.active {
  margin-left: -17rem;
}

#nav.active {
  width: 100%;
  margin: 0;
}
</style>
