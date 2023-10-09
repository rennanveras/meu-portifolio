import styled from "styled-components";

export const ContentSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items:center;

  h3 {
    font-size: 22px;
    margin: 10px 0;
    font-weight: bold;
    @media (max-width: 768px){
      font-size: 18px;

    }
  }
`
export const ImgSlide = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 600px;
  text-align: center;
  padding: 20px 0;
`