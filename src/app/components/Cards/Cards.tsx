import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'


export interface recipiData {
id: number;
title: string;
image: string;
imageType?: string;
summary: string;
} 


export function OutlinedCard(recipiData:recipiData) {
  const truncatedSummary = `${recipiData.summary.substring(0, 80)}…`

  return (
    <Box sx={{ maxWidth:357.33, maxHeight:367.8 }}>
      <Card variant="outlined">
        <CardContent>
        <Image
      src={recipiData.image}
      width={322}
      height={140}
      alt={`Recipe ${recipiData.title}`}
    />
      <Typography variant="h5" component="div">
      {recipiData.title}
      </Typography>
      <Typography variant="body2">
      <strong>{truncatedSummary}</strong>
      </Typography>
    </CardContent>
    <CardActions>
      
    </CardActions>
    </Card>
    </Box>
  );
}

export default OutlinedCard;
