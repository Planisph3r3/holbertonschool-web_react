import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


/* Notification item no esta en una posicion adecuada debido al desplazamiento a la esquina superior
   derecha, se cambio el prop para ocultar el menu de notificaciones y mostrar en su lugar solo
   Notification item que es el que se le aplica la animacion. El tema de ocultar el menu de notificaciones
   tras un hover para mostrar el Notification item todavia no esta implementado.
*/

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed salmon',
    background: 'white',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      fontSize: '20px',
      zIndex: 1000,
    },
  },
  ul: {
    padding: 0,
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
  p: {
    margin: '5px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
    },
  },
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.listNotifications.length <
      nextProps.listNotifications.length
      ? true
      : false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer = false, listNotifications = [] } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              x
            </button>
            {listNotifications.length === 0 ? (
              <p className={css(styles.p)}>No new notifications for now</p>
            ) : (
              <>
                <p className={css(styles.p)}>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                  {listNotifications.map((item) => (
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                      markAsRead={() => this.markAsRead(item.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
