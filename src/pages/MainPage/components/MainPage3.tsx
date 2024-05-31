import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { RSS } from '~/services/api/model/RSSModel'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/grid'

import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules'
export default function MainPage3(props: { data: RSS[] }) {
  if (props.data.length === 0) {
    return <BeatLoader />
  }

  return (
    <div className='mt-[30px]'>
      <div className='flex items-end gap-x-2'>
        <h2 className='text-primaryColor font-bold text-[19px] whitespace-nowrap'>{props.data[0].category}</h2>
        <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
        grid={{
          rows: 3,
          fill: 'row'
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        className='container mt-5'
      >
        {props.data.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className='flex items-center gap-4'>
              <Link className='block w-1/2' to={`/detail/${item.link?.split('/').pop()}`}>
                <img src={item.image} className='w-full aspect-video object-cover' alt='' />
              </Link>
              <h3 className='font-semibold w-1/2 hover:text-primaryColor cursor-pointer'>
                <Link to={`/detail/${item.link?.split('/').pop()}`}>{item.title}</Link>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 mt-5'></div> */}
    </div>
  )
}
