import './documentDataInput.scss';

const DocumentDataInput = ({ inputWidth, name, value, func, type }) => {
    const handleKeyPress = (e) => {
        if (type === 'text') {
            if (e.key.match(/[0-9]/)) {
                e.preventDefault();
            }
        }
        if (type === 'digits' && value < 0) {
            if (e.key.match(/[-0-9]/)) {
                e.preventDefault();
            }
        }
    };

    return (
        <input
            className='custom-data-input'
            // style={{ width: `${inputWidth}px` }}
            type={type === 'digits' ? 'number' : 'text'}
            name={name}
            value={value}
            onChange={func}
            onKeyDown={handleKeyPress}
        />
    );
};

export default DocumentDataInput;
