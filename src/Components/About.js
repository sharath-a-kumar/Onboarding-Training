import React from "react";
import '../Styles/about.css'
const AboutUs = () => {
  return (
    <div>
      <h1>About Wagging Tails</h1>
      <p>
        We're On a Mission To Support And Empower People To Responsibly Rehome
        Their Pets. Wagging Tails Rescue has been set up by a group of animal lovers
        who are committed to ending pet homelessness and irresponsible rehoming
        practices. We're proud to contribute to the welfare of pets in India and
        prioritize their well-being over profit.
      </p>

      <h2>Why Wagging Tails Rescue?</h2>
      <p>
        According to the PFMA (Pet Food Manufacturers Association), millions of
        pets in India face rehoming challenges due to lifestyle changes, both in
        living and work arrangements, along with financial obstacles. Whatever
        your reasons, we are here for you.
      </p>

      <h2>Our Mission</h2>
      <p>
        Wagging Tails Rescue is here to help by creating a pet adoption community where
        people who want to adopt safely connect with individuals who need to
        rehome a dog, cat, or rabbit in India.
      </p>

      <h2>What We Do</h2>
      <p>
        We're a safer, more professional, and ethical alternative to online
        platforms. Our platform connects potential adopters with people who need
        to rehome their pets, initially starting with India's most beloved pets:
        dogs, cats, and rabbits. This makes it easier for compassionate
        individuals to adopt the right pet while maximizing the chance of pets
        finding their forever home.
      </p>

      <p>
        At Wagging Tails Rescue, we offer a non-judgmental service to rehomers,
        providing them with full control of the rehoming process. By doing so,
        we are also contributing to the reduction of animals entering shelters,
        freeing up space and resources for pets in need of immediate help or
        specialized care.
      </p>

      <h2>
        Join us in our mission to create happy homes for pets across India!
      </h2>



         {/* Card Section */}
         <div className="card complex-3d-animation" style={{ width: "18rem", marginTop: "20px" }}>
         <img
  className="card-img-top"
  src="https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/pass/Brewer-CompanionDogApplication.jpg"
  alt="Card image cap"
  style={{ width: "300px", height: "200px" }} // Adjust the dimensions as needed
/>

        <div className="card-body">
          <h5 className="card-title">Adopt a Pet</h5>
          <p className="card-text">
          Visit an animal shelter, or rescue, just once and you will realize the importance of adopting these animals
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default AboutUs;
