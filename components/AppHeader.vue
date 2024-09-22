<template lang='pug'>
div
  transition(mode='easy-in-out' name='opentab')
    header.header(v-if="showComponent" ref='some')
      .decor1(:class="[(OpenHeader) ? '_is-open' : '']") 
      .decor2(:class="[(OpenHeader) ? '_is-open' : '']") 
      .decor3(:class="[(OpenHeader) ? '_is-open' : '']") 
      nav(:class="[(OpenHeader) ? '_is-open' : '']") 
          ul
            li
              NuxtLink(to='/' @click="OpenHeader=!OpenHeader") Home
            li
              NuxtLink(to='/info' @click="OpenHeader=!OpenHeader") COMMON Info
            li
              NuxtLink(to='/about' @click="OpenHeader=!OpenHeader") COMMON figures
            li
              NuxtLink(to='/waltz' @click="OpenHeader=!OpenHeader") Waltz
            li
              NuxtLink(to='/quickstep' @click="OpenHeader=!OpenHeader") Quickstep
            li
              NuxtLink(to='/foxtrot' @click="OpenHeader=!OpenHeader") Foxtrot
            li
              NuxtLink(to='/tango' @click="OpenHeader=!OpenHeader") Tango
            li
              NuxtLink(to='/social' @click="OpenHeader=!OpenHeader") Social Rhythm
            li
              NuxtLink(to='/amalgam' @click="OpenHeader=!OpenHeader") Amalgamation
      .menu-icon.hover-target(@click="OpenHeader=!OpenHeader" :class="[OpenHeader ? '_is-open' : '', { 'custom-position': isCustomLayout }]")
        span.menu-icon__line.menu-icon__line-left
        span.menu-icon__line
        span.menu-icon__line.menu-icon__line-right

</template>
<script setup>
import { ref, onMounted } from 'vue'
var OpenHeader = ref(false);
const showComponent = ref(false)
const some = ref(null)
const props = defineProps({
  isCustomLayout: {
    type: Boolean,
    default: false
  }
})


const handleWindowScroll = () => {
  if (window.pageYOffset > 60) {
    some.value.classList.add("responciveHeader");
  } else {
    some.value.classList.remove("responciveHeader");
  }
};


// 
const closeHeader = () => {
  const wrapper = document.querySelector('.wrapper');
  const body = document.querySelector('body');

  if (wrapper) {
    wrapper.addEventListener("click", (e) => {
      if (!e.target.closest(".menu-icon")) {
        OpenHeader.value = false;
        body.classList.remove("_lock");
      }else{
        body.classList.add("_lock");
      }
      
    });
  }
};



onMounted(() => {
  showComponent.value = true;
  closeHeader();
  // handleWindowScroll();
})

</script>
<style lang='scss' scoped>
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 50px;
  top: 0;
  display: inline-block;
  // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2),
  //     rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)) !important;
  // box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

  // .responciveHeader {
  //   height: 50px;
  //   padding: 3px 0;
  //   backdrop-filter: blur(15px);
  //   @include transition;
  // }

  .decor1 {
    position: fixed;
    background-color: #6c24f9;
    min-height: 100vh;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform 0.6s, border-bottom-right-radius 1s;
    transform: translate(-150%, -150%);
    border-bottom-right-radius: 100%;
    z-index: 2;

    &._is-open {
      transform: translate(0%, 0%);

      backdrop-filter: blur(15px);

    }
  }

  .decor2 {
    position: fixed;
    background-color: #6c34f9;
    min-height: 100vh;
    width: 100%;
    left: 0;
    bottom: 10%;
    transform: translate(-150%, -150%);
    border-bottom-right-radius: 100%;
    z-index: 4;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
    transition: all 0.8s;

    &._is-open {
      transform: translate(0%, 0%);

    }
  }

  .decor3 {
    position: fixed;
    min-height: 100vh;
    width: 100%;
    opacity: 0;
    transition: opacity 0.8s, transform 0.1s;
    transform: translate(-150%, -150%);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)) !important;
    backdrop-filter: blur(10px);

    &._is-open {
      opacity: 1;
      transform: translate(0%, 0%);
      transition: opacity 0.8s, transform 0.1s;
    }
  }

  nav {
    position: fixed;
    padding: 0 10px;
    min-height: 100vh;
    width: 100%;
    transform: translate(-150%, -150%);
    display: flex;
    align-items: center;
    justify-content: center;
    // background: $brown-4;
    transition: all 1.1s;
    z-index: 6;

    &._is-open {
      transform: translate(0%, -10%);
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      column-gap: 15px;
      z-index: 6;

      li {
        margin: 0 0 10px 0;

        a {
          color: azure;
          font-size: 25px;

          &.router-link-active {
            color: #76FF03;
          }
        }

      }
    }
  }
}

.menu-icon {
  position: fixed;
  bottom: 113px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)) !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  height: 23px;
  width: 29px;
  padding: 2px;
  z-index: 10;
  cursor: pointer;
  display: block;
  transition: all 0.2s;

  &.custom-position {
    top: 0;
    margin: 0 0 0 0;
    left: 0;
    transform: translate(39%, 53%);
  }

  &._is-open {
    opacity: 0;
    z-index: -1;
  }
}

.menu-icon__line {
  height: 2px;
  width: 25px;
  display: block;
  background-color: #fff;
  margin-bottom: 7px;
  cursor: pointer;
  -webkit-transition: background-color .5s ease, -webkit-transform .2s ease;
  transition: background-color .5s ease, -webkit-transform .2s ease;
  transition: transform .2s ease, background-color .5s ease;
  transition: transform .2s ease, background-color .5s ease, -webkit-transform .2s ease;
}

.menu-icon__line-left {
  width: 16px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.menu-icon__line-right {
  width: 16px;
  float: right;
  -webkit-transition: all 200ms linear;
  -moz-transition: all 200ms linear;
  -o-transition: all 200ms linear;
  -ms-transition: all 200ms linear;
  transition: all 200ms linear;
}

.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 25px;
}

.opentab-enter-from {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.opentab-enter-to {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}
</style>
