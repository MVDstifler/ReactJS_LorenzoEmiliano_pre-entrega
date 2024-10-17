import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';  


export const fetchItemById = async (id) => {
  try {
    const itemRef = doc(db, "items", id);  
    const itemSnap = await getDoc(itemRef);

    if (itemSnap.exists()) {
      return { id: itemSnap.id, ...itemSnap.data() };  
    } else {
      throw new Error("Item no encontrado");
    }
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw new Error("Failed to fetch item details");
  }
};
