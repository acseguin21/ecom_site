// Photo Configuration Template for Alpine Woodworks YYC
// COPY THIS FILE to photos.ts and update with your own photo paths
// Photos should be placed in the public/images/ directory

export const photos = {
  // Hero and branding images
  hero: {
    background: '/images/hero-background.jpg', // Main hero background
    logo: '/images/alpine-woodworks-logo.jpeg', // Your business logo
  },
  
  // Product category images
  products: {
    cuttingBoards: {
      featured: '/images/cutting-board-featured.jpg',
      collection: '/images/cutting-board-collection.jpg',
    },
    charcuterieBoards: {
      featured: '/images/charcuterie-board-featured.jpg',
      collection: '/images/charcuterie-board-collection.jpg',
    },
    servingTrays: {
      featured: '/images/serving-tray-featured.jpg',
      collection: '/images/serving-tray-collection.jpg',
    },
  },
  
  // Workshop and process images
  workshop: {
    workspace: '/images/workshop-workspace.jpg',
    tools: '/images/workshop-tools.jpg',
    materials: '/images/workshop-materials.jpg',
    process: '/images/workshop-process.jpg',
  },
  
  // Custom projects examples
  customProjects: {
    tabletop: '/images/custom-tabletop.jpg',
    benchTop: '/images/custom-bench-top.jpg',
    kitchenIsland: '/images/custom-kitchen-island.jpg',
    diningTable: '/images/custom-dining-table.jpg',
  },
  
  // About page images
  about: {
    team: '/images/about-team.jpg',
    location: '/images/about-location.jpg',
    values: '/images/about-values.jpg',
  },
  
  // Placeholder images (fallbacks)
  placeholders: {
    product: '/images/placeholder-product.jpg',
    workshop: '/images/placeholder-workshop.jpg',
    custom: '/images/placeholder-custom.jpg',
  }
}

// Helper function to get photo with fallback
export function getPhoto(path: string, fallback?: string): string {
  return path || fallback || photos.placeholders.product
}

// Helper function to check if photo exists (for conditional rendering)
export function hasPhoto(path: string): boolean {
  return Boolean(path && path !== '')
}

// INSTRUCTIONS:
// 1. Copy this file to src/config/photos.ts
// 2. Place your photos in the public/images/ directory
// 3. Update the paths above to match your actual photo filenames
// 4. The photos.ts file is gitignored, so your photos won't go to GitHub
// 5. Use the getPhoto() function in components for safe photo rendering
