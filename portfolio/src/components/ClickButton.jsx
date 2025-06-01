import { useNavigate } from 'react-router-dom';

const ClickButton = ({ title, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'snowboard_video') {
      window.open('https://youtube.com/shorts/Pc2pq-Xzyrs?feature=share', '_blank');
    } else if (title ==='About Me') {
      navigate('/aboutme');
    } else if (title ==='Portfolio') {
      navigate('/');
    } else if (title ==='Contact') {
      navigate('contact');
    } else {
      onClick?.();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={className}>
      <span>{title}</span>
    </button>
  );
};
export default ClickButton;