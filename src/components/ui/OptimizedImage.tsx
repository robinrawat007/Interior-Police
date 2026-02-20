import { useState } from "react";

export default function OptimizedImage({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative">
            {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
