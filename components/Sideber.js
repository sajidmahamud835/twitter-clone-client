import Image from "next/image";  // Image is a component that renders an image in nextjs.
import SidebarMenuItem from "./SidebarMenuItem";
import { BookmarkIcon, ChatIcon, ClipboardListIcon, CogIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, PhotographIcon, TrendingUpIcon, UserIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";  // HomeIcon is a component that renders the SVG for the Home icon.
import { useState } from "react"; // useState is a hook that is used to create a state variable.

const Sideber = () => {
    const [active, setActive] = useState(false);
    const MenuItems = [
        { text: "Home", Icon: HomeIcon, active: active => active === "home" }, // The active property is a function that takes a string and returns a boolean. The active property is used to determine whether the menu item is active or not.
        { text: "Profile", Icon: UserIcon },
        { text: "Messages", Icon: ChatIcon },
        { text: "Bookmarks", Icon: BookmarkIcon },
        { text: "Lists", Icon: ClipboardListIcon },
        { text: "Moments", Icon: PhotographIcon },
        { text: "Discover", Icon: HashtagIcon },
        { text: "Trends", Icon: TrendingUpIcon },
        { text: "Settings", Icon: CogIcon },
        { text: "More", Icon: DotsCircleHorizontalIcon }
    ];
    // MenuItems is an array of objects that contain the text and icon for each menu item.

    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
            {/* Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image width="50" height="50" src="/image/twitterLogo.png"></Image>
            </div>

            {/* Menu */}
            <div className="mt-4 mb-2.5 xl:items-start">
                {
                    // Loop through each menu item and render a SidebarMenuItem component for each item.
                    // The SidebarMenuItem component takes a text and icon property.
                    // The text property is a string that contains the text for the menu item.
                    // The icon property is a component that renders the SVG for the menu item. 
                    // The active property is a function that takes a string and returns a boolean.
                    // The active property is used to determine whether the menu item is active or not.

                    MenuItems.map(item => <SidebarMenuItem key={item.text} text={item.text} Icon={item.Icon} active={item.active} />)
                }
            </div>
            {/*Tweet Button */}
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-56 h-12 shadow-md text-lg hidden xl:inline">
                    Tweet
                </button>
            </div>

            {/* User Profile */}

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <Image className="h-10 w-10 rounded-full xl:mr-2" width="50" height="50" src="/image/user.png" alt="user-img"></Image>

                {/* The alt property is used to provide a fallback for browsers that do not support the srcset attribute. 
                 // The width and height properties are used to set the dimensions of the image.
                 // The rounded-full property is used to make the image rounded.
                 // The xl:mr-2 property is used to move the image to the right on the large screen. */}

                <div className="ml-2 leading-5 hidden xl:inline">
                    <h4 className="font-bold">User Name</h4> {/* User Name */}
                    <p className="text-sm text-gray-500">@userName</p> {/* @userName */}
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" /> {/* DotsHorizontalIcon is a component that renders the SVG for the DotsHorizontal icon. */}
            </div>

        </div>
    );
};

export default Sideber; 