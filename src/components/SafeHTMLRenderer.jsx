import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

function SafeHTMLRenderer({ htmlString }) {
  // Sanitize the HTML string
  const sanitizedHTML = DOMPurify.sanitize(htmlString);

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

SafeHTMLRenderer.propTypes = {
  htmlString: PropTypes.string.isRequired,
};

export default SafeHTMLRenderer;
