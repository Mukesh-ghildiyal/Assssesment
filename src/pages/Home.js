import React from 'react';
import TodoList from '../components/TodoList';
import NotificationSettings from '../components/NotificationSettings';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <TodoList />
            <NotificationSettings />
        </div>
    );
};

export default Home;
