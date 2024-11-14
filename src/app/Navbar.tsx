import Image from "next/image";
import Logo from '../../public/assets/ALL-IN LOGO.svg'
import Menu from '../../public/assets/menu-icon.svg'
import ContactButton from "./ContactButton";

const Navbar = () => {
    return ( 
        <div className="flex justify-between py-6 px-3 border w-full">
            <Image src={Logo} alt="logo" width={100} height={100}/>
            <Image className="md:hidden" src={Menu} alt="logo" width={30} height={100}/>

            <div className="hidden md:flex gap-3 justify-between items-center basis-[70%]">
                <p className="opacity-60">Who are we</p>
                <ContactButton />
            </div>
        </div>
     );
}
 
export default Navbar;