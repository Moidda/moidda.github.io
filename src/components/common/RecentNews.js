import React from 'react';
import { NEWS } from '../../constants/News';

const showCount = 5;

// Function to safely render HTML content
const createMarkup = (htmlContent) => {
    return { __dangerouslySetInnerHTML: { __html: htmlContent } };
};

const RecentNews = () => {
    return (
        <>
        <h1 className="text-2xl font-bold">Recent News</h1>
        <ul className='pl-2 mt-1 space-y-3'>
            {NEWS.slice(0, showCount).map((news, index) => (
                <li key={index} className="flex flex-col text-left items-top">
                    <span className="mr-2 font-bold">{news.date}</span>
                    <span>{news.title.prefix}<strong>{news.title.bold}</strong></span>
                </li>
            ))}
        </ul>
        </>
    );
};

export default RecentNews;