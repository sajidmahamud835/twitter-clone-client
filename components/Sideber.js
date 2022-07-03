import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { BookmarkIcon, ChatIcon, CogIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, PhotographIcon, TrendingDownIcon, TrendingUpIcon, UserIcon, ViewListIcon } from "@heroicons/react/solid";

const Sideber = () => {
    const MenuItems = [
        { text: "Home", Icon: HomeIcon, active: active => active === "home" },
        { text: "Profile", Icon: UserIcon },
        { text: "Messages", Icon: ChatIcon },
        { text: "Bookmarks", Icon: BookmarkIcon },
        { text: "Lists", Icon: ViewListIcon },
        { text: "Moments", Icon: PhotographIcon },
        { text: "Discover", Icon: HashtagIcon },
        { text: "Trends", Icon: TrendingUpIcon },
        { text: "Settings", Icon: CogIcon },
        { text: "More", Icon: DotsCircleHorizontalIcon },
    ];
    return (
        <div>
            {/* Logo */}
            <div className="hoverEffect">
                <Image width="50" height="50" src="/image/twitterLogo.png"></Image>
            </div>

            {/* Menu */}
            {
                MenuItems.map(item => <SidebarMenuItem text={item.text} Icon={item.Icon} active={item.active} />)

            }
            {/*Tweet Button */}

            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-56 h-12 shadow-md text-lg hidden xl:inline">
                    Tweet
                </button>
            </div>

            {/* User Profile */}
            <div>
                <div className="flex items-center">
                    <Image width="50" height="50" src="/image/user.png"></Image>
                    <div className="ml-2">
                        <span className="font-bold">User Name</span>
                        <span className="text-sm">@userName</span>
                    </div>
                </div>
            </div>
            <DotsHorizontalIcon />
        </div>
    );
};

export default Sideber;