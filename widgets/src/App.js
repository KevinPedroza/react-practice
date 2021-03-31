import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <button onClick={ () => setShowDropdown(!showDropdown) }>Toggle DropDown</button>
            {
                showDropdown 
                ?
                    <Dropdown 
                        selected={ selected } 
                        onSelectedChange={ setSelected } 
                        options={ options } 
                    />
                :
                    null  
            }

            <Translate />
        </div>
    );
};