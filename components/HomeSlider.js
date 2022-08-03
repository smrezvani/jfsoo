import Image from "next/future/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeSlider = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h3 className="text-slate-300 text-3xl self-start">
          {props.sectionTitle}
        </h3>
        <Swiper
          slidesPerView={8}
          spaceBetween={16}
          className="recomanded-titles mt-2 w-full h-full"
        >
          {props.data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={item.link}>
                  <a className="flex flex-col items-center justify-center">
                    <Image
                      width={400}
                      height={600}
                      src={item.poster}
                      alt={item.title}
                      className="aspect-[2/3]"
                    />
                    <h4 className="text-slate-300 text-xl mt-2">
                      {item.title}
                    </h4>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
