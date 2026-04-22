// Page loads these sequentially instead of in parallel:
const user = await fetch('/api/user');
const posts = await fetch('/api/posts');       // waits for user
const comments = await fetch('/api/comments'); // waits for posts