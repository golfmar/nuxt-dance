import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/composables/firebase.ts";

export function useFetchDocuments(collectionName) {
  const documents = ref([]);

  const fetchDocuments = async () => {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    documents.value = querySnapshot.docs.map((docSnapshot) => ({
      id: docSnapshot.id.replace(/\s+/g, "--"),
    }));
  };

  fetchDocuments();

  return {
    documents,
  };
}


