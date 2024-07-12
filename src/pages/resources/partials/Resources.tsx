'use client'

import { useEffect, useMemo, useState } from 'react';
import { TbClover } from 'react-icons/tb';

import Button from 'components/buttons/Button';
import UnstyledLink from 'components/links/UnstyledLink';

import { ResourceData } from 'constant/index';

interface resourceProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  buttonText: string;
  documentPATH: string;
  link: string;
}

interface TableProps {
  data: resourceProps[];
}

const Resources = ({ data }: TableProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {data.map((item, index) => (
        <div key={index} className="w-full h-auto rounded-md bg-slate-50 shadow-md p-5">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[auto,1fr] gap-2">
              <TbClover size='1.5rem' color='#38BDF8' className='place-self-center' />
              <h4 className='capitalize'>{item.title}</h4>
            </div>
            <p>{item.description}</p>
          </div>
          <UnstyledLink to ={`/resources/${item.slug}`} className='pt-5 flex justify-center items-center'>
            <Button variant='primary' className='capitalize'>
              {item.buttonText}
            </Button>
          </UnstyledLink>
        </div>
      ))}
    </div>
  );
}

const Resource = () => {
  const data: resourceProps[] = useMemo(() => ResourceData, []);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    setCategories(uniqueCategories);
    setSelectedCategory(uniqueCategories[0] || '');
  }, [data]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto w-full h-auto min-h-96">
      <div className="flex flex-wrap justify-center gap-3 px-6 xl:px-4 border-b-2 pb-5 border-primary">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            className="px-4 rounded-xl capitalize"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <Resources data={data.filter(item => item.category === selectedCategory)} />
    </div>
  );
}

export default Resource;
