import Image from "next/image";

import ForwardArrow from "./ForwardArrow";
import Twitter from "../../public/assets/twitter.svg";
import Copy from "../../public/assets/copy.svg";
import Instagram from "../../public/assets/insta.svg";
import Whatsapp from "../../public/assets/whatsapp.svg";



const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center relative py-8">
                <div className="flex items-center gap-2">
                    <p className="opacity-60 text-sm">Ready to work with us?</p>
                    <div className="absolute right-20">
                        <ForwardArrow />
                    </div>
                </div>
                <p className="text-[3rem] text-center font-bold border-b w-full border-gray-400/40">Let&apos;s talk</p>
            </div>

            <div className="flex gap-3">
                <Image src={Twitter} alt="Twitter-icon" width={30} height={30} />
                <Image src={Copy} alt="Copyright-icon" width={30} height={30} />
                <Image src={Instagram} alt="Twitter-icon" width={30} height={30} />
                <Image src={Whatsapp} alt="Whatsapp-icon" width={30} height={30} />
            </div>

            <div>
                <p className="text-start text-lg py-8">© 2024 All-in. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;