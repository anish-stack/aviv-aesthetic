'use client';
import { getCategories } from '@/actions/category';
import { useEffect, useState } from 'react';
import * as qs from 'qs';

export const useCategoryDropdown = () => {
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const getCategoryDropdown = async (searchTerm?: string) => {
    setLoading(true);

    try {
      setSearchTerm(searchTerm ? searchTerm : '');
      let searchParams = {
        search: {
          name: searchTerm,
        },
      };
      const queryString = qs.stringify(searchParams, {
        encodeValuesOnly: true,
      });
      const data = await getCategories(queryString);
      if (data && data.categories && data.categories.length > 0) {
        const mapped_categories = data.categories.map((category: any) => {
          return {
            value: category._id,
            label: category.name,
          };
        });
        setCategory(mapped_categories);
      } else {
        setCategory([]);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategoryDropdown('');
  }, []);
  return {
    getCategoryDropdown,
    categories,
    categories_loading: loading,
    categories_searchTerm: searchTerm,
    setCategorySearchTerm: setSearchTerm,
  };
};
