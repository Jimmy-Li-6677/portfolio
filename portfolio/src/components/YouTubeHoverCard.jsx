import { useState } from 'react';

const YouTubeHoverCard = ({ videoId }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-64 overflow-hidden rounded shadow-md transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="YouTube thumbnail"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default YouTubeHoverCard;
