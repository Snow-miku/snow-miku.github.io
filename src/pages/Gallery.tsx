import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { FuiSection } from '@/components/common/FuiSection'
import { Corners } from '@/components/common/Corners'
import { FuiImage } from '@/components/common/FuiImage'
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
    <div className="py-24">
      <div className="container-main">
        <FuiSection
          num="02"
          title="Gallery"
          note={`VISUAL_ARCHIVE // ${String(filteredItems.length).padStart(3, '0')}_ITEMS`}
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => {
            const active = selectedCategory === category.value
            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase px-4 h-9 border transition-colors ${
                  active
                    ? 'bg-fg text-bg border-fg'
                    : 'border-line text-mute hover:border-line-strong hover:text-fg'
                }`}
              >
                {active ? `[ ${category.label} ]` : category.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative p-[3px] text-left cursor-pointer"
              aria-label={`View ${item.title}`}
            >
              <Corners size="w-2 h-2" />

              <div className="relative border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong overflow-hidden">
                <FuiImage
                  src={item.image}
                  alt={item.title}
                  label={`IMG_${String(index + 1).padStart(3, '0')}`}
                  className="aspect-square"
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {/* Hover info bar */}
                <div className="absolute bottom-0 inset-x-0 border-t border-line bg-bg/90 backdrop-blur-sm px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-fg truncate">{item.title}</p>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-mute uppercase">
                    {item.category}
                    {item.date && ` // ${item.date}`}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24">
            <span className="inline-block w-8 h-8 rotate-45 border-2 border-faint mb-6" />
            <p className="font-mono text-xs tracking-[0.25em] text-mute">
              NO_ITEMS_IN_CATEGORY
            </p>
          </div>
        )}

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-bg border border-line-strong p-0 gap-0">
            <DialogTitle className="sr-only">
              {selectedImage?.title || 'Gallery image'}
            </DialogTitle>
            {selectedImage && (
              <div>
                <FuiImage
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[75vh] aspect-video"
                  imgClassName="!object-contain"
                />
                <div className="border-t border-line px-6 py-4 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg tracking-[0.03em] text-fg uppercase">
                      {selectedImage.title}
                    </h3>
                    {selectedImage.description && (
                      <p className="text-sm text-mute mt-1">{selectedImage.description}</p>
                    )}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase whitespace-nowrap">
                    {selectedImage.category}
                    {selectedImage.date && ` // ${selectedImage.date}`}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
