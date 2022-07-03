const SidebarMenuItem = ({ text, Icon }) => {
    return (
        <div>
            <Icon className="h-7" />
            <span className="ml-2">{text}</span>
        </div>
    );
};

export default SidebarMenuItem;