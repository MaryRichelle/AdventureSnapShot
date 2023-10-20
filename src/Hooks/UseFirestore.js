import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { projectFirestore as db } from "../Authentication/Firebase"


const UseFirestore = (imagesCollection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {
        const querySnapshot = await getDocs(collection(db, imagesCollection))
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(),id: doc.id})
        });
        setDocs(list)
        console.log(list)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  }, [imagesCollection])
  return docs
}

export default UseFirestore







