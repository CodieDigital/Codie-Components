import styled from "styled-components";

export const Tags = styled.div`
  .side-box.tags {
    .wrapper-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 9px 17px 7px;

      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      color: #000;
    }

    .tag:hover {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }

  @media only screen and (max-width: 1400px) {
    .side-box.tags {
      .tag {
        padding: 9px 15px 5px;
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .side-box.tags {
      .tag {
        padding: 9px 13px 5px;
        font-size: 13.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .side-box.tags {
      .tag {
        padding: 9px 10px 5px;
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .side-box.tags {
      .tag {
        padding: 7px 8px 3px;
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .side-box.tags {
      .tag {
        padding: 5px 8px 2px;
        font-size: 10px;
      }
    }
  }
`;
