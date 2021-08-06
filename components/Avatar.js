import Image from "next/image"

function Avatar({ url, className }) {
    return <Image
            width="30"
            height="30"
            loading="lazy" 
            src={url}
            alt="profile pic"
            className={`h-8 rounded-full cursor-pointer ${className} right-0`}
            />
}

export default Avatar
 