import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../../Layout/navbar/MyNavbar";
import Form from "./Form";

export default function Booking() {
    const { id } = useParams()
    const [findData, setFindData] = useState({})

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                const find = data.find(d => d.id == id)
                console.log(find)
                setFindData(find)
            })
    },[])
    return (
      <>
        <MyNavbar />
            <main className="max-w-7xl mx-auto">
                <section className="flex gap-8 items-center min-h-[80vh]">
                    <div className="flex-1">
                        <h1 className="text-4xl font-semibold font-title-font mb-4">{ findData.tourist_destination }</h1>
                        <p >{ findData.destination_definition_details }</p>
                    </div>
                    <div className="flex-1">
                        <Form value={findData.tourist_destination}/>
                    </div>
                </section>
            </main>
      </>
  )
}
