import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo2.avif";

export default function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImg);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);

    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" className="img" />
            <h3>Whaook</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => (
              <div
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                key={index}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${contact.avatarImg}`}
                    alt="avatar"
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            ))}
            {/* {contacts.map((contact, index) => (
              <div
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                key={index}
              >
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${contact.avatarImg}`}
                    alt="avatar"
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            ))} */}
          </div>
          <div className="username">
            <h2>{currentUserName}</h2>
          </div>
        </Container>
      )}
    </>
  );
}

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 10% 90%;
//   overflow: hidden;
//   background-color: #080420;
//   color: #ffffff;

//   .brand {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 1rem;

//     .img {
//       height: 2rem;
//     }
//   }

//   .contacts {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow: auto;
//     gap: 0.8rem;
//     &::-webkit-scrollbar {
//       width: 0.3rem;
//       &-thumb {
//         background-color: #ffffff39;
//         width: 0.1rem;
//         border-radius: 1rem;
//       }
//     }

//     .contact {
//       display: flex;
//       width: 90%;
//       align-items: center;
//       gap: 1rem;
//       padding: 0.5rem;
//       background-color: #ffffff39;
//       border-radius: 5px;
//       cursor: pointer;
//       transition: 0.5s ease-in-out;
//     }

//     .contact .avatar img {
//       height: 3rem;
//     }
//   }
//   .username {
//     h3 {
//     }
//   }
//   .contacts > .contact .selected {
//     background-color: green;
//     transition: 0.5s ease-in-out;
//   }
//   .currentUser {
//     background-color: #0d0d30;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2rem;
//     .avatar {
//       img {
//         height: 4rem;
//         max-inline-size: 100%;
//       }
//     }
//     .username {
//       display: flex;
//       h2 {
//         color: white;
//       }
//     }
//   }
// `;
const Container = styled.div`
  display: grid;
  grid-template-rows: 15% 75% 10%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      display: flex;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 05rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;