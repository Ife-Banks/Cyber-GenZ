import logo from '../img/logo.png';
const navigate = () => {
    return (
        <div className='absolute text-white flex items-center justify-between w-full py-3 px-5 md:max-lg:pl-10 lg:pl-30 md:max-lg:pr-10 lg:pr-20  lg:gap-x-20 bg-[#131718] font-redHat z-2'>
            <div className=' w-fit'>
               <a href="">
               <img src={logo} alt="" srcset=""/>
               </a>
            </div>
            <div className=' flex items-end sm:items-center w-[70%] sm:max-md:justify-evenly md:justify-between flex-col sm:flex-row z-2 gap-x-2'>
                <ul className='sm:flex gap-x-5 lg:gap-x-12 flex-col sm:flex-row hidden '>
                    <li><a href="">About</a></li>
                    <li><a href="">Partners</a></li>  
                    <li><a href="">Blog</a></li>
                    <li><a href="">Event</a></li>
                    <li><a href="">Teams</a></li>
                </ul>
                <a href="" className='border py-2.5 px-5 sm:max-md:px-1 rounded-3xl w-fit 
               sm:max-md:w-[30%] sm:max-md:text-xs md:text-sm text-[#FEFEFE] font-semibold border border-[rgba(255,255,255,0.40)]
                border-[color(display-p3_1_1_1/0.40)]
                bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)]
                bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)] flex justify-center'>
                    Join Community
                </a>
            </div>
            </div>
    )
}
 
export default navigate;