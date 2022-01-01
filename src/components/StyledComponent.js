import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
  margin-bottom: 12px;
`;

export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

export const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RecipeImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 15px;
`;

export const Navbar = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 18px;
  border-radius: 6px;
  margin-left: 20px;
  width: 70%;
  background-color: white;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-right: 20px;
  width: 80%;
`;

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

export const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

