import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ImagePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function ImagePreviewModal({ isOpen, onClose, imageUrl, title }: ImagePreviewModalProps) {
  if (!imageUrl) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-none">
        <DialogTitle className="sr-only">Image Preview: {title}</DialogTitle>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 