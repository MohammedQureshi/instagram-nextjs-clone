import ProfilePicture from "./ProfilePicture";

export default function Carousel(users:any) { 
    return users.users.map((user:any) => (
                <div key={user.id}>
                    <ProfilePicture image={user.imageUrl} hasUserStory={user.hasUserStory} />
                    <p className="text-center">{user.username}</p>
                </div>
            ))
}
