import styled from "styled-components";

export const Filter = styled.div`
  .side-box.filter {
    a {
      color: #252525;
    }

    a + a {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid;
    }

    a:hover {
      text-decoration: underline !important;
    }

    a + a {
      border-color: rgba(37, 37, 37, 0.3);
    }
  }

  @media only screen and (max-width:1400px) {
    a + a {
      margin-top: 14px;
      padding-top: 14px;
    }
  }
`;
