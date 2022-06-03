 <template>
  <form>
    <section class="grid justify-center gap-4 pb-8">
      <div>
        <p class="mt-4">liste asynchrone</p>
      </div>
      <div class="flex gap-4">
        <div class="grid gap-4">
          <input
            type="text"
            v-model="nom"
            class="pl-2 border-black border-2"
            placeholder="case1"
            required
          />
          <input
            type="text"
            v-model="def"
            class="pl-2 border-black border-2 w-max"
            required
            placeholder="case2"
          />
        </div>
        <button type="button" @click="createLexique()" title="Création">
          <IconPlus></IconPlus>
        </button>
      </div>
    </section>

    <section
      v-for="lexique in listelexiqueSynchro"
      :key="lexique.id"
      class="pb-12 mt-12 flex justify-center"
    >
      <div class="grid gap-8">
        <input
          type="text"
          v-model="lexique.nom"
          class="text-xl bg-yellow-50 -ml-4"
        />
        <input
          type="text"
          v-model="lexique.def"
          class="text-base bg-yellow-50 ml-2"
        />
      </div>
      <div class="mt-8 ml-12">
        <button @click.prevent="updatelexique(lexique)">
          <IconEdit class="mr-4"></IconEdit>
        </button>
        <button @click.prevent="deletelexique(lexique)">
          <IconTrash></IconTrash>
        </button>
      </div>
    </section>
  </form>
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
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  components: {},
  data() {
    // Données de la vue
    return {
      nom: null, // Pour la création d'un nouveau pays
      def: null,
      listelexiqueSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
    };
  },

  mounted() {
    // Appel de la liste des pays synchronisée
    this.getlexiqueSynchro();
  },
  methods: {
    async getlexiqueSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dblexique = collection(firestore, "lexique");
      // Liste des pays synchronisée
      const query = await onSnapshot(dblexique, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listelexiqueSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createLexique() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dblexique = collection(firestore, "lexique");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dblexique, {
        nom: this.nom,
        def: this.def,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updatelexique(lexique) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "lexique", lexique.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: lexique.nom,
        def: lexique.def,
      });
    },

    async deletelexique(lexique) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "lexique", lexique.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>