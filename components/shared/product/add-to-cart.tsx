'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { CartItem } from '@/types';
import { addItemToCart } from '@/lib/actions/cart.actions';
import { toast } from 'sonner';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    // Handle success add to cart
    toast(`${item.name} added to cart`, {
      description: (
        <Button
          className="mt-2 bg-primary text-white hover:bg-gray-800"
          onClick={() => router.push('/cart')}
        >
          Go To Cart
        </Button>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddCart}>
      <Plus /> Add To Cart
    </Button>
  );
};

export default AddToCart;
