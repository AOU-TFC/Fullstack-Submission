import { firestore } from "API/firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

async function createTask(taskInfo) {
  try {
    let location;
    if (window.location.pathname.includes("/react-tasks")) {
      location = "React";
    } else if (window.location.pathname.includes("/express-tasks")) {
      location = "Express";
    }
    // Check if a task with the same TaskId already exists
    const taskDocRef = doc(firestore, location, taskInfo.TaskId);
    const taskDoc = await getDoc(taskDocRef);

    if (taskDoc.exists()) {
      console.error(`Task with ID ${taskInfo.TaskId} already exists.`);
      alert(`Task with ID ${taskInfo.TaskId} already exists.`);
    } else {
      await setDoc(taskDocRef, {
        TaskName: taskInfo.TaskName,
        TaskID: taskInfo.TaskId,
        Submissions: taskInfo.Submissions,
        createdAt: new Date(),
      });
      alert("Task added to Firestore!");
    }
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

async function findTaskCollections(taskID) {
  const collections = ["React", "Express"];
  for (const collectionName of collections) {
    const tasksCollection = collection(firestore, collectionName);
    const firebase_query = query(
      tasksCollection,
      where("TaskID", "==", taskID)
    );
    const querySnapshot = await getDocs(firebase_query);

    if (!querySnapshot.empty) {
      // const taskDoc = querySnapshot.docs[0];
      // return { taskDocRef: taskDoc.ref, collectionName };
      return querySnapshot.docs[0].ref;
    }
  }
  return null;
}

async function addSubmission(taskID, formData) {
  try {
    const taskDocRef = await findTaskCollections(taskID);
    if (taskDocRef) {
      await updateDoc(taskDocRef, {
        Submissions: arrayUnion(formData),
      });
      alert("Submission added!");
    }
  } catch (error) {
    console.error("Error adding submission:", error);
  }
}

export { createTask, addSubmission };
