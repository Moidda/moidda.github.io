import URL from './Url';

const TitleWithYear = ({ title, url, year }) => {
    var titleComponent;
    if (url) {
        titleComponent =
            <URL
                className="overflow-wrap break-words flex-1"
                url={url}
                text={title}
            />;
    }
    else {
        titleComponent = <span className="overflow-wrap break-words flex-1">{title}</span>;
    }
    return (
        <h2 className="flex flex-row items-center justify-between gap-4 text-xl font-bold">
            {titleComponent}
            <div className="italic text-right text-subtitle-gray text-xl whitespace-nowrap">{year}</div>
        </h2>
    );
}

export default TitleWithYear;