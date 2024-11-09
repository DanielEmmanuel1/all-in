import Image from "next/image";
import RightArrow from "../../public/assets/arrow-right.svg"
import KeepScrolling from "../../public/assets/Keep-Scrolling.svg"
import Arrow from "../../public/assets/Arrow.svg"

const Heropage = () => {
    return (
        <div className="py-12">
            <h1 className="text-center font-semibold text-[40px] leading-[1em] text-[#E2D9F7]">The growth tool for businesses</h1>
            <p className="text-center text-md py-6 px-4 opacity-60">Join over 300 thriving enterprises in Nigeria and beyond. At All-in, we are revolutionizing business operations with the use of technology.</p>

            <div className="flex justify-center bg-[#BFACEE] gap-3 max-w-fit px-3 py-2 rounded-lg mx-auto">
                <button className="text-black font-medium">Contact Us</button>
                <Image src={RightArrow} alt="right-arrow" width={30} height={30} />
            </div>

            <div className="flex justify-center py-10">
                <Image className="relative animate-spin-slow" src={KeepScrolling} alt="keep-scrolling" width={200} height={100}/>
                <Image className="absolute top-[64%]" src={Arrow} alt="keep-scrolling" width={60} height={100} />
            </div>
        </div>
    );
}

export default Heropage;