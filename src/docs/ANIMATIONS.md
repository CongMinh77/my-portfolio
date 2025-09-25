# Hướng dẫn sử dụng các component animation

Dự án này sử dụng thư viện Framer Motion để tạo các hiệu ứng chuyển động mượt mà. Dưới đây là hướng dẫn sử dụng các component animation đã được tạo.

## Cài đặt

Thư viện Framer Motion đã được cài đặt trong dự án. Nếu bạn cần cài đặt lại, hãy sử dụng lệnh:

```bash
npm install framer-motion
```

## Các component animation có sẵn

### 1. PageTransition

Component này được sử dụng để tạo hiệu ứng chuyển trang mượt mà.

```tsx
import PageTransition from '../components/PageTransition';

const MyPage = () => {
  return (
    <PageTransition>
      {/* Nội dung trang */}
    </PageTransition>
  );
};
```

### 2. LoadingScreen

Component này hiển thị màn hình loading khi đang chuyển trang hoặc tải dữ liệu.

```tsx
import LoadingScreen from '../components/LoadingScreen';

// Trong component của bạn
{isLoading && <LoadingScreen message="Đang tải dữ liệu..." />}
```

### 3. AnimatedText

Component này tạo hiệu ứng cho văn bản, có thể là từng từ hoặc từng ký tự.

```tsx
import AnimatedText from '../components/AnimatedText';

// Hiệu ứng từng từ
<AnimatedText 
  text="Đây là một đoạn văn bản có hiệu ứng" 
  type="word" 
  variant="h2" 
  delay={0.2} 
/>

// Hiệu ứng từng ký tự
<AnimatedText 
  text="Hello World" 
  type="character" 
  variant="h1" 
  delay={0.1} 
/>
```

### 4. AnimatedImage

Component này tạo hiệu ứng cho hình ảnh.

```tsx
import AnimatedImage from '../components/AnimatedImage';

// Hiệu ứng fade in
<AnimatedImage 
  src="/path/to/image.jpg" 
  alt="Mô tả hình ảnh" 
  effect="fade" 
  delay={0.3} 
/>

// Hiệu ứng fade up
<AnimatedImage 
  src="/path/to/image.jpg" 
  alt="Mô tả hình ảnh" 
  effect="fadeUp" 
  delay={0.3} 
/>

// Hiệu ứng scale
<AnimatedImage 
  src="/path/to/image.jpg" 
  alt="Mô tả hình ảnh" 
  effect="scale" 
  delay={0.3} 
/>
```

### 5. AnimatedSection

Component này tạo hiệu ứng cho một phần của trang.

```tsx
import AnimatedSection from '../components/AnimatedSection';

// Hiệu ứng fade up
<AnimatedSection direction="up" delay={0.2}>
  {/* Nội dung phần */}
</AnimatedSection>

// Hiệu ứng fade left
<AnimatedSection direction="left" delay={0.3}>
  {/* Nội dung phần */}
</AnimatedSection>

// Hiệu ứng fade right
<AnimatedSection direction="right" delay={0.4}>
  {/* Nội dung phần */}
</AnimatedSection>
```

### 6. ScrollProgressBar

Component này hiển thị thanh tiến trình cuộn trang.

```tsx
import ScrollProgressBar from '../components/ScrollProgressBar';

// Trong component App hoặc Layout của bạn
<ScrollProgressBar />

// Tùy chỉnh
<ScrollProgressBar 
  color="secondary.main" 
  height={6} 
  position="bottom" 
/>
```

## Các animation variants có sẵn

Dự án cung cấp một số animation variants có sẵn trong file `src/animations/variants.ts`:

- `fadeIn`: Hiệu ứng mờ dần hiện ra
- `fadeInUp`: Hiệu ứng di chuyển từ dưới lên và mờ dần hiện ra
- `fadeInDown`: Hiệu ứng di chuyển từ trên xuống và mờ dần hiện ra
- `fadeInLeft`: Hiệu ứng di chuyển từ trái sang và mờ dần hiện ra
- `fadeInRight`: Hiệu ứng di chuyển từ phải sang và mờ dần hiện ra
- `scaleUp`: Hiệu ứng phóng to từ nhỏ đến lớn
- `staggerContainer`: Container để tạo hiệu ứng lần lượt cho các phần tử con
- `bounce`: Hiệu ứng nảy lên
- `rotate`: Hiệu ứng xoay
- `flip`: Hiệu ứng lật
- `textCharacter`: Hiệu ứng cho từng ký tự văn bản

Bạn có thể sử dụng các variants này trực tiếp với Framer Motion:

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const MyComponent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Nội dung */}
    </motion.div>
  );
};
```

## Hook useScrollProgress

Hook này theo dõi tiến trình cuộn trang và trả về giá trị từ 0-100.

```tsx
import { useScrollProgress } from '../hooks/useScrollProgress';

const MyComponent = () => {
  const scrollProgress = useScrollProgress();
  
  return (
    <div>
      <p>Tiến trình cuộn: {scrollProgress.toFixed(0)}%</p>
      {/* Sử dụng giá trị scrollProgress để tạo hiệu ứng khác */}
    </div>
  );
};
```

## Tối ưu hiệu suất

Để tối ưu hiệu suất khi sử dụng các animation:

1. Luôn sử dụng thuộc tính `viewport={{ once: true }}` để animation chỉ chạy một lần khi phần tử xuất hiện trong viewport.
2. Sử dụng `will-change` CSS property cho các phần tử có animation phức tạp.
3. Tránh animation quá nhiều phần tử cùng một lúc.
4. Sử dụng `transform` thay vì `top`, `left`, `right`, `bottom` để tạo hiệu ứng di chuyển.
5. Sử dụng `opacity` thay vì `visibility` để tạo hiệu ứng hiện/ẩn.

## Tùy chỉnh animation

Bạn có thể tùy chỉnh các animation bằng cách tạo các variants mới hoặc mở rộng các variants có sẵn:

```tsx
import { Variants } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

// Mở rộng variant có sẵn
const customFadeInUp: Variants = {
  ...fadeInUp,
  visible: {
    ...fadeInUp.visible,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

// Tạo variant mới
const customAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};
```
