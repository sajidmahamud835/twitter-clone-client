import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

const Sideber = () => {
    const MenuItems = [
        { text: "Home", Icon: HomeIcon },
    ]
    return (
        <div>
            {/* Logo */}
            <div>
                <Image width="50" height="50" src="/image/twitterLogo.png"></Image>
            </div>

            {/* Menu */}
            {
                MenuItems.map(item => <SidebarMenuItem text={item.text} Icon={item.Icon} />)

            }
            {/* Button */}

            {/* User Profile */}
        </div>
    );
};

export default Sideber;