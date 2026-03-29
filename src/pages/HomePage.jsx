import Banner from '../components/Home/Banner';
import PolicyBar from '../components/Home/PolicyBar';
import ProductTabs from '../components/Home/ProductTabs';
import CategoryGrid from '../components/Home/CategoryGrid';

const HomePage = () => {
  return (
    <>
      <Banner />
      <PolicyBar />
      <ProductTabs />
      <CategoryGrid />
    </>
  );
};

export default HomePage;