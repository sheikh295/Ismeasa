import React, { useEffect, useState } from 'react'
import Chart, { CategoryScale } from 'chart.js/auto'
import { getDatabase, ref, child, get } from "firebase/database"
import { fbapp } from 'shared/Firebaseapp'
import { Line } from "react-chartjs-2";
import { Circles } from  'react-loader-spinner'

Chart.register(CategoryScale);

export default function DashboardChart() {

    const [dbData, setDbData] = useState([]);
    const [loading, setLoading] = useState(true)
    let taps = [];

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

    dbData.map((dbData, index) => {
        if (dbData != null/undefined/'empty') {
            taps.push(dbData.Taps)
        }
    })

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'NFC Weekly Tap Detail',
                data: taps,
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)',
                    'rgba(255, 255, 255, 0.6)',
                    'rgba(255, 255, 255, 0.6)',
                  ],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    }

  return (
    <div>
        <div className='h-[500px] w-[90%] m-auto'>
            <Line width={'300%'} height={'120%'} data={data} />
        </div>
        {loading ? <div className='w-[120px] m-auto translate-y-[-360px]'>
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
