import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value = '' }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : undefined}>
      { !html ? value : undefined }
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string
};

export default NotificationItem;
