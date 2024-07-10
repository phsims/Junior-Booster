import styles from './page.module.scss';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Hero2 from './components/Hero2/Hero2';
import { mockRecipes } from './testData/recipes';
import { mockData } from './testData/mock-data';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Index() {

  return (
      <>
        <Header />
      
        <Hero2 {...mockData}/>

        { <Container>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 4 }}>  
          {mockRecipes.recipes.map((element) => (
              <Cards 
                key={element.id}
                id={element.id}
                title={element.title}
                image={element.image}
                summary={element.summary}    
              />
              ))}
          </Grid>
        </Container> }
      </>
  );
}
