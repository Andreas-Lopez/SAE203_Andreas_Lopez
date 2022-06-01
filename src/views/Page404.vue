<template>
  <main class="bg-violet-800">
    <p class="text-xl lg:text-5xl text-white font-bold p-5">Erreur 404</p>
    <p class="text-xl lg:text-5xl text-white font-bold p-5">
      Cette page n'est pas disponible
    </p>
    <img class="w-full" src="/404.png" alt="" />
    <form
      class="flex justify-center p-5"
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <label class="text-white font-bold pr-5" for="q">Text à chercher :</label>
      <input type="text" id="q" name="q" x-model="q" />
      <button class="text-white font-bold pl-5" type="submit">
        Rechercher
      </button>
    </form>
  </main>
</template>