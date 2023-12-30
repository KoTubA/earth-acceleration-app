import { PropTypes } from 'prop-types';

const defaultErrorMessage =
  'Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się z pomocą techniczną.';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="fixed font-display z-20 left-1/2 top-7 -translate-x-1/2 max-w-xl w-[calc(100%-3.5rem)] bg-white p-6 text-rose-400 border-4 border-rose-400 animate-pop-up before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:bg-rose-400 before:w-16 before:h-1 before:opacity-50 after:absolute after:top-4 after:left-1/2 after:-translate-x-1/2 after:bg-rose-400 after:w-16 after:h-1 after:origin-top-left after:scale-x-100 after:animate-load-slow">
      <h4 className="text-2xl font-bold mb-2 mt-2 md:mb-4">Oops!</h4>
      <p className="text-sm md:text-base">
        {message ? message : defaultErrorMessage}
      </p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
