<template lang="">
  <header class="fixed w-full py-3 bg-white shadow-6xl z-50">
    <div class="container relative">
      <!-- header inner content  -->
      <div class="flex items-center justify-between">
        <!-- brand Logo -->
        <div v-if="data.logo && data.logo.data.attributes">
          <nuxt-link to="/">
            <img v-if="data.logo.data.attributes.url" src="~/assets/images/logo.svg" alt="Templatecookie.com" />
            <img v-else :src="fixUrl(data.logo.data.attributes.url)" alt="Templatecookie.com" />
          </nuxt-link>
        </div>
        <!-- menu  -->
        <div class="hidden lg:block">
          <ul class="flex items-center space-x-5 nav-menu">
            <li class="nav-menu__item dropdown" v-for="menuItem in data.menuItem" :key="menuItem.id">
              <nuxt-link :target="{ '_blank': menuItem.target }" :to="menuItem.href">{{ menuItem.label }}</nuxt-link>
            </li>
            <template  v-if="data.navigation">
            <li class="nav-menu__item" v-for="dropdownItem in data.navigation" :key="dropdownItem.id">
              <a href="javascript:void()">{{ dropdownItem.label }}</a>
              <!-- dropdown icon  -->
              <span class="dropdown-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 6.75L9 12.375L3.375 6.75"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <ul class="nav-menu__dropdown">
                <li v-for="item in dropdownItem.link" :key="item.id">
                  <nuxt-link :to="item.href"> {{ item.label }} </nuxt-link>
                </li>
              </ul>
            </li>
            </template>
            
            <li v-if="data.button">
              <nuxt-link
                :to="data.button.link.href"
                class="text-white hover:text-white text-sm capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 py-4"
              >
                {{ data.button.link.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Toggole -->
        <div class="lg:hidden">
          <div
            @click="openSidebar"
            :class="`toggle ${toggleStatus === true ? 'active' : ''} `"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar  -->
    <transition name="fade">
      <div
        class="sidebar absolute left-0 top-full w-full bg-white h-screen max-w-300 block lg:hidden z-50"
        v-if="sideBar"
      >
        <!-- menu  -->
        <div class="py-6">
          <ul class="sidebar-menu">
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="/">Free Template</nuxt-link>
              </div>
            </li>
            <li class="sidebar-menu__item">
              <div class="sidebar-menu__content">
                <nuxt-link to="/">UI template</nuxt-link>
                <!-- dropdown icon  -->
                <span class="dropdown-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.625 6.75L9 12.375L3.375 6.75"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="sidebar-menu__dropdown">
                <ul>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="#">Dropdown item </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sidebar-menu__button">
              <nuxt-link
                to="/"
                class="text-white hover:text-white text-button capitalize font-medium bg-blue-0b hover:bg-dark-06 overflow-hidden rounded inline-block px-5 w-full text-center"
              >
                envato profile
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>
<script>
import global from '~/mixin/global';

export default {
  name: "Header",
  props: ['data'],
  mixins: [global],
  data() {
    return {
      toggleStatus: false,
      sideBar: false,
    };
  },
  methods: {
    openSidebar() {
      this.toggleStatus = !this.toggleStatus;
      this.sideBar = !this.sideBar;
      document.body.classList.toggle("overlay");
    },
  },
};
</script>
