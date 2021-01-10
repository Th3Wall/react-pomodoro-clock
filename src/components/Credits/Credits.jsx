import './credits.sass';
import { useStateValue } from "../../contexts/stateProvider";

const Credits = () => {

    const [{githubProfileUrl, githubUsername}] = useStateValue();

    return (
        <h5 class="credits__block">
            Developed with ❤️ by&nbsp;
            <a class="credits__link" href={githubProfileUrl}>
                {githubUsername}
            </a>
        </h5>
    )
}

export default Credits
