export interface CardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  
  export interface Listing {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }