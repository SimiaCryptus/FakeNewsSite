import React from 'react';
import { useSearchParams } from 'react-router-dom';
 import { useNewStories } from '../hooks/useStories';
 import { usePagination } from '../hooks/usePagination';
 import { StoryList } from '../components/stories/StoryList';
 import './NewStories.css';

 export const NewStories: React.FC = () => {
  console.log('NewStories: rendering');
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, pageSize, totalPages: calculatedTotalPages } = usePagination();
  const { data, loading, error } = useNewStories(page, pageSize);
  console.log('NewStories: state', { page, pageSize, loading, error, data });
  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => {
      prev.set('page', newPage.toString());
      return prev;
    });
  };


  const totalPages = data ? Math.ceil(data.totalCount / data.pageSize) : calculatedTotalPages;

  return (
    <div className="new-stories">
      <div className="new-stories__header">
        <h1 className="new-stories__title">New Stories</h1>
        <p className="new-stories__subtitle">
          The latest stories submitted to the platform
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
        emptyMessage="No new stories available at the moment"
        className="new-stories__story-list"
      />
    </div>
  );
};