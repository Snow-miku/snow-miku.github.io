import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { SectionTitle } from '@/components/common/SectionTitle'
import { galleryItems, categories } from '@/data/gallery'
import type { GalleryItem } from '@/data/gallery'

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="py-20">
      <div className="container-main">
        <SectionTitle
          title="Gallery"
          subtitle="Personal artwork and illustrations"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className={
                selectedCategory === category.value
                  ? 'bg-ink text-cream'
                  : 'border-ink/30 text-ink hover:bg-ink hover:text-cream'
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-ink/10 bg-cream/50 cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-end">
                  <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-cream text-sm font-medium truncate">
                      {item.title}
                    </h3>
                    {item.date && (
                      <p className="text-cream/70 text-xs">{item.date}</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-muted">No artwork in this category yet.</p>
          </div>
        )}

        {/* Image Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-ink/95 border-none p-0">
            <DialogTitle className="sr-only">
              {selectedImage?.title || 'Gallery Image'}
            </DialogTitle>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 to-transparent">
                  <h3 className="text-cream text-xl font-medium">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-cream/70 mt-1">{selectedImage.description}</p>
                  )}
                  {selectedImage.date && (
                    <p className="text-cream/50 text-sm mt-2">{selectedImage.date}</p>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
