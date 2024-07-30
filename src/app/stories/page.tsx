import React from 'react'
import type { Story } from '../../../public/data.tsx'
import Link from 'next/link.js';
const storyList: Story[] = [
  {
    story: "Updated database schema for better scalability",
    storyID: "004",
    comments: "Database performance improved and scalability increased.",
    observation: "Application can handle larger datasets more efficiently.",
    date: "2024-07-30",
    learnings: "Learned best practices for database normalization and indexing.",
    challenges: "Migrating existing data to the new schema was time-consuming.",
    codeSnippet: `ALTER TABLE users ADD COLUMN last_login TIMESTAMP;\nCREATE INDEX idx_last_login ON users(last_login);`
  },
  {
    story: "Implemented a user authentication system",
    storyID: "001",
    comments: "The authentication system improved user security significantly.",
    observation: "Users found the new login process more secure but a bit complex.",
    date: "2024-07-15",
    learnings: "Gained experience with OAuth and JWT for secure authentication.",
    challenges: "Integrating OAuth with existing user database was challenging.",
    codeSnippet: `const jwt = require('jsonwebtoken');\n\nconst token = jwt.sign({ userId: 123 }, 'your-secret-key', { expiresIn: '1h' });\nconsole.log(token);`
  },
  {
    story: "Refactored the front-end code for improved performance",
    storyID: "002",
    comments: "Performance improved by 30% after the refactor.",
    observation: "Users experienced faster load times and smoother interactions.",
    date: "2024-07-20",
    learnings: "Learned about advanced techniques in code splitting and lazy loading.",
    challenges: "Had to rewrite several components and manage state more efficiently.",
    codeSnippet: `import React, { lazy, Suspense } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n\nexport default App;`
  },
  {
    story: "Developed a new feature for user notifications",
    storyID: "003",
    comments: "The notifications feature has been well-received by users.",
    observation: "Users appreciate timely and relevant notifications.",
    date: "2024-07-25",
    learnings: "Gained insight into real-time data handling with WebSockets.",
    challenges: "Ensuring notifications are delivered in real-time was complex.",
    codeSnippet: `const WebSocket = require('ws');\n\nconst ws = new WebSocket('ws://example.com/socket');\n\nws.onmessage = function (event) {\n  console.log('Notification:', event.data);\n};`
  },
  {
    story: "Enhanced security with multi-factor authentication (MFA)",
    storyID: "006",
    comments: "MFA added an extra layer of security to user accounts.",
    observation: "Users are more secure but might face additional login steps.",
    date: "2024-08-05",
    learnings: "Gained expertise in integrating MFA services.",
    challenges: "Synchronizing MFA tokens with user sessions was complex.",
    codeSnippet: `const speakeasy = require('speakeasy');\n\nconst secret = speakeasy.generateSecret();\nconsole.log('MFA Secret:', secret.base32);\n\n// Verify token\nconst verified = speakeasy.totp.verify({\n  secret: secret.base32,\n  encoding: 'base32',\n  token: '123456'\n});\nconsole.log('Token verified:', verified);`
  },
  {
    story: "Redesigned the homepage layout for better UX",
    storyID: "007",
    comments: "The new design improved user engagement and satisfaction.",
    observation: "Users find the new layout more intuitive and easier to navigate.",
    date: "2024-08-10",
    learnings: "Acquired skills in UX design and user feedback analysis.",
    challenges: "Balancing aesthetic appeal with functionality was challenging.",
    codeSnippet: `<div className='homepage'>\n  <header>Welcome to Our Site</header>\n  <main>\n    <section>Featured Content</section>\n    <section>Latest News</section>\n  </main>\n</div>`
  }
];
interface Props { }

const StoriesPage = () => {
  // make a list that can be dynamically accessed. 
  return <div>
    <h3>Story List</h3>
    <Link className="mx-1" href={`/stories/${storyList[0].storyID}`}>  <p>StoryID 004</p>
      <p>Story</p>
      <p>Story comment</p> </Link>
    <Link className="mx-1" href={`/stories/${storyList[1].storyID}`}>  <p>StoryID 001</p>
      <p>Story</p>
      <p>Story comment</p> </Link>
    <Link className="mx-1" href={`/stories/${storyList[2].storyID}`}><p>StoryID 002</p>
      <p>Story</p>
      <p>Story comment</p> </Link>
    <Link className="mx-1" href={`/stories/${storyList[4].storyID}`}><p>StoryID 003</p>
      <p>Story</p>
      <p>Story comment</p> </Link>
    <Link className="mx-1" href={`/stories/${storyList[5].storyID}`}><p>StoryID 007</p>
      <p>Story</p>
      <p>Story comment</p> </Link>

  </div>
}

export default StoriesPage;