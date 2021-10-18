import styled from "styled-components";
import Image from "../../../assets/authImage.jpg";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left__container {
    flex: 0.3;
    /* background-image: url(${Image}); */
    background-color: black;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 30px;
    font-weight: 700;
    font-family: "Hind", sans-serif;
  }

  .logo__container {
    padding: 20px 0 0 40px;
  }

  .right__container {
    flex: 0.7;
  }

  .left__container,
  .right__container {
    width: 100%;
  }

  .qoute__container {
    position: relative;
    bottom: 0;
    top: 60%;
    font-family: "Playfair Display", serif;
    font-size: 20px;
    text-align: center;
  }

  .qoute__container .qoute {
    font-weight: 200 !important;
    color: white;
  }

  .divider__line {
    height: 1px;
    background: white;
    width: 3%;
    margin: 5% auto;
  }

  .qoute__name {
    font-size: 15px;
    opacity: 0.5;
    font-weight: 100;
    font-family: "Hind", sans-serif;
    font-weight: 300;
  }

  .top__container__title {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    font-family: "Hind", sans-serif;
  }

  .top__container__title p {
    width: fit-content;
    margin-left: auto;
    margin-right: 25%;
  }

  .top__container__title .no__account {
    opacity: 0.5;
    margin-right: 5px;
  }
  .top__container__routing a {
    font-weight: 600;
    text-decoration: none;
    color: grey;
  }

  .right__container__content {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-left: 15%;
    width: 50%;
  }

  .signin {
    margin-top: 15%;
  }

  .signup {
    margin-top: 5%;
  }

  .right__container__content .content__title {
    margin-bottom: 5px;
  }

  .content__inputs {
    display: flex;
    flex-direction: column;
  }

  .content__title {
    color: #4b535c;
    font-family: "Hind", sans-serif;
    font-weight: 600;
  }

  .content__enter__details {
    color: #949ea8;
    font-size: 15px;
  }

  .content__inputs {
    margin-top: 10%;
  }

  .content__inputs input {
    padding: 20px 150px 6px 0;
    border: none;
    outline: none;
  }

  button {
    padding: 20px;
    margin-top: 30px;
    background-color: #22d486;
    border: none;
    color: white;
    font-weight: 600;
    font-family: "Hind", sans-serif;
    border-radius: 3px;
    width: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.5;
      cursor: auto;
      transform: none;
    }
  }

  .mobile__version {
    display: none;

    p {
      width: 100%;
      margin: 20px auto;
    }
  }

  .input__container {
    border-bottom: 1px solid darkgrey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;

    input {
      width: 100%;

      ::placeholder {
        font-size: 1.2em;
        font-family: "Hind", sans-serif;
      }
    }

    .MuiSvgIcon-root {
      color: grey;
      opacity: 0.5;
      cursor: pointer;
    }
  }

  // Mobile styling below

  @media (max-width: 1000px) {
    .left__container {
      display: none;
    }

    .right__container {
      flex: 1;
    }

    .right__container__content {
      position: absolute;
      top: 20%;
      width: 100%;
      margin: 0;
    }

    .inner__content {
      width: fit-content;
      margin: auto;
    }

    .inner__content {
      text-align: center;
    }

    button {
      width: 90%;
      margin: auto;
      margin-top: 20px;
    }

    .mobile__version {
      display: block;
    }

    .desktop__version {
      display: none;
    }
  }
`;
