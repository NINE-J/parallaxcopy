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
    <div class="description-wrapper" ref="descriptionWrapper">
      <div class="subtitle">
        <h2>parallax scrolling</h2>
        <span>[패럴랙스]</span>
      </div>
      <p class="description">
        패럴랙스는 시차라는 뜻으로 천문학에서 사용하는 용어입니다. 즉 멀리 있는
        물체는 천천히 움직이고 가까이 있는 물체는 빨리 움직이는 현상을
        의미합니다. 이를 이용하여 웹페이지에서 시각적인 공간감을 느낄 수 있도록
        해주는 인상적인 효과입니다.
      </p>
      <div class="animation-wrapper">
        <div class="box-wrapper">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
    </div>
    <div class="second-parallax" ref="secondParallax">
      <div class="img-wrapper">
        <img src="@/assets/p0.png" alt="p0" />
        <img src="@/assets/p1.png" ref="p1" alt="p1" />
        <img src="@/assets/p2.png" ref="p2" alt="p2" />
        <img src="@/assets/p3.png" ref="p3" alt="p3" />
        <img src="@/assets/p4.png" ref="p4" alt="p4" />
        <img src="@/assets/p5.png" ref="p5" alt="p5" />
        <div
          style="
            position: absolute;
            bottom: 12rem;
            display: flex;
            flex-flow: column;
            align-items: center;
          "
        >
          <div
            style="
              width: 1px;
              height: 100px;
              background: #fff;
              opacity: 0.4;
              margin-bottom: 4rem;
            "
          ></div>
          <p class="description">
            이 페이지는 css와 javascript의 이해를 위해 제작된 페이지 입니다.
          </p>
        </div>
      </div>
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

    //second parallax
    let descriptionWrapper = this.$refs.descriptionWrapper;
    let p1 = this.$refs.p1;
    let p2 = this.$refs.p2;
    let p3 = this.$refs.p3;
    let p4 = this.$refs.p4;
    let p5 = this.$refs.p5;

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      if (value < descriptionWrapper.offsetTop) return;

      p1.style.top = (descriptionWrapper.offsetTop - value) * 0.15 + 'px';
      p2.style.top = (descriptionWrapper.offsetTop - value) * 0.2 + 'px';
      p3.style.top = (descriptionWrapper.offsetTop - value) * 0.3 + 'px';
      p4.style.top = (descriptionWrapper.offsetTop - value) * 0.4 + 'px';
      p5.style.top = (descriptionWrapper.offsetTop - value) * 0.8 + 'px';
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
    top: 0;
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
  background: #0a2a43;
  color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 4rem;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    top: -98px;
    background: linear-gradient(to top, #0a2a43, transparent);
  }

  .subtitle h2 {
    margin: 0;
  }

  .subtitle {
    text-align: center;
  }

  .description {
    padding: 0 2rem;
  }

  .animation-wrapper {
    @keyframes box_wrapper {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-20px);
      }
    }

    @keyframes box_01 {
      from {
        transform: translate(0);
      }
      to {
        transform: translate(5px, 5px) skewY(20deg);
      }
    }

    @keyframes box_02 {
      from {
        transform: translate(0);
      }
      to {
        transform: translate(20px, -10px) skewY(20deg);
      }
    }

    @keyframes box_03 {
      from {
        transform: translate(0);
      }
      to {
        transform: translate(40px, -20px) skewY(20deg);
      }
    }

    .box-wrapper {
      margin: 8rem 0;
      width: 100px;
      height: 100px;
      position: relative;
      animation: box_wrapper 1.2s infinite alternate;
      .box {
        position: absolute;
        width: 100px;
        height: 100px;
        background: rgba($color: #fff, $alpha: 0.4);
        border-radius: 1rem;
      }
      .box:nth-child(1) {
        animation: box_01 1.2s infinite alternate;
      }
      .box:nth-child(2) {
        animation: box_02 1.2s infinite alternate;
      }
      .box:nth-child(3) {
        animation: box_03 1.2s infinite alternate;
      }
    }
  }
}

.second-parallax {
  position: relative;
  width: 100%;

  .img-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 48%;
    background: #000;

    img {
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .description {
    margin: 0;
    color: #fff;
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .img-wrapper {
    #text {
      font-size: 10rem;
    }
  }

  .description-wrapper {
    .description {
      text-align: center;
      width: 40%;
      padding: 0;
    }
  }

  .second-parallax {
    .description {
      text-align: center;
      padding: 0;
    }
  }
}
</style>
