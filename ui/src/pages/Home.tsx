import React from 'react';
import { useSearchParams } from 'react-router-dom';
 import { useTopStories } from '../hooks/useStories';
 import { usePagination } from '../hooks/usePagination';
 import { StoryList } from '../components/stories/StoryList';
 import './Home.css';

 export const Home: React.FC = () => {
  console.log('Home: rendering');
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, pageSize, totalPages: calculatedTotalPages } = usePagination();
  const { data, loading, error } = useTopStories(page, pageSize);
  console.log('Home: state', { page, pageSize, data, loading, error });
  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => {
      prev.set('page', newPage.toString());
      return prev;
    });
  };


  const totalPages = data ? Math.ceil(data.totalCount / data.pageSize) : calculatedTotalPages;

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Top Stories</h1>
        <p className="home__subtitle">
          The best stories from around the web, ranked by score
        </p>
      </div>

      <StoryList
        storyIds={data?.ids || []}
        currentPage={Number(page)}
        totalPages={totalPages}
        hasMore={data?.hasMore || false}
        onPageChange={handlePageChange}
        loading={loading}
        error={error}
        emptyMessage="No top stories available at the moment"
        className="home__story-list"
      />
    </div>
  );
};