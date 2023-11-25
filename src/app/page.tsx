import Image from 'next/image'

import ImageDesktop from '@/assets/images/image-product-desktop.jpg';
import IconCart from '@/assets/images/icon-cart.svg';

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-[#F2EAE2] p-4 sm:p-0'>
      <div className='flex flex-col sm:flex-row rounded-[0.625rem] bg-white h-full sm:h-[28rem] sm:w-[37rem]'>
        <div className='sm:w-1/2 sm:h-full'>
          <div className='relative h-[20rem] sm:h-full  sm:rounded-l-[0.625rem]'>
            <Image src={ImageDesktop} alt='image-product-desktop' fill className='rounded-t-[0.625rem] sm:rounded-l-[0.625rem] sm:rounded-tr-none bg-cover'/>
          </div>
        </div>
        <div className='p-8 h-1/2 w-full sm:w-1/2 flex flex-col gap-6'>
          <div className='flex flex-col gap-5'>
            <div className='text-[#6C7289] font-monserat text-[0.75rem] font-medium'>PERFUME</div>
            <div className='text-[#1C232B] font-bold font-fraunces text-[2rem] leading-[2rem]'>Gabrielle Essence Eau De Parfum</div>
          </div>
          <div className=''>
            <div className='flex flex-col gap-4'>
              <div className='font-monserat text-[#6C7289] font-medium text-[0.875rem] leading-[1.4375rem]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
              <div className='flex gap-4 items-center'>
                <span className='text-[#3D8168] font-bold text-[2rem]'>$149.99</span>
                <span className='text-[#6C7289] text-[0.8125rem] font-medium line-through'>$169.99</span>
              </div>
            </div>
            <div></div>
          </div>
        <button className='flex items-center justify-center gap-3 text-white bg-[#3D8168] p-4 rounded-lg'>
          <div className="relative h-4 w-4">
            <Image src={IconCart} alt='icon-cart' fill/>
          </div>
          <div className='text-[0.875rem] font-bold font-monserat'>Add to Cart</div>
        </button>
        </div>
      </div>
    </main>
  )
}
