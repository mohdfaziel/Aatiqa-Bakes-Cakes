export default function Buy({icon})
{
    return (
        <div className="w-9 relative flex justify-center items-center h-9 bg-main rounded-full">
            <img src={icon} className="w-6 h-6" alt="" />
            <div className="dot w-[8px] h-[8px] bg-[#F8D6FF] rounded-full absolute top-[0px] right-[4px] "></div>
        </div>
    )
}