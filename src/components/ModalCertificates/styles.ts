import styled from "styled-components";

export const AreaModalCertificate = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(236,240,243, .8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 30px;
  }
  img {
    width: 1000px;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }


`