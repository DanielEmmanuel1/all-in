import Image from "next/image";
import Logo from '../../public/assets/ALL-IN LOGO.svg'
import Menu from '../../public/assets/menu-icon.svg'

const Navbar = () => {
    return ( 
        <div className="flex justify-between py-6 px-3">
            <Image src={Logo} alt="logo" width={100} height={100}/>
            <Image src={Menu} alt="logo" width={30} height={100}/>
        </div>
     );
}
 
export default Navbar;