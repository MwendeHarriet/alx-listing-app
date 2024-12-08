import { FC } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">ALX Listing App</h1>
        <p className="text-lg text-gray-600 mt-2">Welcome to the best place to find properties</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Luxury Villa" description="A beautiful luxury villa with a pool" />
        <Card title="Cozy Apartment" description="A cozy apartment in the city center" />
        <Card title="Beach House" description="A beach house with an amazing view" />
      </main>

      <footer className="text-center mt-8">
        <Button label="See More Listings" onClick={() => alert('Redirecting to more listings')} />
      </footer>
    </div>
  );
};

export default Home;
