'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/types';
import AutoPlay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className="w-full max-w-3xl mx-auto mb-12 px-4"
      opts={{
        loop: true,
      }}
      plugins={[
        AutoPlay({
          delay: 6000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href={`product/${product.slug}`}>
              <div className="relative mx-auto">
                <Image
                  src={product.banner!}
                  alt={product.name}
                  height="0"
                  width="0"
                  sizes="100vw"
                  className="w-full h-auto"
                ></Image>
                <div className="absolute inset-0 flex items-end justify-start">
                  <h2 className="bg-gray-900 bg-opacity-50 text-base font-bold px-4 py-2 text-white text-left">
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
