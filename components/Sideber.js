import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

const Sideber = () => {
    return (
        <div>
            {/* Logo */}
            <div>
                <Image width="50" height="50" src="/image/twitterLogo.png"></Image>
            </div>

            {/* Menu */}
            <div>
                <SidebarMenuItem text="Home" Icon={HomeIcon} />
            </div>

            {/* Button */}

            {/* User Profile */}
        </div>
    );
};

export default Sideber;