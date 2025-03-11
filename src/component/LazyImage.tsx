// import  { useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// interface LazyImageProps {
//   src: string;
//   alt: string;
//   className?: string;
//   placeholder?: string; // Optional placeholder for blurred loading
// }

// const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, placeholder }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { ref, inView } = useInView({ triggerOnce: true });

//   return (
//     <div ref={ref} className="lazy-image-container">
//       {inView && (
//         <img loading="lazy" 
//           src={src}
//           alt={alt}
//           className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
//           onLoad={() => setIsLoaded(true)}
//           style={{
//             transition: 'opacity 0.3s',
//             opacity: isLoaded ? 1 : 0,
//           }}
//         />
//       )}
//       {!isLoaded && placeholder && <img loading="lazy"  src={placeholder} alt="placeholder" className="placeholder" />}
//     </div>
//   );
// };

// export default LazyImage;
