import Navigate from './nav';
const Hero = () => {
    return ( 
        <div className='flex flex-col overflow-hidden relative items-center'>
            {/* The grid */}
            <div className='w-fit h-fit grid grid-cols-6  sm:grid-cols-8 bg-black self-center'>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)] '></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 sm:bg-[#131718] bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[#131718] sm:bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-1 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 sm:bg-[#131718] bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)] '></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718] hover:bg-[rgba(255,255,255,0.30)] transition duration-300 ease-in-out'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0 border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0   border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='hidden sm:block border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
            </div> 
            <div className='md:block absolute -top-70 rounded-full h-[1026px] w-[1026px]  class="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(22,22,24,0)_0%,rgba(22,22,24,1)_46.59%)] bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_44.59%)] sm:max-md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_50.59%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_60.59%)] bg-transparent b' > </div>
            <Navigate/>
            {/* HEroText */}
            <div className='z-1 absolute top-[20%]  lg:top-[22%] md:max-lg::top-[30%] text-white w-[100%] sm:max-lg:w-[90%] lg:w-[63%] flex flex-col gap-y-5 items-center '>
                <h1 className='font-bold  text-3xl/12 sm:max-md:text-4xl/15 md:text-5xl/18 text-center p-2 font-redHat '>Empowering the Next Generation of Cyber Defenders to Protect, Innovate, and Lead in a Secure Digital World.</h1>
                <p className='text-xs w-fit text-center text-[#6B7275] text-[color(display-p3_0.424_0.4469_0.4583)] font-inter'>Shaping Tomorrow’s Cybersecurity Leaders with Cutting-Edge Skills and Unwavering Commitment.
                </p>
                <div className='flex gap-x-6 justify-center'>
                    <div className='flex items-center justify-center  rounded-3xl border border-[rgba(255,255,255,0.40)]
                    border-[color(display-p3_1_1_1/0.40)]
                    bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)]
                    bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] sm:max-md:px-1  h-13 w-40 lg:w-40'>
                        <a href="" className=' sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold flex justify-center'>
                        Join Community
                        </a>
                    </div>
                    <div className='flex items-center justify-center rounded-3xl  border border-[#FEFEFE] sm:max-md:px-1  h-13 w-40 lg:w-40'>
                        <a href="" className=' sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold flex justify-center'>
                            Watch a demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
     );
}
 
export default Hero;