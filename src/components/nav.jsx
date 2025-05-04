import logo from '../img/logo.png';
const navigate = () => {
    return (
        <div className='absolute text-white flex items-center justify-between w-full py-3 pl-30 pr-20 gap-x-20 bg-[#131718] font-inter'>
            <div className=' w-fit'>
               <a href="">
               <img src={logo} alt="" srcset="" />
               </a>
            </div>
            <div className='flex items-center w-[70%] justify-between'>
                <ul className='flex gap-x-10'>
                    <li><a href="">About</a></li>
                    <li><a href="">Partners</a></li>  
                    <li><a href="">Blog</a></li>
                    <li><a href="">Event</a></li>
                    <li><a href="">Teams</a></li>
                </ul>
                <a href="" className='border py-2.5 px-5 rounded-3xl text-[#FEFEFE] font-semibold border border-[rgba(255,255,255,0.40)]
                border-[color(display-p3_1_1_1/0.40)]
                bg-[linear-gradient(180deg,_#4343F1_0%,_#00F_100%)]
                bg-[linear-gradient(180deg,_color(display-p3_0.2611_0.2611_0.9083)_0%,_color(display-p3_0_0_1)_100%)]'>
                    Join Community
                </a>
            </div>
            </div>
    )
}
 
export default navigate;