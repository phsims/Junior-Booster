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

      <Hero2 {...mockData} />

      <Container>
        <Grid

          container
          spacing={{ xs: 3, md: 5 }}
          sx={{ alignItems: 'stretch' ,paddingTop: 5}}
        >
          {mockRecipes.recipes.map((element) => (
            <Grid
              item
              lg={4}
              sm={6}
              xs={12}
              sx={{ display: 'flex', alignItems: 'stretch' }}
            >
              <Cards
              
                key={element.id}
                id={element.id}
                title={element.title}
                image={element.image}
                summary={element.summary}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
