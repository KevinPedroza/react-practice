import React from 'react';
import LanguageContext from './context/languageContext';

class Button extends React.Component {
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <button className="ui button primary">
            <LanguageContext.Consumer>
                { (value) => value === 'english' ? 'Submit' : 'Voorleggen' }
            </LanguageContext.Consumer>
            </button>
            // <button className="ui button primary">{ text }</button>
        );
    }
}

export default Button;