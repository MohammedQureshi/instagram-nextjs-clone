import Image, { StaticImageData } from 'next/image'
import styles from './profilepicture.module.scss'

type ProfilePictureType = {
    hasUserStory?: boolean,
    image: StaticImageData
}

export default function ProfilePicture(props:ProfilePictureType) {
    return (
        <div className={styles.parent}>
            <Image
                src={props.image}
                className={styles.image}
                alt="Picture of the author"
                width={56}
                height={56}
            />
        </div>
    )
}
