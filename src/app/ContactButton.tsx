import Image from "next/image";
import RightArrow from "../../public/assets/arrow-right.svg"

const ContactButton = () => {
    return (
        <div>
            <div className="flex justify-center bg-[#BFACEE] gap-3 max-w-fit px-3 py-2 rounded-lg mx-auto">
                <button className="text-black font-medium">Contact Us</button>
                <Image src={RightArrow} alt="right-arrow" width={30} height={30} />
            </div>
        </div>
    );
}

export default ContactButton;