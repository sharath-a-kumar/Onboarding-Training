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
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptablePetsPage;
