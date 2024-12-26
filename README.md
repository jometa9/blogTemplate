## Minimal blog template with form to create post

🏆 Main feature: create new posts without deploying a backend instance, just with github actions.

🦾 Made with Nextjs, Nodejs and GitHub Actions

👉🏼 Features
- Publish and edit posts
- Set visible and hidden post
- Scheduble posts
- Quotes like a posts
- Posts with YouTube video

## How to use

1 - Clone the repo, download and run:

```javascript

npm install --legacy-peer-deps
npm run dev

```

2 - Change what you want (favicon, branding, etc)

3 - Go to http://localhost:3000/admin/posts and login with username <code>admin</code> and password <code>password</code>. This admin panel ONLY works in localhost.

4 - To create a post without text editor or running in localhost (it only works if you can upload a post wit only one YouTube video, this is my case):

    1 - Go ro repository, select "Issues".
    2 - New issue, select the "New post form"
    3 - Fill all form content
    4 - Create the issue
    5 - Uala! New post created