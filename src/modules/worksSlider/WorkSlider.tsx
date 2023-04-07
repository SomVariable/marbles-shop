
import './WorkSlider.scss';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



const WorkSlider = () => {
  const img = [
    {src:img1, id: 1 },
    {src:img2, id: 2 },
    {src:img3, id: 3 },
    {src:img1, id: 4 },
    {src:img3, id: 5 },
  ]

  return (
    <section className='slider'>
      <div className="container">
        <h3 className="works">
        Наши работы
        </h3>
          <Swiper className='swiper-container'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={false}
            scrollbar={false}
            spaceBetween={15}
            slidesPerView={1.5}
            grabCursor = {true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
            320: {
              /* width: 320, */
              slidesPerView: 1.5,
            },
            568: {
              /* width: 568, */
              slidesPerView: 2,
            },
            768: {
            /*  width: 768, */
              slidesPerView: 2.5,
            },
            992: {
              /* width: 992, */
              slidesPerView: 3,
            },
            1200: {
              /* width: 1200, */
              spaceBetween: 25,
              slidesPerView: 3.5,
            },
          }}
        >
        {
          img.map(({src, id}) => {
            return (<SwiperSlide className='img' key={id}><img src={src} alt="You will see our works" /></SwiperSlide>)
          })
        }
      </Swiper>
      </div>
    </section>
  );
}
export default WorkSlider;