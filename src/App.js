import React from 'react';
import './style.css';
import { Sidebar, RightBar } from './components';
import {
  Home,
  Lists,
  Notification,
  Stories,
  Write,
  Profile,
  Main,
} from './pages/index';
import { Routes, Route } from 'react-router-dom';
import { useEarthoOne } from '@eartho/one-client-react';
export default function App() {
  const { isLoading, isConnected, error, user, connectWithPopup, logout } =
    useEarthoOne();
  const posts = [
    {
      id: 1,
      title: 'How To Become A Content Writer With Zero Experience',
      user: {
        id: 1,
        name: 'manjunath kalburgi',
        date: '20-2-22',
        avatar_url:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      },
      image_url: 'https://picsum.photos/200/300',
      description: 'description',
      category: ['Personal Development', 'money'],
    },
    {
      id: 2,
      title: 'How To Become A Content Writer With Zero Experience',
      user: {
        id: 2,
        name: 'manjunath kalburgi',
        date: '20-2-22',
        avatar_url:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      },
      image_url: 'https://picsum.photos/200/300',
      description: 'description',
      category: ['Personal Development', 'money'],
    },
    {
      id: 3,
      title: 'How To Become A Content Writer With Zero Experience',
      user: {
        id: 2,
        name: 'manjunath kalburgi',
        date: '20-2-22',
        avatar_url:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      },
      image_url: 'https://picsum.photos/200/300',
      description: 'description',
      category: [
        'Personal Development',
        'money',
        'honey',
        'corporate',
        'offices',
      ],
    },
    {
      id: 4,
      title: 'How To Become A Content Writer With Zero Experience',
      user: {
        id: 2,
        name: 'manjunath kalburgi',
        date: '20-2-22',
        avatar_url:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      },
      image_url: 'https://picsum.photos/200/300',
      description: 'description',
      category: ['Personal Development', 'money'],
    },
  ];

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let allcategory = new Array();
  const category = posts.map((item) => {
    item.category.map((cat, index) => {
      allcategory.push(cat);
    });
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    let unique = allcategory.filter(onlyUnique);
    allcategory = unique;
  });

  if (isConnected) {
    return (
      <div style={{ left: 70, position: 'absolute', display: 'flex' }}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div style={{ Width: '78%', maxWidth: `calc(100% - 24%)` }}>
          <Routes>
            <Route path="/Write" element={<Write />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post:id" element={<Home />} />
            <Route path="/" element={<Main posts={posts} />} exact />
          </Routes>
        </div>
        <div className="rightbar">
          <div className="header-text">
            Hello, {user.user.displayName},
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </div>
          <RightBar posts={posts} category={allcategory} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="login"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h4>Please login to start adding your stories</h4>
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQFluX6wXyNFaw/company-logo_100_100/0/1604981764085?e=1671062400&v=beta&t=_cuback8gbjdoq9FCuDsee7Zty47V-Aq3a8X7GqUkO0"
          width="100"
          height="100"
        />
        <div>
          <button
            className="btn btn-outline-success"
            id="login"
            onClick={() =>
              connectWithPopup({ access_id: '9jCu7PUj8JY6bON2fl54' })
            }
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}
