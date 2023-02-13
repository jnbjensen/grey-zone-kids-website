/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="bg-hero bg-no-repeat bg-top md:bg-top-left bg-cover bg-local flex justify-start items-end md:items-center h-screen px-4 md:px-12 py-12 md:py-24">
        <div className="border-neutral-200 flex flex-col items-center mb-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border max-w-sm md:max-w-lg">
          <h1 className="text-neutral-100 font-bold text-2xl md:text-3xl py-2 md:py-6">WELCOME</h1>
          <p className="text-neutral-200 max-w-2xl px-4 md:px-6 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, minima magni dolorem
            non similique veniam cumque adipisci deleniti commodi voluptatem, facilis nihil sequi,
            dolor possimus magnam assumenda perspiciatis debitis consectetur.
          </p>
          <button type="button" className="inline-block px-10 py-3 my-6 md:my-10 bg-sky-700 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">LEARN MORE</button>
        </div>
      </section>

      {/* EXPLAINER SECTION */}
      <section className="my-0 mx-auto py-4 bg-neutral-100">
        <h2 className="text-center text-3xl font-bold my-4">
          LIFE IN THE DIAGNOSTIC
          <br />
          <span className="text-gray-500"> GREY ZONE</span>
        </h2>
        <p className="max-w-2xl my-4 mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi nihil ea tenetur animi corporis unde neque libero similique voluptas. Ab inventore earum corrupti suscipit mollitia necessitatibus quod ea doloremque aspernatur!
        </p>

        {/* FLOWERS INFOGRAPHIC */}
        <div className="p-4 rounded-lg shadow-lg max-w-xl my-0 mx-auto bg-white">
          <h3 className="text-center text-2xl font-bold my-2">PLACEHOLDER TITLE</h3>
          <p className="max-w-2xl mx-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique hic voluptas praesentium? Est, incidunt quod minus repellat hic accusamus pariatur odio ex saepe ipsam, inventore alias quos, corporis corrupti nulla.
          </p>
          <div className="grid grid-cols-2 content-center my-4">
            <img src="images/Dandelion.png" alt="A dandelion" className="w-20 my-0 mx-auto" />
            <h4 className="text-left text-lg font-bold mx-0 my-auto">DANDELIONS</h4>
          </div>
          <p className="max-w-2xl mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem distinctio laborum enim, reprehenderit, facere soluta quis necessitatibus ipsam similique omnis aperiam blanditiis nesciunt. Possimus voluptatibus ipsum deleniti tempora eveniet fuga!</p>
          <div className="grid grid-cols-2 content-center my-4">
            <img src="images/Tulip.png" alt="A tulip" className="w-20 my-0 mx-auto" />
            <h4 className="text-left text-lg font-bold mx-0 my-auto">TULIPS</h4>
          </div>
          <p className="max-w-2xl mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem distinctio laborum enim, reprehenderit, facere soluta quis necessitatibus ipsam similique omnis aperiam blanditiis nesciunt. Possimus voluptatibus ipsum deleniti tempora eveniet fuga!</p>
          <div className="grid grid-cols-2 content-center my-4">
            <img src="images/Orchid.png" alt="An orchid" className="w-20 my-0 mx-auto" />
            <h4 className="text-left text-lg font-bold mx-0 my-auto">ORCHIDS</h4>
          </div>
          <p className="max-w-2xl mx-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem distinctio laborum enim, reprehenderit, facere soluta quis necessitatibus ipsam similique omnis aperiam blanditiis nesciunt. Possimus voluptatibus ipsum deleniti tempora eveniet fuga!</p>
        </div>

        {/* SPECTRUM FIGURE */}
        <div>
          <figure className="bg-white my-4 mx-auto rounded-lg shadow-lg max-w-xl p-2">
            <h5 className="text-center text-2xl font-bold my-4">A WIDER SPECTRUM</h5>
            <p className="max-w-2xl m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate voluptates quos repellendus sunt numquam perspiciatis sequi at earum ex delectus consequuntur, aspernatur deserunt, facere, ut rerum ipsam hic corporis!</p>
            <img src="images/Spectrum.png" alt="Intensity range of sensations and emotions, grey zone kids versus neurotypicals" className="my-0 mx-auto " />
          </figure>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
