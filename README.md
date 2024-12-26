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

<img width="929" alt="Screenshot 2024-12-26 at 7 36 45 PM" src="https://github.com/user-attachments/assets/5b1b6f6d-5627-45f3-a52f-ef2a5c58739c" />

<img width="929" alt="Screenshot 2024-12-26 at 7 37 08 PM" src="https://github.com/user-attachments/assets/cee8017d-46ce-404d-ae43-a9b006715431" />

4 - To create a post without text editor or running in localhost (it only works if you can upload a post wit only one YouTube video, this is my case):

    1 - Go ro repository, select "Issues".
    <img width="1512" alt="Screenshot 2024-12-26 at 7 38 47 PM" src="https://github.com/user-attachments/assets/891ceb23-7616-432c-98e3-b9f56ccdb2ab" />
    2 - New issue, select the "New post form"
    <img width="1512" alt="Screenshot 2024-12-26 at 7 39 34 PM" src="https://github.com/user-attachments/assets/c60be22b-cd7a-478a-a795-ebaafba732ac" />
    3 - Fill all form content
    <img width="1512" alt="Screenshot 2024-12-26 at 7 40 13 PM" src="https://github.com/user-attachments/assets/fb374a39-9b6d-4040-811c-2ba4d8f8d57b" />
    4 - Create the issue
    5 - Uala! New post created
