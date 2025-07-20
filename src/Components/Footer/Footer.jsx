import Social from "./Social";

export default function Footer()
{
    return (
        <div className="w-full bg-dark1 h-[6rem] flex flex-col gap-2 justify-center items-center">
            <p className="text-unactive text-sm">Design & Built by <a href="https://faziel.vercel.app/" target="_blank"><span className="text-active ">Mohd Faziel</span></a> © 2024</p>
            <Social/>
        </div>
    )
}