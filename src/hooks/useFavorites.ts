
import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favoriteArtworks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteArtworks', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (artworkId: string) => {
    setFavorites((prev) => [...prev, artworkId]);
  };

  const removeFavorite = (artworkId: string) => {
    setFavorites((prev) => prev.filter(id => id !== artworkId));
  };

  const isFavorite = (artworkId: string) => {
    return favorites.includes(artworkId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;
