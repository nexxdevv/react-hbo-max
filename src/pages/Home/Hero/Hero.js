import styled from "styled-components";
import hero from "../../../assets/hero.png";

const StyledHero = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: 56px;
	#hero {
		background-image: url(${hero});
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 30vh;
		@media (min-width: 768px) {
			height: 45vh;
		}
		@media (min-width: 1024px) {
			height: 55vh;
		}
		@media (min-width: 1280px) {
			height: 84vh;
		}
		transition: height .7s;
	}
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
  #overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-image: linear-gradient(to top, #171e54, transparent);
  }
  #info {
    background-image: linear-gradient(#171e54, black);
    color: white;
    height: 120px;
    position: relative;
    z-index: 0;
    width: 100%;
    @media (min-width: 1024px) {
      height: 100px;
    }
		@media (min-width: 1280px) {
			height: 0;
		}

    h1 {
      font-size: 1.35rem;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.1;
      padding-bottom: 0.25rem;
      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
			@media (min-width: 1280px) {
				font-size: 300%;
				line-height: 1;
				padding-bottom: .5rem;
			}
    }

    h2 {
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: 700;
      opacity: 0.95;
      @media (min-width: 768px) {
        font-size: 1rem;
      }
      @media (min-width: 1024px) {
        text-shadow: 1px 1px 1px #6d2b63;
        font-size: 1.25rem;
      }
		
    }
    p {
      font-size: 0.85rem;
      line-height: 1.25;
      opacity: 0.9;
      padding-top: 4px;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      @media (min-width: 1024px) {
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
        font-size: 1rem;
      }
      @media (min-width: 1268px) {
        font-size: 1.2rem;
      }
    }
    button {
      font-weight: 700;
      letter-spacing: 0.15em;
      padding: 0.6em 1.5em 0.6em;
      width: max-content;
      white-space: nowrap;
      font-size: 0.75rem;
      cursor: pointer;
      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
      &:first-child {
        position: relative;
        z-index: 500;
      }
    }
  }
  #text {
    position: absolute;
    bottom: 1.25rem;
    height: max-content;
    @media (min-width: 1024px) {
      /* bottom: 4%; */
      left: 2rem;
			bottom: 1.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div id="imageContainer" className="relative">
        {/* <img src={hero} alt="" className="md:order-2" /> */}
				<div id="hero"></div>
        <div id="overlay"></div>
      </div>

      <div id="info" className="px-4 md:px-8 md:order-1">
        <div id="text">
          <h1>
            Space Jam: <br /> A New Legacy
          </h1>
          <h2>Now playing</h2>
          <p>
            In theaters and on HBO Max. Streaming <br /> through Aug 15.
          </p>
          <div className="text-sm flex space-x-4 mt-6">
            <button className="border-2 border-gray-100 rounded-full uppercase font-semibold flex items-center space-x-1">
              <div className="text-brand-bright-pink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-pink"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4>watch</h4>
            </button>
            <button className="rounded-full uppercase font-semibold inline bg-brand-bright-pink bg-opacity-80 bg-brand-pink">
              more info
            </button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;