import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 0;

  form {
    flex: 0.8;

    button {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  background: url(/static/images/logos/logo_header.svg) center no-repeat;
  width: 152px;
  height: 32px;
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  padding: 08px 12px 8px 40px;
  border-bottom: 1px solid transparent;
  background: url(/static/images/icons/search.svg) left no-repeat;
  background-size: 24px 24px;
  transition: all 200ms ease-in;

  &:hover,
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    button {
      margin-top: 2px;
      border: none;
      background: none;
      font-size: 12px;
      color: #e84118;
      font-weight: bold;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
