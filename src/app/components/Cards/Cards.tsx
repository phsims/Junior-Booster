

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { MainButton } from '../Button/Button';
import DOMPurify from 'isomorphic-dompurify';

export interface recipiData {
id: number;
title: string;
image: string;
imageType?: string;
summary: string;
} 


export function OutlinedCard({ image, title, summary, id }:recipiData) {
  const truncatedSummary = DOMPurify.sanitize(`${summary?.substring(0, 70)}...`);
  
  return (
    <Box sx={{ maxWidth:357.33, maxHeight:367.8 }}>
      <Card variant="outlined">
        <CardContent>
        <Image
      src={image}
      width={322}
      height={140}
      alt={`Recipe ${title}`}
    />
      <Typography variant="h5" component="div">
      {title}
      </Typography>
      {summary && (
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: truncatedSummary }}
          />
        )}
    </CardContent>
    <CardActions>
      <MainButton link={`recipes/${id}`} buttonText={'GO TO RECIPE >'}/>
    </CardActions>
    </Card>
    </Box>
  );
}

export default OutlinedCard;
