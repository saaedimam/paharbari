import React from 'react';
import Card from '../ui/Card';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Organic Bananas',
    description: 'Naturally sweet and pesticide-free, grown in our organic plantations.',
    image: 'https://images.pexels.com/photos/2116020/pexels-photo-2116020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '৳120/dozen'
  },
  {
    id: 2,
    name: 'Fresh Lemons',
    description: 'Tangy and zesty, perfect for refreshing drinks and cooking.',
    image: 'https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '৳80/kg'
  },
  {
    id: 3,
    name: 'Pure Honey',
    description: 'Raw, unfiltered honey from our sustainable bee farms.',
    image: 'https://images.pexels.com/photos/9580823/pexels-photo-9580823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '৳450/500g'
  },
  {
    id: 4,
    name: 'Artisanal Coffee',
    description: 'Single-origin coffee beans, sun-dried and roasted to perfection.',
    image: 'https://images.pexels.com/photos/977878/pexels-photo-977878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '৳350/250g'
  },
  {
    id: 5,
    name: 'Organic Cashews',
    description: 'Crunchy, nutritious cashews from our sustainable orchards.',
    image: 'https://images.pexels.com/photos/4065908/pexels-photo-4065908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '৳450/250g'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Organic Harvest</h2>
          <p className="text-lg text-green-700/80 max-w-2xl mx-auto">
            From fresh fruits to pure honey, our produce embodies the essence of nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                <p className="text-green-700/70 mb-4 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-medium">{product.price}</span>
                  <button className="text-green-700 hover:text-amber-500 font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products