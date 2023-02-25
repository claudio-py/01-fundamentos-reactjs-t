import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/claudio-py.png',
      name: 'Claudio Daniel',
      role: 'Web Developer'
    },
    content: [
      { type: "paragraph", content: " Lorem ipsum dolor sit amet consectetur, " },
      { type: 'paragraph', content: '  adipisicing elit. Ipsa sequi necessitatibus ' },
      { type: 'paragraph', content: '  incidunt sapiente perferendis provident impedit ' },
      { type: 'paragraph', content: '  et atque esse temporibus dicta, aliquam, possimus ' },
      { type: 'paragraph', content: '  animi voluptas, aspernatur quaerat! Qui, veniam sed.' },
      { type: "link", content: "claudio-py" },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'RocketSeat CTO',
    },
    content: [
      { type: 'paragraph', content: ' Lorem ipsum dolor sit amet consectetur, ' },
      { type: 'paragraph', content: '  adipisicing elit. Ipsa sequi necessitatibus ' },
      { type: 'paragraph', content: '  incidunt sapiente perferendis provident impedit ' },
      { type: 'paragraph', content: '  et atque esse temporibus dicta, aliquam, possimus ' },
      { type: 'paragraph', content: '  animi voluptas, aspernatur quaerat! Qui, veniam sed.' },
      { type: 'link', content: ' diego3g' },
    ],
    publishedAt: new Date('2022-05-13 20:00:00'),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              post={post}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}


