
import { artworks as initialArtworks } from '@/data/artworks';

// Type definitions
export interface Artwork {
  id: string;
  title: string;
  artist: string;
  imageSrc: string;
  description: string;
  likes: number;
  date: string;
  medium?: string;
  dimensions?: string;
}

// Simulated database
let artworks: Artwork[] = [...initialArtworks];
let favorites: string[] = [];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulated API endpoints
export const artworkService = {
  // Get all artworks with optional filtering and sorting
  getAllArtworks: async (options?: { 
    sortBy?: 'newest' | 'popular',
    limit?: number
  }): Promise<Artwork[]> => {
    // Simulate network delay
    await delay(800);
    
    let result = [...artworks];
    
    // Apply sorting
    if (options?.sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (options?.sortBy === 'popular') {
      result.sort((a, b) => b.likes - a.likes);
    }
    
    // Apply limit
    if (options?.limit) {
      result = result.slice(0, options.limit);
    }
    
    return result;
  },
  
  // Get artwork by ID
  getArtworkById: async (id: string): Promise<Artwork | null> => {
    await delay(500);
    const artwork = artworks.find(art => art.id === id);
    return artwork || null;
  },
  
  // Like an artwork
  likeArtwork: async (id: string): Promise<Artwork> => {
    await delay(300);
    const artwork = artworks.find(art => art.id === id);
    if (!artwork) {
      throw new Error("Artwork not found");
    }
    
    // Update likes
    artwork.likes += 1;
    
    return artwork;
  },
  
  // Add to favorites
  addToFavorites: async (id: string): Promise<string[]> => {
    await delay(200);
    if (!favorites.includes(id)) {
      favorites.push(id);
    }
    return favorites;
  },
  
  // Remove from favorites
  removeFromFavorites: async (id: string): Promise<string[]> => {
    await delay(200);
    favorites = favorites.filter(favId => favId !== id);
    return favorites;
  },
  
  // Get all favorites
  getFavorites: async (): Promise<Artwork[]> => {
    await delay(400);
    return artworks.filter(artwork => favorites.includes(artwork.id));
  },
  
  // Search artworks
  searchArtworks: async (query: string): Promise<Artwork[]> => {
    await delay(600);
    const lowercaseQuery = query.toLowerCase();
    return artworks.filter(artwork => 
      artwork.title.toLowerCase().includes(lowercaseQuery) || 
      artwork.artist.toLowerCase().includes(lowercaseQuery) ||
      artwork.description.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Add new artwork (simulating submission)
  addArtwork: async (newArtwork: Omit<Artwork, "id" | "likes" | "date">): Promise<Artwork> => {
    await delay(1000);
    const id = `${artworks.length + 1}`;
    const artwork: Artwork = {
      ...newArtwork,
      id,
      likes: 0,
      date: new Date().toISOString().split("T")[0]
    };
    
    artworks = [...artworks, artwork];
    return artwork;
  }
};
