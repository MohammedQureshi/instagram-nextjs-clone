
export const users = [
  {
    id: 1,
    username: 'becominginternet',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    hasUserStory: true
  },
  {
    id: 2,
    username: 'alwaysfrock',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    hasUserStory: false
  },
  {
    id: 3,
    username: 'porschesham',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    hasUserStory: false
  },
  {
    id: 4,
    username: 'singeterror',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    hasUserStory: false
  },
  {
    id: 5,
    username: 'wildebeestpaper',
    imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2',
    hasUserStory: false
  },
  {
    id: 6,
    username: 'ahemblanket',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    hasUserStory: false
  },
  {
    id: 7,
    username: 'tugofwarsullen',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    hasUserStory: false
  },
  {
    id: 8,
    username: 'toughsecret',
    imageUrl: 'https://images.unsplash.com/photo-1674574124792-3be232f1957f',
    hasUserStory: false
  },
  {
    id: 9,
    username: 'disasterrepay',
    imageUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea',
    hasUserStory: false
  },
  {
    id: 10,
    username: 'uncommonhas',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    hasUserStory: false
  },
  {
    id: 11,
    username: 'friendshipjudgment',
    imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556',
    hasUserStory: false
  },
  {
    id: 12,
    username: 'windsurferdiscreet',
    imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    hasUserStory: false
  },
  {
    id: 13,
    username: 'wentmutter',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    hasUserStory: false
  },
  {
    id: 14,
    username: 'dependabledepartment',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    hasUserStory: false
  }
]

export async function GET(request: Request) {
  return new Response(JSON.stringify(users))
}