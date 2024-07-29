import { useRef, useState } from 'react'
import './App.css'
import Loader from './Loader'
import './HorizontalScroll.css'

function App() {
  const [loading, setLoading] = useState(true)
  const scrollRef:any = useRef(null)

  const handleWheel = (e: any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 10;
    }
  };

  return (
    <>
      <div className='h-screen w-screen flex flex-col gap-12 bg-amber-900' onWheel={handleWheel}>
        { loading && <Loader/> }
        
        <video autoPlay muted loop preload="auto" onCanPlay={()=>setLoading(false)} className='fixed object-cover h-screen w-screen'>
          <source src="/coffee.mp4" type="video/mp4"/>
        </video>

        <div className='absolute top-0 left-0 mt-2 ml-2 px-4 z-[10] flex gap-2 items-center group hover:bg-white rounded-full cursor-default transition'>
          <img src="logo.svg" className='w-8 h-8'/>
          <p className='text-white uppercase playwrite-dk-loopet group-hover:text-amber-800 transition'>office brew</p>
        </div>

        <div className='text-3xl sm:text-6xl lg:text-8xl mx-[10vw] mt-[8vh] text-white font-bold playwrite-dk-loopet animate-hero-text'>
          <p className='text-nowrap md:mb-4'>Brewing your</p>
          <p className='text-nowrap bg-amber-600 pb-6'>favorite coffee</p>
        </div>

        <div
          ref={scrollRef}
          className="flex flex-col lg:flex-row overflow-x-auto whitespace-nowrap w-full h-full z-[100] no-scrollbar lg:gap-16"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className='
            flex-none w-full lg:w-1/2 animate-left overflow-hidden lg:rounded-r-lg
            flex items-center justify-center h-64 lg:h-auto 
            text-center text-white cursor-pointer group
          '>
            <img src="landing.jpg" className='absolute w-full h-full object-cover aspect shadow-xl rounded-r-lg contrast-[90%] group-hover:contrast-50 group-hover:scale-[1.2] transition' loading="eager"/>

            <div className='backdrop-filter backdrop-saturate-50 bg-zinc-800/65 w-full z-10 flex flex-col gap-4 p-6'>
              <p className="text-2xl md:text-4xl uppercase group-hover:scale-[1.05] transition">Our story</p>
              <p className='text-xl md:text-2xl mx-[3vw] group-hover:scale-[1.05] transition text-wrap'>"It started in a little coffee shop, where the aroma of freshly brewed coffee mingled with the hum of conversation and the clink of cups."</p>
            </div>

          </div>

          <div className='
            flex-none w-full lg:w-1/2 animate-right overflow-hidden lg:rounded-lg
            flex items-center justify-center h-64 lg:h-auto 
            text-center text-white cursor-pointer group
          '>
            <img src="latte.jpg" className='absolute w-full h-full object-cover aspect shadow-xl lg:rounded-lg contrast-[90%] group-hover:contrast-50 group-hover:scale-[1.2] transition' loading="eager"/>
            <div className='z-10 w-1/2 absolute right-0 pr-[3vw] mr-[2vw] '>
              <p className="text-4xl md:text-7xl uppercase group-hover:scale-[1.05] transition py-2 border border-l-0 group-hover:border-0 group-hover:underline">Menu</p>
            </div>
          </div>

          <div className='
            flex-none w-full lg:w-1/2 animate-right overflow-hidden lg:rounded-l-lg
            flex items-center justify-end h-64 lg:h-auto 
            text-center text-white cursor-pointer group
          '>
            <img src="contact.jpg" className='absolute w-full h-full object-cover aspect shadow-xl lg:rounded-l-lg contrast-[90%] group-hover:contrast-50 group-hover:scale-[1.2] transition' loading="eager"/>
              <div className='
                z-10 w-full xl:w-1/2 p-6 backdrop-filter backdrop-saturate-50 bg-zinc-800/65 h-full
                flex justify-center items-center
              '>
                <div className='flex flex-col gap-4 '>

                  <p className="text-3xl lg:text-5xl uppercase group-hover:scale-[1.05] transition ">Contact Us</p>

                  <div className='flex items-center gap-8'>
                    <img src="phone.svg" className='w-8 h-8'/>
                    <p className='text-2xl'>+1 234 567 890</p>
                  </div>

                  <div className='flex items-center gap-8'>
                    <img src="email.svg" className='w-8 h-8'/>
                    <p className='text-2xl'>
                      officebrew@coffee.com
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
