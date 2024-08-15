import React, { useState } from 'react';
import usePushNotifications from '../hooks/usePushNotifications';

const NotificationSettings = () => {
    const { permission, askPermission, sendNotification } = usePushNotifications();
    const [settings, setSettings] = useState({
        receiveUpdates: true,
        notificationSound: 'default',
    });

    const handleSettingsChange = (e) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    const saveSettings = () => {
        localStorage.setItem('notificationSettings', JSON.stringify(settings));
        alert('Settings saved!');
    };

    const triggerNotification = () => {
        sendNotification('New Task Added!', {
            body: 'You have a new task in your to-do list.',
            icon: '/icons/icon-192x192.png',
        });
    };

    return (
        <div className="p-4 bg-white rounded shadow-md mt-6">
            <h2 className="text-lg font-bold mb-4">Notification Settings</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Receive Updates</label>
                <select
                    name="receiveUpdates"
                    value={settings.receiveUpdates}
                    onChange={handleSettingsChange}
                    className="block w-full p-2 border rounded"
                >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Notification Sound</label>
                <select
                    name="notificationSound"
                    value={settings.notificationSound}
                    onChange={handleSettingsChange}
                    className="block w-full p-2 border rounded"
                >
                    <option value="default">Default</option>
                    <option value="chime">Chime</option>
                    <option value="alert">Alert</option>
                </select>
            </div>
            <button
                onClick={saveSettings}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Save Settings
            </button>
            <button
                onClick={triggerNotification}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
            >
                Test Notification
            </button>
            <button
                onClick={askPermission}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-4"
            >
                {permission === 'granted' ? 'Permission Granted' : 'Ask Permission'}
            </button>
        </div>
    );
};

export default NotificationSettings;
