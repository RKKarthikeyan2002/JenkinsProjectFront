import React from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
import './Styles.css';
// import { BorderAllRounded } from '@mui/icons-material';

function Home() {
  return (
    <div>
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="bg-gradient-to-r from-red-300 via-yellow-500 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Sports showroom Management System
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-dark font-bold">
          Sport Showroom refers to an industry comprising retail brands and businesses that offer to sell products used for casual, fitness, and professional sports in the retail markets. The products include apparel, footwear, wearables and specific merchandise used/required in a sport.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/viewPurchase"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
}

export default Home
