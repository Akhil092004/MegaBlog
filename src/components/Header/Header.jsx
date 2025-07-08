import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
      icon: '🏠'
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      icon: '🔐'
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      icon: '📝'
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
      icon: '📚'
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      icon: '➕'
    },
  ];

  return (
    <header className='relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl border-b border-slate-700'>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 animate-pulse"></div>
      
      <Container>
        <nav className='flex items-center justify-between py-4 relative z-10'>
          {/* Logo Section */}
          <div className='flex items-center space-x-3'>
            <Link to='/' className='group flex items-center space-x-3'>
              <div className='p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg'>
                <Logo width='60px' />
              </div>
              <div className='hidden md:block'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Chronicle Corner
                </h1>
              </div>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className='flex items-center space-x-6'>
            {/* Nav Items */}
            <ul className='flex items-center space-x-2'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='group relative px-4 py-2 text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95'
                    >
                      <span className='flex items-center space-x-2'>
                        <span className='text-sm opacity-70 group-hover:opacity-100'>{item.icon}</span>
                        <span className='font-medium'>{item.name}</span>
                      </span>
                      {/* Subtle glow effect */}
                      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </button>
                  </li>
                ) : null
              )}
            </ul>

            {/* User Section */}
            {authStatus && (
              <div className='flex items-center space-x-4 pl-4 border-l border-white/20'>
                {/* User Avatar */}
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg'>
                    {userData?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className='hidden lg:block'>
                    <p className='text-sm text-gray-300'>Welcome back,</p>
                    <p className='text-white font-medium'>{userData?.name || 'User'}</p>
                  </div>
                </div>
                
                {/* Logout Button */}
                <LogoutBtn />
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;