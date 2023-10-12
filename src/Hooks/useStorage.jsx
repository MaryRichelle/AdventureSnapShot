import { useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../Authentication/Firebase"
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // references
    const storage = getStorage(app);
    const storageRef = ref(storage, 'images');
    const fileRef = ref(storageRef, file.name);

    // Upload file in chunks of bytes
    const uploadTask = uploadBytesResumable(fileRef, file);

    // Get a reference to the Firestore collection
    const firestore = getFirestore(app);
    const collectionRef = collection(firestore, 'images');

    uploadTask.on("state_changed", (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadURL = await getDownloadURL(fileRef); // getting url
      const createdAt = serverTimestamp();
      const data = { url: downloadURL, createdAt };
      const docRef = await addDoc(collectionRef, data);
      setUrl(downloadURL);
    });
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
