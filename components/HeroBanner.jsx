import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">beat veduar</p>
        <h3>audifonos veduar</h3>
        <h1>35 hrs</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">compra ahora</button>
          </Link>
          <div className="desc">
            <h5>descripcion</h5>
            <p>audifonos negros marca vedrums</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner