export default function Social({icon,link})
{
    return (
       <a href={link} target="_blank">
         <div className="w-9 hover:scale-105 transition-all cursor-pointer relative flex justify-center items-center h-9 bg-main rounded-full">
            <img src={icon} className="w-6 h-6" alt="" />
            <div className="dot w-[8px] h-[8px] bg-[#F8D6FF] rounded-full absolute top-[0px] right-[4px] "></div>
        </div>
       </a>
    )
}