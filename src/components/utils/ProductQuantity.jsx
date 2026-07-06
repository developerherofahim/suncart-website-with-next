'use client'

import { ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }
    return (
        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button
                    onClick={decreaseQuantity}
                    className="px-4 py-3 hover:bg-muted transition-colors font-bold"
                >
                    -
                </button>

                <span className="px-5 py-3 font-semibold border-x border-border min-w-12 text-center">
                    {quantity}
                </span>

                <button
                    onClick={increaseQuantity}
                    className="px-4 py-3 hover:bg-muted transition-colors font-bold"
                >
                    +
                </button>
            </div>

            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-[#F97316] text-white hover:bg-[#F97316]/90">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
            </button>
        </div>
    );
};

export default ProductQuantity;