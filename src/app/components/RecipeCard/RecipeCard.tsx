import styles from './RecipeCard.module.scss';

export interface RecipeCardProps {
  id: number;
  image?: string;
  title: string;
  summary?: string;
}

export function RecipeCard() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RecipeCard!</h1>
    </div>
  );
}

export default RecipeCard;
