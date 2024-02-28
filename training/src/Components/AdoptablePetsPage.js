// components/AdoptablePetsPage.js

import React from 'react';
import '../Styles/ApdoptablePets.css'


const petData = [
  {
    id: 1,
    name: 'Buddy',
    species: 'Dog',
    breed: 'Labrador Retriever',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS',
  },
  {
    id: 2,
    name: 'Whiskers',
    species: 'Cat',
    breed: 'Siamese',
    imageUrl: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRK_gIzFqb_75DfAPdjQWK4YluPvWKmm-0ZEgOVdextq-W0ElNfffOS6PsOY0SKinK-bUZN',
  },

  {
    id: 3,
    name: 'Wine',
    species: 'Cat',
    breed: 'Siamese',
    imageUrl: 'https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg',
  },
  {
    id: 4,
    name: 'SLimmy',
    species: 'Dog',
    breed: 'Japnese',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpusF6NYyxtJ-M2ac5aBwDY8QAxoIje2kJxaWnWbX6ZByceEnRD_R9LleMkPdCJAJLRY&usqp=CAU',
  },

  {
    id: 5,
    name: 'SLimmy',
    species: 'Dog',
    breed: 'Japnese',
    imageUrl: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/01/a0001799/img/en/a0001799_parts_5a55f09d1374f.jpg?20200605180827&q=80&rw=686&rh=490',
  },

  {
    id: 6,
    name: 'Mittens',
    species: 'Cat',
    breed: 'Maine Coon',
    imageUrl: 'https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg',
  },
  
 
];

const AdoptablePetsPage = () => {
  return (
    <div>
      <h2>Adoptable Pets</h2>

      <div className="pet-grid">
        {petData.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.imageUrl} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.species}</p>
            <p>{pet.breed}</p>
            <button>Adopt Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptablePetsPage;
