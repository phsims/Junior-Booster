'use client'

import { fetchRecipeByID } from '../../api/recipe/api';
import * as React from 'react';
import { recipiData } from '../../components/Cards/Cards';

export default function Page() {
    const [data, setData] = React.useState<recipiData[]>()
    React.useEffect(()=>{fetchRecipeByID('642091').then((e)=>{setData(e)})},[])
    React.useEffect(()=>{
        console.log(data)
      },[data])
    return (<h1> 'hello' </h1>)
}