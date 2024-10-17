import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from './firebaseConfig';  


export const fetchItems = async (categoryId) => {
  try {
    const itemsCollection = collection(db, "items");
    
    // Si se pasa un categoryId, creamos una query con un filtro de categoría
    let q;
    if (categoryId) {
      q = query(itemsCollection, where("categoryId", "==", categoryId));
    } else {
      q = query(itemsCollection);
    }


    const querySnapshot = await getDocs(q);
    

    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return items;
  } catch (error) {
    console.error("Error fetching items from Firebase:", error);
    throw new Error("Failed to fetch items");
  }
};
