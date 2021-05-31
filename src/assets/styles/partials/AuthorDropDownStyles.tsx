import React from 'react';

const AuthorDropDownStyles = {
    control: (provided: any) => ({
        ...provided,
        borderRadius: '0',
        borderColor: '#959595',
        borderWidth: '2px',
        minHeight: '2em',
        height: '2em'
    }),

    input: (provided: any) => ({
        ...provided,
        margin: '0px'
    }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '30px'
    })
};

export default AuthorDropDownStyles;