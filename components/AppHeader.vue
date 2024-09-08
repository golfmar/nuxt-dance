<template lang='pug'>
header 
  .container
    nav
      ul
        li
          NuxtLink(to='/') Home
        li
          NuxtLink(to='/info') COMMON Info
        li
          NuxtLink(to='/about') COMMON figures
        //- li
        //-   NuxtLink(to='/products') Products
        li
          NuxtLink(to='/gram') Waltz
        li
          NuxtLink(to='/add') add


</template>
<script setup>
const handleWindowScroll = () => {
  const header = document.querySelector('.header')
  if (window.pageYOffset > 60) {
    header.classList.add("responciveHeader");
  } else {
    header.classList.remove("responciveHeader");
  }
};
</script>
<style lang='scss' scoped>
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background: $brown-4;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.3)) !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

  .responciveHeader {
    // height: 50px;
    padding: 3px 0;
    backdrop-filter: blur(15px);
    @include transition;
  }

  nav {
    position: relative;
    padding: 0 10px;
    min-height: 50px;
    width: 100%;
    display: flex;
    align-items: center;


    ul {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      column-gap: 15px;

      li {
        a {
          color: $brown-2;

          &.router-link-active {
            color: $amber-9;
          }
        }

      }
    }
  }
}
</style>