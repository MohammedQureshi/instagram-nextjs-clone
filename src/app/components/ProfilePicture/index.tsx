import Image, { StaticImageData } from 'next/image'
import styles from './profilepicture.module.scss'

type ProfilePictureType = {
    hasUserStory?: boolean,
    image: StaticImageData
}

export default function ProfilePicture(props:ProfilePictureType) {
    return (
        <div className={props.hasUserStory ? styles.hasUserStory : styles.hasNonUserStory}>
            <Image
                src={props.image}
                className={styles.image}
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    )
}
