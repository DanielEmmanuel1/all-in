import Image from "next/image";
import RightArrow from "../../public/assets/arrow-right.png"

const ForwardArrow = () => {
    return ( 
        <div className="bg-[#BFACEE] w-fit p-2 rounded-full">
            <Image src={RightArrow} alt="logo" width={20} height={30}/>
        </div>
     );
}
 
export default ForwardArrow;