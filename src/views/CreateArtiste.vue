<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="createArtiste()">
      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="">Nom de l'artiste</span>
          <input
            class="input-a"
            placeholder="Nom Artiste"
            v-model="artiste.nom"
            required
          />
        </div>
        <div class="flex flex-col">
          <p>img</p>
          <input
            type="file"
            class="input-a flex flex-wrap"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
        <div>
          <img class="w-20" :src="imageData" />
        </div>
      </div>

      <button type="submit" class="w-fit">Créer</button>

      <router-link to="/artistes">
        <button class="w-fit">Annuler</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateArtisteView",
  data() {
    return {
      imageData: null,
      listeCat: [],
      artiste: {
        nom: null,
        photo: null,
      },
    };
  },
  mounted() {
    this.getCat();
  },
  methods: {
    async getCat() {
      const firestore = getFirestore();

      const dbCat = collection(firestore, "categorie");

      const q = query(dbCat, orderBy("libelle", "asc"));

      await onSnapshot(q, (snapshot) => {
        this.listeCat = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Liste des catégories", this.listeCat);
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];

      this.artiste.photo = this.file.name;

      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          this.imageData = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    async createArtiste() {
      const storage = getStorage();

      const refStorage = ref(storage, "artiste/" + this.artiste.photo);

      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");

          const db = getFirestore();
          const docRef = addDoc(collection(db, "artiste"), this.artiste);
        }
      );

      this.$router.push("/Artistes");
    },
  },
};
</script>
