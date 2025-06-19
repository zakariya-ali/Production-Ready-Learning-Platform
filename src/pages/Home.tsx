import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Ebooks from '../components/Ebooks';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Ebooks />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;