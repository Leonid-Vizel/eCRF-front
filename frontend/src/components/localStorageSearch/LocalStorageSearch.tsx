import React, {useEffect, useState} from 'react';
import Autosuggest from 'react-autosuggest';

const LocalStorageSearch = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [storedData, setStoredData] = useState(
        JSON.parse(localStorage.getItem('autosuggestData')) || []
    );

    useEffect(() => {
        localStorage.setItem('autosuggestData', JSON.stringify(storedData));
    }, [storedData]);

    const onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.trim().toLowerCase();
        const filteredSuggestions = storedData.filter(
            item => item.toLowerCase().includes(inputValue)
        );

        setSuggestions(filteredSuggestions);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionSelected = (event, { suggestion }) => {
        console.log('success')
    };

    const getSuggestionValue = suggestion => suggestion;

    const renderSuggestion = suggestion => (
        <div className='localStorage'>
            {suggestion}
        </div>
    );

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const onInputKeyDown = event => {
        if (event.key === 'Enter') {
            const newValue = value.trim();
            if (newValue) {
                setStoredData([...storedData, newValue]);
            }
            setValue('');
        }
    };

    const onBlur = () => {
        const newValue = value.trim();
        if (newValue) {
            setStoredData([...storedData, newValue]);
        }
    };

    const inputProps = {
        placeholder: 'Введите данные',
        value,
        onChange,
        onKeyDown: onInputKeyDown,
        onBlur,
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
};

export default LocalStorageSearch;