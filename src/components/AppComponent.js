import React, { useState } from "react";
import Axios from "axios";
import {
  Container,
  Header,
  NavMenu,
  AppName,
  RecipeImage,
  SearchBox,
  SearchIcon,
  SearchInput,
  RecipeListContainer,
  Placeholder,
  Nav,
  NavIcon,
  SidebarNav,
  SidebarWrap,
} from "./StyledComponent";
import RecipeComponent from './RecipeComponent';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Navbar/SidebarData';
import SubMenu from './Navbar/SubMenu';
import { IconContext } from 'react-icons/lib';



const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";


const AppComponent = () => {
  const [searchQuery, updateSearchQuery] = useState('');
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <Header>
        <AppName>
          <RecipeImage src="/react-recipe-finder/hamburger.svg" />
          Today`s Recipe
        </AppName>
        <NavMenu>
          <SearchBox>
            <SearchIcon src="/react-recipe-finder/search-icon.svg" />
            <SearchInput
              placeholder="Search Recipe"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>

          <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
              <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
              </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to='#'>
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </NavMenu>

      </Header>
      <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="/react-recipe-finder/hamburger.svg" />
        )}
      </RecipeListContainer>
    </Container>
  );
};

export default AppComponent;