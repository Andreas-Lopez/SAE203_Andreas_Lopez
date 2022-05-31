<template>
  <main class="bg-violet-800">
    <div class="flex p-10 items-center">
      <img src="/Eclipse.svg" alt="Eclipse" />
      <h2 class="text-7xl font-Barlow text-white leading-none font-bold">
        Programmation
      </h2>
    </div>
    <div class="mb-20">
      <div class="flex justify-end">
        <div
          class="
            bg-yellow-600
            text-black
            w-fit
            text-4xl
            font-Barlow font-bold
            pl-80
            pr-10
            pt-5
            pb-3
            rounded-t-xl
          "
        >
          15 août - Concerts Pop
        </div>
      </div>
      <div class="bg-black">
        <div class="text-yellow-400 text-4xl font-Barlow font-bold p-10">
          Scène principale
        </div>
        <div class="text-white flex justify-evenly text-2xl font-bold pb-10">
          <p>Clairo</p>
          <p>Mitski</p>
          <p>Baebedobee</p>
        </div>
        <div class="text-white flex justify-evenly text-2xl font-bold pb-20">
          <p>Snail Mail</p>
          <p>Alvvays</p>
          <p>Fazerdaze</p>
          <p>Arlie</p>
        </div>
      </div>
      <div class="flex justify-start"></div>
      <div
        class="
          bg-yellow-400
          text-black
          w-fit
          text-4xl
          font-Barlow font-bold
          pl-10
          pr-80
          pt-5
          pb-3
          rounded-b-xl
        "
      >
        Scène secondaire

        <div class="text-2xl font-bold text-black">
          <div class="flex justify-evenly">
            <p>Vance Joy</p>
            <p>Lucy Dacus</p>
            <p>Hazel English</p>
            <p>Jay Som</p>
          </div>
        </div>
      </div>
    </div>
    <RouterLink
      to="/Concert"
      class="
        bg-violet-600
        text-center
        underline
        text-white text-xl
        font-bold
        flex
        justify-center
      "
    >
      Voir les différentes scènes
    </RouterLink>
    <div class="flex justify-end mt-20">
      <div
        class="
          bg-yellow-600
          text-black
          w-fit
          text-4xl
          font-Barlow font-bold
          pl-80
          pr-10
          pt-5
          pb-3
          rounded-t-xl
        "
      >
        16 août - Concerts Rock
      </div>
    </div>
    <div class="bg-black">
      <div class="text-yellow-400 text-4xl font-Barlow font-bold p-10">
        Scène principale
      </div>
      <div class="text-white flex justify-evenly text-2xl font-bold pb-10">
        <p>Arcade Fire</p>
        <p>The Neighbourhood</p>
        <p>Arctic Monkeys</p>
      </div>
      <div class="text-white flex justify-around text-2xl font-bold pb-20">
        <p>Tame Impala</p>
        <p>The Strokes</p>
        <p>Nothing but Thieves</p>
      </div>
    </div>
    <div class="flex justify-start"></div>
    <div
      class="
        bg-yellow-400
        text-black
        w-fit
        text-4xl
        font-Barlow font-bold
        pl-10
        pr-80
        pt-5
        pb-3
        rounded-b-xl
      "
    >
      Scène secondaire

      <div class="text-2xl font-bold text-black">
        <div class="flex justify-evenly">
          <p>Lupine</p>
          <p>School of Seven Bells</p>
          <p>Surf Curse</p>
        </div>
      </div>
    </div>
  </main>
</template>