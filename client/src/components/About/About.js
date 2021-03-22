import {Redirect, useHistory, Switch, Route} from 'react-router-dom';

const About = ({
    match,
    history
}) => {

    // if (Math.random() > 0.5) {
    //     return <Redirect to="/" />
    // history.push('/');
    // return;
    // }


    return (
    <main className="main-container">
        <h1>About {match.params.name}</h1>

        <Switch>
            <Route path="/about/pesho">
                <h2>PESHO IS HERE</h2>
            </Route>
        </Switch>
    </main>
    );
}

export default About;
