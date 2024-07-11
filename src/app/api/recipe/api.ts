import {recipiData} from '../../components/Cards/Cards'

const APIKEY = process.env.NEXT_PRIVATE_SPOONACULAR_API_KEY;
const BASEURL = process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL;
const IMGURL = process.env.NEXT_PUBLIC_SPOONACULAR_IMG_URL;

export async function fetchRecipes(): Promise<recipiData[]> {
  try {
    const response = await fetch(`${BASEURL}/recipes/random/?apiKey=${APIKEY}&number=12`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data.recipes; 
  } catch (error) {
    console.log('Error fetching data:', error);
    return []; 
  }
}


export async function fetchRecipeByID(id: string): Promise<recipiData[]> {
  try {
    const response = await fetch(`${BASEURL}/recipes/${id}/information?apiKey=${APIKEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data.recipes; 
  } catch (error) {
    console.log('Error fetching data:', error);
    return []; 
  }
}
