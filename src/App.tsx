import { Logo } from './components/Logo';
import illustrationApp from './assets/images/illustration-app.png'
import appleIcon from './assets/icons/icon-apple.svg'
import androidIcon from './assets/icons/icon-android.svg'
import bodyBgPattern from './assets/images/bg-pattern-2.svg'

function App() {
  return (
    <div className='xl:min-h-[1800px] bg-mobile bg-no-repeat md:bg-tablet xl:bg-desktop h-screen'>
      <div className='py-10 px-6 md:py-[3.875rem] md:px-10 xl:px-40'>
        <Logo />
      </div>

      <div className='text-[#191826] px-6 mt-4 md:max-w-[72%] md:pr-0 md:pl-[39px] md:mt-9 xl:pl-40 xl:max-w-[71%] xl:mt-14'>
        <h1 className="font-bold text-[2.5rem] leading-[3rem] md:text-[4rem] md:leading-none xl:text-[5.5rem]">
          We make your music sound extraordinary.
        </h1>
        <p className='leading-[1.625rem] md:text-lg xl:text-xl xl:leading-[2.125rem] mt-5 md:mt-7 xl:mt-10'>
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </div>

      <div className='relative mt-44 rounded-xl md:mx-8 h-[600px] bg-[#191826] sm:mt-60 xl:mx-40 xl:mt-80'>
        <img src={bodyBgPattern} alt="" className='absolute left-1/2 -translate-x-1/2 w-[280px] xl:-translate-x-3/4 xl:w-[312px] md:-translate-y-8 xl:-translate-y-10' />
        <img src={illustrationApp} alt="smartphone" className='w-[208px] mx-auto -translate-y-[23%] md:w-[270px] xl:w-[312px] md:-translate-x-[60%] xl:-translate-x-full xl:-translate-y-1/3' />
        <div className='text-white bg-[#FA7453] px-9 py-12 xl:pt-14 rounded-xl md:max-w-[399px] xl:max-w-[447px] md:right-14 md:px-12 lg:px-14 -translate-y-11 mx-auto md:-translate-y-[72%] md:translate-x-20 max-w-md xl:translate-x-1/2 xl:-translate-y-[87%]'>
          <h2 className='font-bold text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3.25rem]'>
            Premium EQ
          </h2>
          <p className='text-lg xl:text-xl xl:leading-[2.125rem] mt-3 xl:mt-[1.375rem]'>
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!
          </p>
          <p className='font-bold text-[4rem] leading-[3.25rem] mt-9 xl:mt-10'>
            $4
            <span className='font-normal text-xl leading-[2rem] -tracking-[0.2px] ml-4'>
              /month
            </span>
          </p>
          <button className='font-bold text-lg leading-[2rem] -tracking-[0.18px] flex bg-[#191826] py-4 mx-auto w-full max-w-[18.5rem] justify-center gap-2 items-center rounded-xl xl:w-[20.8rem] mt-8 xl:mt-[2.875rem] hover:bg-[#66E2DC]'>
            <img src={appleIcon} alt="apple icon" />
            iOS Download
          </button>
          <button className='font-bold text-lg leading-[2rem] -tracking-[0.18px] text-[#191826] flex bg-white py-4 mx-auto w-full max-w-[18.5rem] justify-center gap-2 items-center rounded-xl xl:w-[20.8rem] mt-4 hover:bg-[#FFB964]'>
            <img src={androidIcon} alt="android icon" />
            Android Download
          </button>
        </div>
        
        
        <div className='mt-5 px-6 leading-[26px] md:-translate-y-[340px] pb-20 grid xl:-translate-y-[470px] xl:pb-20'>
          <Logo />
          <div className='md:col-start-1 xl:col-start-2 md:mt-8 xl:mt-0'>
            <p>
              All rights reserved © Equalizer 2021
            </p>
            <p className='max-w-[366px]'>
              Have any problems? Contact us via social media or email us at &nbsp;
              <span className='font-bold block md:inline'>
                equalizer@example.com
              </span>
            </p>
          </div>
          <div className='flex mt-16 gap-5 md:m-0 md:col-start-2 md:self-center md:justify-self-end xl:col-start-3'>
            <i className="fa-brands fa-square-facebook text-2xl hover:text-[#FA7453] cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-2xl hover:text-[#FA7453] cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-2xl hover:text-[#FA7453] cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
