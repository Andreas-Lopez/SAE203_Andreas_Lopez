<template>
  <div>
    <form enctype="multipart/form-data" @submit.prevent="createArtiste()">
      <div class="flex w-full flex-col gap-4">
        <div class="flex flex-col">
          <span class="">Nom de l'artiste</span>
          <input
            class="artiste-input"
            placeholder="Nom Artiste"
            v-model="artiste.nom"
            required
          />
        </div>
        <div class="flex flex-col">
          <p>img</p>
          <input
            type="file"
            class="artiste-input flex flex-wrap"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
        <div>
          <img class="w-20" :src="imageData" />
        </div>

        <div class="flex flex-col">
          <p>Catégorie</p>

          <select class="artiste-input" v-model="artiste.cat">
            <option
              class="bg-white text-black"
              v-for="categorie in listeCat"
              :key="categorie.libelle"
            >
              {{ categorie.libelle }}
            </option>
          </select>
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
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
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
        cat: null,
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
