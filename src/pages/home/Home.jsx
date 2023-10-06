import { useEffect, useState } from "react";
import MyNavbar from "../../Layout/navbar/MyNavbar";
import Card from "./Card";


export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(d => {
        setData(d)
    })
  }, [])

  

  return (
      <div className="bg-image min-h-screen">
          <MyNavbar classes={'bg-transparent text-white'}/>
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-8 items-center min-h-screen px-6">
          {
            data.slice(0, 4).map(d=> <Card key={d.id} data={d} />)
          }
        </div>
      </main>
    </div>
  )
}
