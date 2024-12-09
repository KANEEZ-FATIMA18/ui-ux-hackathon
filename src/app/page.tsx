import LeatestBlog from '@/components/Blog';
import DiscountItem from '@/components/Discount';
import FeaturedProducts from '@/components/Featured';
import HeroSection from '@/components/Hero';
import LatestProducts from '@/components/LatestProducts';
import NewsletterBanner from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import ShopexOffers from '@/components/ShopxOffers';
import TopCategories from '@/components/TopCategories';
import TrendingProducts from '@/components/TrendingProducts';



export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffers/>
      <ProductCard/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <NewsletterBanner/> 
      <LeatestBlog/>
    </div>
   
  );
}