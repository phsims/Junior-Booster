import styles from './Hero2.module.scss';
import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image'

export interface HeroProps {
  logo?: string,
  description: string,
  title: string
}

export function Hero2({ logo, description, title}: HeroProps) {
  return (
    <div className={styles['container']}>
      <Box  sx={(theme) => ({
          width: '100%',
          height: '503px',
          padding: '40px 136.5px 64px 112.5px',
          backgroundColor: theme.palette.grey[50]
        })}>
        <Grid container spacing={2} sx={{
            width: '1176px',
            height: '399px',
            position: 'relative',
            top: '40px',
            left: '112.5px',
            gap: '0px',
       
          }}>
            <Grid item xs={8}>
              <Container
                sx={{
                  width: '784px',
                  height: '399px',
                  padding: '24px 0px 71.5px 24px',
                  gap: '24px'
                }}
              >
                <Box>
                  <Typography variant="h1" sx={{
                    width: '760px',
                    height: '88px',
                    padding: '0px 68.36px 123.5px 0px',
                    gap: '0px',
                  }}>
                    {title}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1" sx={{
                    width: '760px',
                    height: '72px',
                    padding: '0px 9.11px 255.5px 0px',
                    gap: '0px'
                  }}
                    >{description}
                    </Typography>
                </Box>
              </Container>
            </Grid>
            <Grid item xs={4}>
              <Container>
              {logo&& <Image
                 src={logo}
                 width="368"
                 alt='logo'
                 height="368"
                  />}
              </Container>
            </Grid>
          </Grid>
      </Box>
    </div>
  );
}

export default Hero2;
