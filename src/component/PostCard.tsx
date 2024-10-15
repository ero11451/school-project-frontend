import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable PostCard Component
const PostCard = ({ postId, imgUrl, title, description, authorName, authorAvatar, routePath }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(`/${routePath}/${postId}`)}
            className="group bg-white/30 backdrop-blur-lg flex flex-col min-w-[350px] min-h-[350px] border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
        >
            {imgUrl && (
                <div className="aspect-w-16 aspect-h-11">
                    <img
                        className="w-full object-cover rounded-xl"
                        src={imgUrl}
                        alt="Post Image"
                    />
                </div>
            )}
            <div className="my-6">
                <h3 className="text-xl font-semibold text-start text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-200 text-left">
                    {description}
                </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
                <img
                    className="size-8 rounded-full"
                    src={authorAvatar}
                    alt="Author Avatar"
                />
                <div>
                    <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                        By {authorName}
                    </h5>
                </div>
            </div>
        </button>
    );
};

export default PostCard;
