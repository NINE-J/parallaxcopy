<template>
  <div class="parallax-container">
    <div class="img-wrapper">
      <img src="@/assets/bg.jpg" id="bg" ref="bg" alt="bg" />
      <img src="@/assets/moon.png" ref="moon" alt="moon" />
      <img src="@/assets/mountain.png" ref="mountain" alt="mountain" />
      <img src="@/assets/road.png" id="road" ref="road" alt="road" />
      <div id="text-wrapper" ref="textWrapper">
        <h2 id="text">Moon Light</h2>
      </div>
    </div>
    <div class="description-wrapper">
      <span>parallax scrolling</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  mounted() {
    let moon = this.$refs.moon;
    let mountain = this.$refs.mountain;
    let road = this.$refs.road;
    let textWrapper = this.$refs.textWrapper;

    window.addEventListener('scroll', function () {
      let value = window.scrollY;

      moon.style.right = value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      textWrapper.style.top = value * 1 + 'px';
    });
  }
};
</script>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
}
.img-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
  }

  #bg {
    position: fixed;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    object-fit: contain;
  }

  #road {
    z-index: 2;
  }

  #text-wrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #text {
    margin: 0;
    color: #fff;
    font-weight: 900;
    font-size: 2rem;
  }
}

.description-wrapper {
  position: relative;
  z-index: 99;
  width: 100%;
  height: 1000px;
  background: #0a2a43;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    top: -98px;
    background: linear-gradient(to top, #0a2a43, transparent);
  }
}

@media (min-width: 1024px) {
  .img-wrapper {
    #text {
      font-size: 10rem;
    }
  }
}
</style>
