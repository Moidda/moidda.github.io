import { COLORS } from "../../constants/Colors";

const URL = ({ url, text }) => (
    <a href={url} className={`text-[${COLORS.URL_GRAY}] hover:underline`}>{text}</a>
);

export default URL;