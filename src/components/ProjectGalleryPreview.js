import { Image } from 'antd';

export default function ProjectGalleryPreview({ images, current, onChange, onClose }) {
  return (
    <Image.PreviewGroup
      items={images.map(({ url }) => ({ src: url, alt: '' }))}
      preview={{ open: true, current, onChange, onOpenChange: (open) => { if (!open) onClose(); } }}
    />
  );
}
