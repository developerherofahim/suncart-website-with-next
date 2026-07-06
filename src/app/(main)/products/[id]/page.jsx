
import ProductCard from '@/components/utils/ProductCard';
import ProductQuantity from '@/components/utils/ProductQuantity';
import StarRating from '@/components/utils/StarRating';
import { getProductData } from '@/lib/data';
import { poppins } from '@/lib/font';
import { Check, CircleCheckBig, Tag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

const ProductDetailsPage = async ({ params }) => {

    const { id } = await params

    console.log(id, "params")

    const products = await getProductData(id);

    const product = products.find(
        (item) => item.id === Number(id)
    );
    console.log(product);

    console.log(products)

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );
    return (
        <section
            className={`bg-[#fff9f0] flex flex-col justify-between md:flex-row gap-8 py-12 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-16 ${poppins.className}`}
        >
            <div className='relative w-full md:w-1/2 h-175'>
                <div className="absolute top-6 left-6 bg-[#F97316] text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                    {discount}%
                </div>
                <Image src={product.images} alt={product.name}
                    fill
                    priority
                    sizes=""
                    className='object-cover rounded-lg' />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex items-center gap-2 mb-3'>
                    <span className='text-xs font-bold text-[#F97316] uppercase'>{product.category}</span>
                    <span className='text-muted-foreground'>.</span>
                    <span className='text-muted-foreground text-sm'>{product.brand}</span>
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-4 leading-tight'>{product.name}</h1>
                </div>
                <div>
                    <span className="flex gap-2 text-lg mb-5"><StarRating rating={product.rating} /></span>
                </div>
                <div className='mb-6 flex items-baseline gap-3'>
                    <span className='text-4xl font-black text-[#F97316]'>${product.price}</span>
                    <span className='text-xl text-muted-foreground line-through'>${product.oldPrice}</span>
                    <span className='text-sm font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full'>Save ${product.oldPrice - product.price}</span>
                </div>
                <p className='text-muted-foreground leading-relaxed mb-6'>{product.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 gap-2 rounded-full">
                            <Tag className="text-muted-foreground text-xs" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-3 mb-6'>
                    <CircleCheckBig className='text-green-600' />
                    <span className='text-sm text-green-600 font-medium'>{product.availability} ({product.stock} Available)</span>
                </div>
                <ProductQuantity></ProductQuantity>
                <div className='flex gap-3 p-3 bg-muted text-muted-foreground rounded-xl'>
                    <span >{product.shipping.shippingCost} Shipping on orders over $50</span>
                    <span >.</span>
                    <span >Usually Ships in {product.shipping.delivery}</span>
                </div>

            </div>
        </section>

    );
};

export default ProductDetailsPage;