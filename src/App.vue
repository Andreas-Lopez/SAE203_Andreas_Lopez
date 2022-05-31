<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <RouterLink
        to="/"
        class="flex items-center flex-shrink-0 text-white mr-6"
      >
        <img src="/logo.svg" alt="" />
      </RouterLink>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow text-right">
          <RouterLink
            to="/Programme"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Barlow font-bold
              leadin-7
              text-xl
            "
            >Programmation
          </RouterLink>
          <RouterLink
            to="/Artistes"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Barlow font-bold
              leadin-7
              text-xl
            "
            >Artistes
          </RouterLink>
          <RouterLink
            to="/Festival"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Barlow font-bold
              leadin-7
              text-xl
            "
            >Le festival
          </RouterLink>
          <RouterLink
            to="/Contact"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-white
              hover:text-Boutons-1
              mr-10
              font-Barlow font-bold
              leadin-7
              text-xl
            "
            >Contact
          </RouterLink>
        </div>
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

<style>
@import "@/assets/base.css";
</style>
