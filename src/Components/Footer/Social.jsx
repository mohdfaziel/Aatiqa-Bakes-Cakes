import { FaLinkedinIn } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export default function Social()
{
    return (
        <div className="SocialMedia flex justify-center text-active items-center gap-3">
        <a href="https://www.linkedin.com/in/mohdfaziel/" target="_blank">
          <FaLinkedinIn className="transition-all hover:scale-150" />
        </a>
        <a href="mailto:mohdfazel969@gmail.com" target="_blank">
          <HiOutlineMail className="transition-all  hover:scale-150" />
        </a>
        <a href="https://github.com/mohdfaziel" target="_blank">
          <ImGithub className="transition-all hover:scale-150" />
        </a>
        <a href="https://leetcode.com/u/mohdfaziel/" target="_blank">
          <SiLeetcode className="transition-all hover:scale-150" />
        </a>
        <a
          href="https://www.instagram.com/heyy.faziel?igsh=MWQxdW1yNDJ5ZGVicA=="
          target="_blank"
        >
          <FaInstagram className="transition-all hover:scale-150" />
        </a>
      </div>
    )
}