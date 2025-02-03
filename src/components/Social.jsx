import Link from "next/link";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  // { icon: <FaGithub />, path: "https://github.com/rollno-07" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/itsvks143/",
  },

  {icon: <FaInstagram />,
  path: "https://www.instagram.com/lvtaxconsultancy/",
},
{icon: <FaFacebook />,
  path: "https://www.facebook.com/profile.php?id=61572193509945",
},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
