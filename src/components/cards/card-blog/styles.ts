import Link from 'next/link';
import styled from 'styled-components';

export const CardBlog = styled(Link)`
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 2px;
  transition: 0.3s;
  position: relative;

  &:hover {
    background-color: var(--tertiary-color);

    .title {
      color: #fff;
    }
  }

  .title {
    height: 60px;
  }

  .next-image {
    border-radius: 15px 15px 0 0;
    aspect-ratio: 744/340;
  }

  .tag {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fff;
    background-color: var(--primary-color);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: fit-content;
    padding: 10px;
  }

  .box-text {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;

    h2 {
      transition: 0.3s;
      color: var(--primary-color);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.25;
    }
  }

  .description {
    height: 68px;
    padding-right: 5px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 3px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .box-text {
      padding: 28px 25px;
      gap: 16px;

      h2 {
        line-height: 1.15;
      }
    }

    .tag {
      padding: 7px 9px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-text {
      padding: 22px;
      gap: 10px;

      h2 {
        line-height: 1.15;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .tag {
      top: 16px;
      right: 16px;
      padding: 6px 8px;
    }
  }

  @media only screen and (max-width: 900px) {
    .box-text {
      padding: 18px;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    .tag {
      top: 13px;
      right: 13px;
      padding: 4px 7px;
    }

    .box-text {
      padding: 18px;
      gap: 7px;
    }
  }

  @media only screen and (max-width: 650px) {
    .tag {
      top: 16px;
      right: 16px;
      padding: 6px 10px;
    }

    .box-text {
      padding: 22px;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
    .tag {
      top: 13px;
      right: 13px;
      padding: 4px 7px;
    }

    .box-text {
      padding: 18px;
      gap: 10px;
    }
  }
`;
