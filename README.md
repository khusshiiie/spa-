# Travel Explorer - Performance Optimization

## Objective
Optimize the performance of an existing React travel website using Google Lighthouse.

## Tools Used
* React
* Vite
* Google Lighthouse
* VS Code

## Optimizations Implemented

### 1. Image Optimization
* Converted hero image from JPEG to WebP
* Reduced image size from 1.37 MB to 379 KB

### 2. Lazy Loading
Added lazy loading for destination images:

jsx
<img
  src={destination.image}
  alt={destination.name}
  loading="lazy"
  decoding="async"
/>


### 3. Production Build
Used:

bash
npm run build
npm run preview


### 4. Reduced Network Payload
* Optimized hero background image
* Improved Largest Contentful Paint (LCP)

## Lighthouse Results

### Before Optimization

 Metric  Score
 Performance  72 
 Accessibility 93 
 Best Practices 100 
 SEO 83 

### After Optimization

 Metric Score 
 Performance 100 
 Accessibility 93 
 Best Practices 96 
 SEO 83

## Performance Improvements

 Metric Before After 
| FCP | 1.1s | 0.3s |
| LCP | 3.0s | 0.7s |

## Conclusion

The website performance was significantly improved through image optimization, lazy loading, and production build optimization. Lighthouse Performance Score increased from 72 to 100.