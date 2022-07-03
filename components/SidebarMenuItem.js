const SidebarMenuItem = ({ text, Icon }) => {
    return (
        <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
            <Icon className="h-7" />
            <span className="ml-2">{text}</span>
        </div>
    );
};

export default SidebarMenuItem;