// components/ResponsiveImage.tsx
import Image from "next/image";

interface Source {
  srcSet: string;
  media: string;
}

interface ResponsiveImageProps {
  alt: string;
  sources: Source[];
  defaultSrc: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  alt,
  sources,
  defaultSrc,
}) => {
  return (
    <picture>
      {sources.map((source, index) => (
        <source key={index} srcSet={source.srcSet} media={source.media} />
      ))}
      <Image src={defaultSrc} alt={alt} fill />
    </picture>
  );
};

export default ResponsiveImage;
