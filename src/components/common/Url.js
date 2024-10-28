const URL = ({ url, text }) => {
    const className = url ? "text-url-gray hover:underline" : "";
    return (
        <a href={url} className={className}>{text}</a>
    );
};

export default URL;