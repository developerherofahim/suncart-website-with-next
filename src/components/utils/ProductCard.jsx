'use client'


import { Eye } from "lucide-react";
import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const ProductCard = ({ product }) => {
    const { data: session } = authClient.useSession()

    console.log(session)

    const user = session?.user

    console.log(user)
    return (
        <div className="card bg-base-100 w-full shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-80 relative">
                <div className="absolute top-3 left-3 bg-[#F97316] text-white px-3 py-1 rounded-md text-sm font-semibold z-10">
                    -50%
                </div>
                <figure className="relative w-full h-80 overflow-hidden rounded-xl">
                    <Image
                        src={product.images}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />
                </figure>
            </div>
            <div className="card-body">
                <p className="text-xs font-semibold text-[#8B6B4F]">{product.brand}</p>
                <h2 className="card-title text-lg font-semibold text-[#252B42]">{product.name}</h2>
                <div>
                    <span className="flex gap-2 text-xs"><StarRating rating={product.rating} /></span>
                </div>
                <h2 className="text-lg font-semibold text-[#F97316]">${product.price}</h2>
                <div className="w-full justify-end">
                    {user ? (
                        <Link href={`/products/${product.id}`}><button className="btn btn-block bg-[#005F88] text-white text-sm font-bold"><Eye /> View Details</button></Link>
                    ) : (<Link href={`/login`}><button className="btn btn-block bg-[#005F88] text-white text-sm font-bold"><Eye /> Log In To View</button></Link>)}
                </div>
            </div>
        </div>

    );
};

export default ProductCard;