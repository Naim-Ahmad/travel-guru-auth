/* eslint-disable react/prop-types */
import { SwiperSlide } from "swiper/react";


export default function Slider({ data }) {
    console.log(data)
  return (
    <>
       <SwiperSlide>
            <div className="text-white">
                <h1>hello</h1>
                <img src={data.destination_image} alt="" />
            </div>
        </SwiperSlide>
        
    </>
  );
}
