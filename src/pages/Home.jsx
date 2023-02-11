import React from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <section className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen flex">
        <div className="border-neutral-200 flex flex-col justify-start items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border my-72 mx-8">
          <h1 className="text-neutral-100 font-bold text-3xl py-8">WELCOME</h1>
          <p className="text-neutral-200 max-w-2xl px-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, minima magni dolorem
            non similique veniam cumque adipisci deleniti commodi voluptatem, facilis nihil sequi,
            dolor possimus magnam assumenda perspiciatis debitis consectetur.
          </p>
          <button type="button" className="inline-block px-10 py-3 mt-4 bg-sky-700 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">LEARN MORE</button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
