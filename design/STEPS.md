# Discussion Forum Application Development Design using React

1. create wireframe/ui design
   Site Map:
   - Threads
     - See All Threads
       - See Total Threads
       - Vote Thread (authenticated)
       - Filter (client side)
     - Detail Thread
       - See Total Comment
       - Vote Thread (authenticated)
       - Create Comment (authenticated)
       - Vote Comment (authenticated)
     - Create Thread (authenticated)
   - Leaderboard
     - See All Thread
   - Auth (Login / Profile + Logout)
     - Login
     - Register
2. installation
  - react
3. Rest API
   Documentation: https://forum-api.dicoding.dev/v1/#/
   - Base URL: https://forum-api.dicoding.dev/v1
   - Endpoints
     - Users:
       - Register
       - Login
       - See All Users
       - See Own Profile
     - Threads:
       - Create
       - See All
       - See Detail
     - Comments:
       - Create Comment
     - Votes:
       - Up-vote Thread
       - Down-vote Thread
       - Neutralize Thread vote
       - Up-vote Comment
       - Down-vote Comment
       - Neutralize Comment vote
     - Leaderboards
       - See Leaderboards
4. implementation wireframe / ui design
5. design state management from api doc
  - authUser
  - isPreload
  - shared
  - threadDetail
  - threads
  - users
  - comments
  - votes

## Data Example

USER:

```json
{
  "user": {
    "id": "user-123",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://generated-image-url.jpg"
  }
}
```

THREAD:

```json
{
  "thread": {
    "id": "thread-1",
    "title": "Thread Pertama",
    "body": "Ini adalah thread pertama",
    "category": "General",
    "createdAt": "2021-06-21T07:00:00.000Z",
    "ownerId": "users-1",
    "upVotesBy": [], // array string
    "downVotesBy": [], // array string
    "totalComments": 0
  }
}
```

VOTE:

```json
{
  "vote": {
    "id": "vote-1",
    "userId": "users-1",
    "threadId": "thread-1",
    "voteType": -1 // -1 = down , 0 = neutral, 1 = up
  }
}
```

LEADERBOARDS:

```json
{
  "leaderboards": [
    {
      "user": {
        "id": "users-1",
        "name": "John Doe",
        "email": "john@example.com",
        "avatar": "https://generated-image-url.jpg"
      }, // USER
      "score": 10
    },
    {
      "user": {
        "id": "users-2",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "avatar": "https://generated-image-url.jpg"
      },
      "score": 5
    }
  ]
}
```
