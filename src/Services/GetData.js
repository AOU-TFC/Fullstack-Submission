import { firestore } from "API/firebase";
import { collection, getDocs } from "firebase/firestore";

async function getData() {
  try {
    let location;
    if (window.location.pathname.includes("/react-tasks")) {
      location = "React";
    } else if (window.location.pathname.includes("/express-tasks")) {
      location = "Express";
    }
    const collectionRef = collection(firestore, location);
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export { getData };
