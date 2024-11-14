import Image from "next/image";
import Brand1 from "../../public/assets/brand1.png";
import Brand2 from "../../public/assets/brand2.png";
import Brand3 from "../../public/assets/brand3.png";
import Brand4 from "../../public/assets/brand4.png";
import Brand5 from "../../public/assets/brand5.png";
import Brand6 from "../../public/assets/brand6.png";

const Brand = () => {
    return ( 
        <div className="pb-14">
            <p className="text-center pt-14 pb-8">BRANDS WE HAVE WORKED WITH</p>
            <div className="grid grid-cols-3 gap-3">
                <Image src={Brand1} alt="" width={100} height={100}/>
                <Image src={Brand2} alt="" width={100} height={100}/>
                <Image src={Brand3} alt="" width={100} height={100}/>
                <Image src={Brand4} alt="" width={100} height={100}/>
                <Image src={Brand5} alt="" width={100} height={100}/>
                <Image src={Brand6} alt="" width={100} height={100}/>
            </div>
        </div>
     );
}
 
export default Brand;