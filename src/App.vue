<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav
      class="
        flex
        items-center
        justify-between
        flex-wrap
        bg-black
        p-6
        w-full
        z-10
        top-0
      "
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <RouterLink
          to="/"
          class="text-white no-underline hover:text-white hover:no-underline"
        >
          <div class="text-2xl pl-2">
            <img src="/logo.svg" alt="logo" class="em em-grinning" />
          </div>
        </RouterLink>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-gray-500
            border-gray-600
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="
          w-full
          flex-grow
          lg:flex lg:items-center lg:w-auto
          hidden
          lg:block
          pt-6
          lg:pt-0
        "
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <RouterLink
              to="/Programme"
              class="
                inline-block
                py-2
                px-4
                text-white
                hover:text-underline
                text-xl
                font-bold
              "
              >Programmation</RouterLink
            >
          </li>
          <li class="mr-3">
            <RouterLink
              to="/Artistes"
              class="
                inline-block
                no-underline
                text-white
                hover:text-underline
                py-2
                px-4
                text-xl
                font-bold
              "
              >Artistes</RouterLink
            >
          </li>
          <li class="mr-3">
            <RouterLink
              to="/Festival"
              class="
                inline-block
                no-underline
                text-white
                hover:text-underline
                py-2
                px-4
                text-xl
                font-bold
              "
              >Le festival</RouterLink
            >
          </li>
          <li class="mr-3">
            <RouterLink
              to="/Contact"
              class="
                inline-block
                no-underline
                text-white
                hover:text-underline
                py-2
                px-4
                text-xl
                font-bold
              "
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
  <footer class="bg-black text-center lg:text-left">
    <div class="container p-6 text-gray-800">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class="mb-6 md:mb-0">
          <h5 class="font-medium mb-2 uppercase text-white text-center">
            Retrouvez nous sur
          </h5>
          <div class="flex justify-evenly mt-10">
            <img src="/facebook.svg" alt="facebook" />
            <img src="/insta.svg" alt="instagram" />
            <img src="/tiktok.svg" alt="tiktok" />
            <img src="/twitter.svg" alt="twitter" />
            <img src="/youtube.svg" alt="youtube" />
          </div>
        </div>

        <div class="mb-6 md:mb-0">
          <h5 class="font-medium mb-2 uppercase text-white text-center">
            En partenariat avec
          </h5>
          <div class="flex justify-evenly mt-10">
            <img src="/sables.png" alt="Logo les sables d'olonne" />
          </div>
        </div>
      </div>
    </div>

    <RouterLink
      to="/Mentions"
      class="
        text-center text-white
        p-4
        bg-black
        font-Barlow font-bold
        leadin-7
        text-xl
        flex
        justify-center
      "
    >
      Mentions légales
    </RouterLink>
  </footer>
</template>

<script>
</script>

<style>
@import "@/assets/base.css";
</style>
