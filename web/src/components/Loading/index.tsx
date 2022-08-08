import './styles.css';
import React from 'react';

interface Props {
    show: boolean;
}

const Loading: React.FC<Props> = ({show}) => {
    return (
        <div className={show ? 'dot-falling' : 'none'}></div>
    )
}

export default Loading;