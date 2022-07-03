import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { BookmarkIcon, ChatIcon, ClipboardListIcon, CogIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, PhotographIcon, TrendingUpIcon, UserIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";  // HomeIcon is a component that renders the SVG for the Home icon.

const Sideber = () => {
    const MenuItems = [
        { text: "Home", Icon: HomeIcon, active: active => active === "home" },
        { text: "Profile", Icon: UserIcon },
        { text: "Messages", Icon: ChatIcon },
        { text: "Bookmarks", Icon: BookmarkIcon },
        { text: "Lists", Icon: ClipboardListIcon },
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-56 h-12 shadow-md text-lg hidden xl:inline">
                    Tweet
                </button>
            </div>

            {/* User Profile */}

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <Image width="50" height="50" src="/image/user.png"></Image>
                <div className="ml-2">
                    <h4 className="font-bold">User Name</h4>
                    <p className="text-sm">@userName</p>
                </div>
                <DotsHorizontalIcon className="h-5" />
            </div>

        </div>
    );
};

export default Sideber;