
import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favoriteArtworks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteArtworks', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (artworkId: number) => {
    setFavorites((prev) => [...prev, artworkId]);
  };

  const removeFavorite = (artworkId: number) => {
    setFavorites((prev) => prev.filter(id => id !== artworkId));
  };

  const isFavorite = (artworkId: number) => {
    return favorites.includes(artworkId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;
