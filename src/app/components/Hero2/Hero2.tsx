'use client';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Theme from '../../../theme';

export interface HeroProps {
  logo?: string;
  description: string;
  title: string;
}

console.log('work');

export function Hero2({ logo, description, title }: HeroProps) {
  return (
    <Box sx={{ backgroundColor: Theme.palette.grey[50] }}>
      <Container  >
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid item xs={12} md={8} >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">{title}</Typography>
              <Typography variant="body1">{description}</Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: { xs: 100, md: 250 },
                width: { xs: 100, md: 250 },
                paddingBottom: 2,
              }}
              alt="The house from the offer."
              src={logo}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero2;
