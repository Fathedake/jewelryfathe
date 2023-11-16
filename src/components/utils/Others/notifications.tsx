

import {notification } from 'antd'
export const openNotificationInfo = (title: string, description: string, bgColor: string = '#46c93a') => {
    notification.info({
        message: <span className='text-white'>{title}</span>,
        description: <span className='text-white'>{description}</span>,
        placement: 'bottomRight',
        style: { background: bgColor, color: '' },
    });
};
