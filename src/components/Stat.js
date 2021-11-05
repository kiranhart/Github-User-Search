import React from 'react';

const Stat = ({name, value}) => {
    return <div>
        <p className="text-sm">{name}</p>
        <p className="text-xl font-semibold">{value}</p>
    </div>;
};

export default Stat;
