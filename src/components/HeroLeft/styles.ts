import styled from "styled-components";

export const HeroLeftStyles = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-evenly;

    .hero-left-description {
      h3 {
        font-size: 14px;
        font-weight: normal;
      }

      h2{
        font-size: 40px;

        @media (max-width:768px){
          font-size: 28px;
        }

        span {
          color: ${props => props.theme.colorPrimary};
        }

        .skills {
          color: black;
          border-right: solid 4px black;
          animation: showSkills .4s;
        }
        @keyframes showSkills {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: auto;
          }
        }
      }
      p {
        @media (max-width:768px){
          line-height: 22px;
        }
      }

    .hero-left-redeSocial {
      h3 {
        margin-bottom: 12px;
      }
    }
  }
`

