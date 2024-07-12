'use client'

import { fetchRecipeByID, fetchNooch } from '../../api/recipe/api';
import * as React from 'react';
import { recipiData } from '../../components/Cards/Cards';


export interface IdProps {
  params: {
    id: number;
  };
}

export default function Page({params}:IdProps) {
    const [data, setData] = React.useState<recipiData>()
    const {id} = params

    React.useEffect(()=>{fetchNooch(id).then((e)=>{setData(e)})},[])
    React.useEffect(()=>{
        console.log(data)
      },[data])
    return (
      <>
      <h1> {data?.protein}</h1>
      <img src={data?.image}></img>
      </>
    )
}