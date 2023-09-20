import React, { useEffect, useState } from 'react'
import AllTablesHeader from './components/Header'
import NfcTapItem from './components/NfcTapItem'
import { getDatabase, ref, child, get } from "firebase/database"
import { fbapp } from 'shared/Firebaseapp'
import { Circles } from  'react-loader-spinner'

export default function AllTables() {

  const [dbData, setDbData] = useState([]);
  const [loading, setLoading] = useState(true)

  const dbRef = ref(getDatabase(fbapp));
  useEffect(() => {
      get(child(dbRef, `nfcDetails/`)).then((snapshot) => {
        if (snapshot.exists()) {
            setDbData(snapshot.val());
            setLoading(false);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <div className='w-[97%] m-auto'>
        <AllTablesHeader />
        <div className='grid grid-cols-4 gap-5'>
            {dbData.map((dbData, index) => {
                if (dbData != null/undefined/'empty') {
                    return <NfcTapItem key={index} taps={dbData.Taps} />
                }
            })}
        </div>
        {loading ? <div className='w-[120px] m-auto mt-28'>
        <Circles
            height="80"
            width="80"
            color="#1f1f1f"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div> : ''}
    </div>
  )
}
