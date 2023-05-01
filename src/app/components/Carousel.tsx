import ProfilePicture from "./ProfilePicture";

export default async function Carousel() {
    let data = null;
      data = await fetch('http://localhost:3000/api/users', {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
      })
      .then(response => response.json())  
      .catch(err => console.log(err))
    
    return (
        <div className="flex">
            {data.map((user:any) => (
                <div key={user.id}>
                    <ProfilePicture image={user.imageUrl} hasUserStory={user.hasUserStory} />
                    <p className="text-center">{user.username}</p>
                </div>
            ))}
        </div>
    )
}
