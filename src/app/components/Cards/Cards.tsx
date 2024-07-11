import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { MainButton } from '../Button/Button';

export interface recipiData {
  id: number;
  title: string;
  image: string;
  imageType?: string;
  summary: string;
}

export function OutlinedCard(recipiData: recipiData) {
  const truncatedSummary =
    recipiData.summary && recipiData.summary.length > 80
      ? `${recipiData.summary.substring(0, 80)}…`
      : recipiData.summary;

  return (
   
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
          <MainButton link={'www.google.com'} buttonText={'GO TO RECIPE >'} />
        </CardActions>
      </Card>
 
  );
}

export default OutlinedCard;
