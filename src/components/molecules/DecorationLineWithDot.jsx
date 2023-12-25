import PropTypes from 'prop-types';

const DecorationLineWithDot = ({ children, isLastChild }) => {
  console.log(isLastChild);
  return (
    <div
      className={`${
        isLastChild
          ? ''
          : 'before:hidden md:before:block before:absolute before:w-full before:h-px before:bg-black before:top-0'
      }
       flex flex-col items-center ${
         isLastChild ? 'pb-0 md:pr-0' : 'pb-10 md:pr-5'
       } md:items-start md:pb-0 md:pt-14 relative after:hidden md:after:block after:absolute after:w-8 after:h-8 after:rounded-full after:border after:border-sky-500 after:top-0 after:translate-y-[calc(-50%+1px)] after:bg-gray-100`}
    >
      {children}
    </div>
  );
};

DecorationLineWithDot.propTypes = {
  children: PropTypes.node.isRequired,
  isLastChild: PropTypes.bool,
};

export default DecorationLineWithDot;
