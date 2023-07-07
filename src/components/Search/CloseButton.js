import { Link } from "react-router-dom";

export const CloseSearchButton = ({ onClose }) => {
  return (
    <Link to="/">
      <button className="close-search" onClick={onClose}>
        Close
      </button>
    </Link>
  );
};
