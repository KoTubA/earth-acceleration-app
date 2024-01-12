import PropTypes from 'prop-types';

const ListItem = ({ children }) => {
  return (
    <li className="relative pl-5 mb-3 before:absolute before:border before:rounded before:w-2 before:h-2 before:border-sky-500 before:left-0 before:top-2.5">
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
