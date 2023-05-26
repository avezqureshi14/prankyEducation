import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';
import AnnouncementList from './AnnouncementList';
import PlacementTable from './PlacementList';

const Container = () => {
  return (
    <section id='#explore' className="container" style={{ margin: '3rem' }}>
      <div className="site-content">
       <AnnouncementList  />
       <PlacementTable />
      </div>
    </section>
  );
};

export default Container;
