import Image from "next/image";
import KeepScrolling from "../../public/assets/Keep-Scrolling.svg"
import Arrow from "../../public/assets/Arrow.svg"
import ContactButton from "./ContactButton";
const Heropage = () => {
    return (
        <div className="py-12">
            <h1 className="text-center font-semibold text-[40px] leading-[1em] text-[#E2D9F7] lg:text-[90px] lg:max-w-[50%] lg:mx-auto">The growth tool for businesses</h1>
            <p className="text-center text-md py-6 px-4 opacity-60 lg:text-[20px] lg:max-w-[50%] lg:mx-auto">Join over 300 thriving enterprises in Nigeria and beyond. At All-in, we are revolutionizing business operations with the use of technology.</p>

            <div className="block md:hidden">
                <ContactButton />
            </div>

            <div className="flex justify-center py-10">
                <Image className="relative animate-spin-slow" src={KeepScrolling} alt="keep-scrolling" width={150} height={100} />
                <Image className="absolute top-[60%]" src={Arrow} alt="keep-scrolling" width={40} height={100} />
            </div>
        </div>
    );
}

export default Heropage;