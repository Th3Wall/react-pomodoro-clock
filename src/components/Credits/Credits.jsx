import './credits.sass';
import { useStateValue } from "../../contexts/stateProvider";

const Credits = () => {

    const [{githubProfileUrl, githubUsername}] = useStateValue();

    return (
        /* fix: class to className */
        <h5 className="credits__block">
            Developed with ❤️ by&nbsp;
            <a className="credits__link" href={githubProfileUrl}>
                {githubUsername}
            </a>
        </h5>
    )
}

export default Credits
