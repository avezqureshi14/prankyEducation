import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios
      .get('http://localhost:8800/announcements')
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [expandedAnnouncementIds, setExpandedAnnouncementIds] = useState([]);

  const toggleExpanded = (announcementId) => {
    setExpandedAnnouncementIds((prevIds) => {
      if (prevIds.includes(announcementId)) {
        return prevIds.filter((id) => id !== announcementId);
      } else {
        return [...prevIds, announcementId];
      }
    });
  };

  return (
    <div>
      {announcements.map((announcement) => (
        <Card style={{ margin: '1rem' }} key={announcement._id} title={announcement.topic}>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {expandedAnnouncementIds.includes(announcement._id)
              ? announcement.description
              : announcement.description.substring(0, 200)}
          </div>
          {announcement.description.length > 200 && (
            <Button
              type="link"
              onClick={() => toggleExpanded(announcement._id)}
              style={{ padding: 0, marginTop: '0.5rem' }}
            >
              {expandedAnnouncementIds.includes(announcement._id) ? 'Read Less' : 'Read More'}
            </Button>
          )}
          <p>
          <strong>
          Date Created: {new Date(announcement.dateCreated).toLocaleDateString()}
          </strong>
          </p>
        </Card>
      ))}
    </div>
  );
};

export default AnnouncementList;
