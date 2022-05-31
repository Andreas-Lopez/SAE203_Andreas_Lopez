<template>
  <main class="bg-violet-800">
    <div class="flex p-10 items-center">
      <img src="/Eclipse.svg" alt="Eclipse" />
      <h2 class="text-7xl font-Barlow text-white leading-none font-bold">
        Contact
      </h2>
    </div>
    <div
      class="block p-6 rounded-lg shadow-lg bg-black max-w-md ml-auto mr-auto"
    >
      <form>
        <div class="form-group mb-6">
          <input
            type="text"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="exampleInput7"
            placeholder="Adresse mail"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="exampleInput8"
            placeholder="Sujet de votre demande"
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <button
          type="submit"
          class="
            w-full
            px-6
            py-2.5
            bg-yellow-300
            text-violet-900
            font-bold
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            transition
            duration-150
            ease-in-out
          "
        >
          Envoyer
        </button>
      </form>
    </div>
  </main>
</template>