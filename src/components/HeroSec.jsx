import Navigate from './nav';
const Hero = () => {
    return ( 
        <div className='flex flex-col overflow-hidden relative items-center'>
            {/* The grid */}
            <div className='w-fit h-fit grid grid-cols-6  sm:grid-cols-8 bg-black self-center'>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border border-l-0  border-t-0  border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
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
                <div className='border-1 border-t-0  border-white/3 h-19 w-18 bg-[rgba(255,255,255,0.30)]'></div>
                <div className='border-l-0 border-t-0  border border-[rgba(255,255,255,0.30)] h-19 w-18 bg-[#131718]'></div>
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
            <div className='md:block absolute -top-70 rounded-full h-[1026px] w-[1026px]  class="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(22,22,24,0)_0%,rgba(22,22,24,1)_46.59%)] bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_44.59%)] sm:max-md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_50.59%)] md:bg-[radial-gradient(50%_50%_at_50%_50%,color(display-p3_0.0863_0.0863_0.0941/0)_0%,color(display-p3_0.0863_0.0863_0.0941)_60.59%)] bg-transparent' > </div>
            <Navigate/>
            {/* HEroText */}
            <div className='z-1 absolute top-[20%]  lg:top-[25%] md:max-lg::top-[30%] text-white w-[100%] sm:max-lg:w-[90%] lg:w-[65%] font-bold  text-3xl/12 sm:max-md:text-4xl/15 md:text-5xl/18 text-center px-2 font-redHat text-shadow-sm text-shadow-white'>
                <h1>Empowering the Next Generation of Cyber Defenders to Protect, Innovate, and Lead in a Secure Digital World.</h1>
            </div>
        </div>
       
     );
}
 
export default Hero;