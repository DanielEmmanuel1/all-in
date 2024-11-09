import ForwardArrow from "./ForwardArrow";

// import Image from "next/image";
const Footer = () => {
    return (
        <div className="flex flex-col items-center relative border-b border-gray-400/40">
            <div className="flex items-center gap-2">
                <p className="opacity-60 text-sm">Ready to work with us?</p>
                <div className="absolute right-14">
                    <ForwardArrow />
                </div>
            </div>
            <p className="text-[3rem] font-bold">Let&apos;s talk</p>
        </div>
    );
}

export default Footer;