
export const users = [
  {
    id: 1,
    username: 'bob',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    hasUserStory: true
  },
  {
    id: 2,
    username: 'jack',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    hasUserStory: false
  }
]

export async function GET(request: Request) {
  return new Response(JSON.stringify(users))
}