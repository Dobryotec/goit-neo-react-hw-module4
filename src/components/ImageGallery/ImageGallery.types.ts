export interface IImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface IImageGalleryProps {
  images: IImage[];
  handleCard: (id: string) => void;
  openModal: () => void;
}
