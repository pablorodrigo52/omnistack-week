import React from 'react';


export default function Header ({title, children}){
    return (
    <h1>{title} - {children}</h1>
    );
}