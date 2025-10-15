import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", title: "Vision Udaan", category: "Infrastructure" },
  { id: "2", title: "Vision Paradise", category: "Infrastructure" },
  { id: "3", title: "Vision Petals", category: "Infrastructure" },
  { id: "4", title: "Vision Mantra", category: "Infrastructure" },
  { id: "5", title: "Vision Divine", category: "Infrastructure" },
  { id: "6", title: "Vision Vista", category: "Infrastructure" },
  { id: "7", title: "Swad Sansad", category: "Dining" },
  { id: "8", title: "Anhad Anand Auditorium", category: "Events" },
  { id: "9", title: "Josh Club", category: "Sports" },
  { id: "10", title: "Chronosphere", category: "Academic" },
  { id: "11", title: "White House", category: "Administrative" },
];

export default function InfrastructureGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Infrastructure Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover-elevate"
            }`}
            data-testid={`button-category-${category.toLowerCase()}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 rounded-lg overflow-hidden cursor-pointer hover-elevate transition-all"
            data-testid={`gallery-item-${item.id}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">🏛️</div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover-elevate p-2 rounded-md"
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl w-full bg-gradient-to-br from-primary to-[#0055A4] rounded-lg overflow-hidden">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/80 mt-2">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
