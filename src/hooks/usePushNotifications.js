import { useState } from 'react';

const usePushNotifications = () => {
    const [permission, setPermission] = useState(Notification.permission);

    const askPermission = () => {
        Notification.requestPermission().then((perm) => setPermission(perm));
    };

    const sendNotification = (title, options) => {
        if (permission === 'granted') {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification(title, options);
            });
        }
    };

    return { permission, askPermission, sendNotification };
};

export default usePushNotifications;
