import Image, { StaticImageData } from 'next/image'
import styles from './profilepicture.module.scss'

type ProfilePictureType = {
    hasUserStory?: boolean,
    image: StaticImageData
}

export default function ProfilePicture(props:ProfilePictureType) {
    return (
        <div className={props.hasUserStory ? styles.bob : ''}>
            <Image
                src={props.image}
                className='w-[64px] h-[64px] rounded-full mx-auto object-cover border-4 border-slate-100 grow-0 strink-0'
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    )
}
