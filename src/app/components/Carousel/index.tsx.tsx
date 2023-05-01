import ProfilePicture from "../ProfilePicture";
import styles from './carousel.module.scss'

export default function Carousel(users:any) { 
    return (
        <div className={styles.carousel}>
        {users.users.map((user:any) => (
                <div className={styles.items} key={user.id}>
                    <ProfilePicture image={user.imageUrl} hasUserStory={user.hasUserStory} />
                    <p className={styles.text}>{user.username}</p>
                </div>
            ))}
        </div>
    )
}
