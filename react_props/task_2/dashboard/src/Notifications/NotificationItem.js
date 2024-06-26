import React from 'react';
import PropTypes from 'prop-types'

function NotificationItem({ type, html, value = '' }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : undefined}>
      { !html ? value : undefined }
    </li>
  );
}

export default NotificationItem;