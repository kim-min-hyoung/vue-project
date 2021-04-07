<template>
  <div class="playbar">
    <div class="album-cover">
      <div class="album-cover__img"></div>
      <div class="album-cover__text-box">
        <div class="album-cover__wrap">
          <p class="album-cover__title">Celebrity</p>
          <div class="album-cover__icon-box">
            <i class="album-cover__icon far fa-heart"></i>
            <i class="album-cover__icon fas fa-ban"></i>
          </div>
        </div>
        <div>
          <p class="album-cover__artist">Emile Almira, Lizzie Statham</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return 
  },
};
</script>

<style scoped lang="scss">
$main-color-darker: #1dba54;
$main-color: #1ed761;

@mixin position($position, $top, $left) {
  position: $position;
  top: $top;
  left: $left;
}

@mixin flex-justify-btw {
  display: flex;
  justify-content: space-between;
}

body {
  width: 100%;
  height: 100%;
  color: #b3b3b3;
  font: 400 14px "Roboto", sans-serif;
  letter-spacing: 0.4px;
  vertical-align: middle;
  cursor: default;
  overflow-x: hidden;
}

label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.playbar {
  display: flex;
  width: 100%;
  height: 86px;
  padding: 18px 16px 12px;
  background-color: #2d2d2d;
  box-sizing: border-box;
}
/* playbar - album cover and info */
.album-cover {
  min-width: 280px;
  display: flex;
  flex: 1;

  &__img {
    width: 56px;
    height: 56px;
    background: url("https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r720Fll&v=20210326102709");
    background-size: cover;
  }
  &__text-box {
    padding: 0 10px;
  }
  &__wrap {
    display: flex;
    line-height: 2.4;
  }
  &__title {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
  &__icon-box {
    margin-left: 20px;
  }
  &__icons {
    margin: -2px 0 0 4px;
  }
  &__artist {
    font-size: 11px;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}

/*  playbar - play buttons */
.play-btns {
  width: 100%;
  min-width: 342px;
  flex: 3;

  &__wrap {
    @include flex-justify-btw;
  }
  &__icon-box {
    width: 218px;
    margin: auto;
    font-size: 14px;
    line-height: 32px;
  }
  &__list:hover {
    color: #fff;

    .fa-play-circle {
      color: #fff;
      transform: scale(1.05);
    }
  }
  &__icon.fa-play-circle {
    color: #e5e5e5;
    font-size: 32px;
  }
  &__range-bar {
    width: 84%;
    margin: auto;
    font-size: 11px;
    padding: 0 20px;
    box-sizing: border-box;
  }
  &__bar {
    flex: 2;
    padding: 0 20px;
  }
}
/* playbar - other buttons(right side) */
.ect-btns {
  max-width: 228px;
  min-width: 228px;
  flex: 1;
  font-size: 14px;

  &__inner {
    @include flex-justify-btw;
    padding-left: 18px;
  }
  &__list {
    line-height: 56px;

    &:hover .ect-btns__icon {
      color: #fff;
    }
    &--volume {
      display: flex;
    }
  }
  &__icon {
    padding-right: 6px;
    line-height: 56px;
  }
  &__bar {
    width: 74px;
    margin-top: -3px;
  }
}
</style>
