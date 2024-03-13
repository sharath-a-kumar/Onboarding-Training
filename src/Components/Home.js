import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "../Styles/Home.css";
import "../Styles/Navbar.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSwiper = ({ slides }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const HomePage = () => {
  const petData = [
    {
      image:
        "https://www.shutterstock.com/image-photo/funny-gray-kitten-smiling-dog-600nw-2045705726.jpg",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/banner-two-smiling-dogs-happy-600nw-1847221756.jpg",
    },

    {
      image:
        "https://t4.ftcdn.net/jpg/03/28/88/41/360_F_328884184_zcbmGh4NlFLhrRWj83fTDQsQLYY6bbvQ.jpg",
    },

    {
      image:
        "https://t4.ftcdn.net/jpg/03/17/04/61/240_F_317046136_p8XC7kCPSyelhxe54mbXWJbUI6iMShM7.jpg",
    },

    {
      image:
        "https://t3.ftcdn.net/jpg/03/90/12/30/240_F_390123053_dLdh2YggDNrXYlGP9OgBGfTdIwUKU2Hx.jpg",
    },

    {
      image:
        "https://t4.ftcdn.net/jpg/03/20/66/69/240_F_320666995_qRnsM2wn3bbeaM8ohLSsxe4gPzYzIrZz.jpg",
    },

    {
      image:
        "https://t4.ftcdn.net/jpg/06/34/37/87/240_F_634378721_GAIkFVnZQqkKHzTSXqyQ7Vf2xErRFJe6.jpg",
    },
  ];

  return (
    <div className="home-page">
      <nav class="navbar">
        <div className="logo">
          {/* Use the provided image URL as your logo */}
          <img
            src="https://i.ibb.co/PtM988Y/your-image-file-name.jpg"
            alt="Logo"
          />
          <span className="website-name">Wagging Tails Rescue </span>
        </div>

        <ul>
          <li>
            <Link to="/">
              <i class="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i class="fas fa-info-circle"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i class="fas fa-envelope"></i> Contact
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <i class="fas fa-sign-out-alt"></i> Log Out
            </Link>
          </li>
        </ul>
      </nav>

      <HomeSwiper slides={petData} />

      <header className="hero-section">
        <div className="hero-content"></div>
        <div class="overlay-text dancing-script-unique">ADOPT ME PLEASE </div>
      </header>
      <h1>Life is Better with a Furry Friend</h1>

      {/* images for the middle content  */}

      <marquee className="marquee">
        <img
          src="https://media.istockphoto.com/id/1589824836/photo/cute-brown-dog-that-smiles-isolated-background.webp?b=1&s=170667a&w=0&k=20&c=c5uh78Wm2sracT0lladX7XixlgNx6BqdkfNGxsIaCiA="
          alt="Furry Friends"
          className="header-image1"
        />

        <img
          src="https://media.istockphoto.com/id/539234375/photo/happy-family.webp?b=1&s=170667a&w=0&k=20&c=c3c6TBIQGecTwH7HTmVXRifo826lIBr-l2drmxCDeVs="
          alt="Furry Friends"
          className="header-image2"
        />

        <img
          src="https://media.istockphoto.com/id/1331309569/photo/young-woman-takes-selfie-with-her-dog.webp?b=1&s=170667a&w=0&k=20&c=Uw4ebBH9aBUEN-nSyXw6mcUqKDUh-KyT122t6a9uIzY="
          alt="Furry Friends"
          className="header-image3"
        />

        <img
          src="https://media.istockphoto.com/id/1307238003/photo/life-is-good-with-a-faithful-friend-by-your-side.webp?b=1&s=170667a&w=0&k=20&c=5ifdT550uCFkkyMXzL2bTLTC1RdhcnAiNyWKp-_2gbA="
          alt="Furry Friends"
          className="header-image4"
        />

        <img
          src="https://media.istockphoto.com/id/1464498740/photo/laughing-couple-playing-with-their-dog-on-their-living-room-sofa.webp?b=1&s=170667a&w=0&k=20&c=--eIITLgS1rL_xjApheHyA8WzSHMfW-GFf1VDdLatEk="
          alt="Furry Friends"
          className="header-image5"
        />
      </marquee>

      <div>
        <section>
          <p>
            Experience the joy of companionship! Our diverse family of pets is
            eagerly waiting to bring love and happiness to your home. Rescued
            from the streets, each one has a unique story, and they are all
            deserving of a forever family to call their own.
          </p>
          <p>
            Embracing the warmth and comfort a pet brings into your life is
            easier than you think. We are here to guide you through every step
            of the adoption process.
          </p>
        </section>

        <section>
          <h2>Adoption is a Commitment</h2>
          <p>
            Adopting an animal is a meaningful commitment that lasts a lifetime.
            Cats and dogs, our beloved companions, can share up to 15 years of
            love and memories with you. We prioritize placing our animals in
            homes where they will receive proper care, a safe environment,
            attention when sick, and, most importantly, enduring love.
          </p>
          <p>
            Join us in making a lifelong commitment to our furry friends – a
            commitment that enriches both your life and theirs.
          </p>
        </section>

        <section>
          <h2>Animals You Can Adopt</h2>
          <p>
            Before you decide to adopt, consider these factors to ensure a
            perfect match:
          </p>
          <ul>
            <li>
              Do you have the energy and time to keep up with an active pet, or
              are you looking for a more relaxed companion?
            </li>
            <li>
              Does your living space include an outdoor area for your pet to
              explore safely, or do you prefer a furry friend comfortable
              indoors?
            </li>
            <li>
              If you already have a pet, bring them along for a harmonious
              introduction. Share photos to help us find the perfect addition to
              your animal family.
            </li>
          </ul>
          <p>
            Our team is dedicated to ensuring the best fit for both you and your
            future furry friend.
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>How much does it cost to adopt?</strong> - Our adoption
              fees vary, but they cover necessary vaccinations,
              spaying/neutering, and overall healthcare. The investment ensures
              a healthy start for your new companion.
            </li>
            <li>
              <strong>
                Do I need to come to the centre to choose or pick up my pet?
              </strong>{" "}
              - While visiting the centre allows you to meet our animals in
              person, you can also explore our online profiles and initiate the
              adoption process remotely.
            </li>
            <li>
              <strong>How do I get in touch with the Adoption team?</strong> -
              Contact our friendly Adoption team through our website or visit
              our centre during working hours. We're here to assist you in
              finding the perfect match.
            </li>
            <li>
              <strong>Are the animals house-trained?</strong> - Our team
              provides information on the training status of each pet. We are
              dedicated to helping you transition smoothly into a loving home
              environment.
            </li>
            <li>
              <strong>Do you have pedigree animals for adoption?</strong> - We
              have a diverse range of animals, including some with pedigrees.
              Browse our profiles to discover pets of various breeds, sizes, and
              backgrounds.
            </li>
          </ul>
        </section>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/YWGzaqigAo8"
              allowFullScreen
              title="YouTube Video 1"
            ></iframe>
          </div>
          <div style={{ flex: 1 }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/LIIBNczsjI0"
              allowFullScreen
              title="YouTube Video 2"
            ></iframe>
          </div>
        </div>

        <button className="button">
          <Link to="/PetAdoptionForm"> Adopt now</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
