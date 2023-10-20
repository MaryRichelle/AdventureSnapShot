import { useState, useEffect } from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {  collection, addDoc, serverTimestamp } from "firebase/firestore";
import {  storage, projectFirestore } from "../Authentication/Firebase"
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // references
    const storageRef = ref(storage, 'images');
    const fileRef = ref(storageRef, file.name);

    // Upload file in chunks of bytes
    const uploadTask = uploadBytesResumable(fileRef, file);


    const collectionRef = collection(projectFirestore, 'images');

    uploadTask.on("state_changed", (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadURL = await getDownloadURL(fileRef); // getting url
      const createdAt = serverTimestamp();
      const data = { url: downloadURL, createdAt };
       await addDoc(collectionRef, data);// add collection to storage 
      setUrl(downloadURL);
    });
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
