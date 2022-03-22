import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

const Thumbnails = () => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      showStatus={false}
      infiniteLoop
      className="mx-auto mt-4 h-[224px] w-[85%] rounded-lg"
    >
      <div className="h-[224px] w-full">
        <Image
          src="/images/carousel/mensFashion.png"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div className="h-[224px] w-full">
        <Image
          src="/images/carousel/womensFashion.png"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div className="h-[224px] w-full">
        <Image
          src="/images/carousel/electronics.png"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div className="h-[224px] w-full">
        <Image
          src="/images/carousel/jewelry.png"
          className="rounded-lg"
          layout="fill"
        />
      </div>
    </Carousel>
  )
}

export default Thumbnails
