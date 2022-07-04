const SidebarMenuItem = ({ text, Icon, active }) => {
    // The SidebarMenuItem component takes a text and icon property.
    // Used in the Sideber component. Path: twitter-clone-client\components\Sideber.js
    return (
        <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
            {/* Note: 
                // The hoverEffect class is used to add a hover effect to the menu item.
                //space-x-3 is used to space the menu items out. 
                // The text-lg property is used to set the font size of the menu items.
                // The flex items-center property is used to align the menu items vertically.
                // The justify-center property is used to align the menu items horizontally.
                // The xl:justify-start property is used to align the menu items horizontally on the large screen. 
            */}
            <Icon className="h-7" /> {/* Icon is a component that renders the SVG for the menu item. */}
            <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
            {/* Note:
                // text is a string that contains the text for the menu item.
                // The active property is a function that takes a string and returns a boolean.
                // The active property is used to determine whether the menu item is active or not.
                // The ${active && "font-bold"} property is used to add a font weight to the menu item if it is active.
                // The hidden xl:inline property is used to hide the menu item on the large screen. 
            */}
        </div>
    );
};
export default SidebarMenuItem;