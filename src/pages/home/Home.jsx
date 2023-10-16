import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MyNavbar from "../../Layout/navbar/MyNavbar";
import Card from "./Card";

import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

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
        <div className="flex gap-8 items-center min-h-screen px-6">
         
         
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Navigation]}

              className="mySwiper"
            >

            {
                data.map(d => <SwiperSlide key={d.id}>
                  
                <Card data={d} />
              </SwiperSlide>)
              }
            </Swiper>
          </div>
      </main>
    </div>
  )
}
