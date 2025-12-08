import { FaHome, FaUser, FaCog, FaApple } from "react-icons/fa";

type IconName = "home" | "profile" | "settings" | "apple";

const IconMap: Record<IconName, React.ElementType> = {
  home: FaHome,
  profile: FaUser,
  settings: FaCog,
  apple: FaApple,
};

export const DynamicIcon = ({ name }: { name: IconName }) => {
  const IconComponent = IconMap[name];
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <IconComponent />
      {name}
    </div>
  );
};
