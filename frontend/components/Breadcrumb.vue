<template>
  <div class="pb-10 pt-36 bg-cover bg-center" :style="BreadcrumbBg">
    <div class="container">
      <div class="ex-small:overflow-auto overflow-x-scroll">
        <ul class="flex text-gray-6a text-sm space-x-2 mb-3">
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link to="/">Home </nuxt-link>
          </li>
          <li class="leading-3 whitespace-nowrap">
            <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
          </li>
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link to="#">Product</nuxt-link>
          </li>
          <li class="leading-3 whitespace-nowrap">
            <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
          </li>
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link to="#">UI Template</nuxt-link>
          </li>
          <li class="leading-3 whitespace-nowrap">
            <img src="~@/assets/images/svg/arrow-gray.svg" alt="" />
          </li>
          <li class="leading-3 whitespace-nowrap">
            <nuxt-link to="#">Figma</nuxt-link>
          </li>
        </ul>
      </div>

      <h2
        class="text-dark-06 text-2xl md:text-3xl lg:text-heading-40 font-semibold tracking-01"
      >
        Relik - Admin Dashboard Figma Template
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      BreadcrumbBg: {
        backgroundImage: "url(https://i.imgur.com/YjAciyt.png)",
      },
    };
  },
};
</script>
