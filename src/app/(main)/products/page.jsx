
import ProductCard from '@/components/utils/ProductCard';
import { getProductData } from '@/lib/data';
import { poppins } from '@/lib/font';
import React from 'react';

const ProductsPage = async() => {
    const products = await getProductData();
    return (
        <section
            className={`bg-[#F5EDE0] py-12 sm:py-16 lg:py-20 ${poppins.className}`}
        >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {
                    products.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default ProductsPage;