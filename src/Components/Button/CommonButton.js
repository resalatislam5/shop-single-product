import React from 'react';

const CommonButton = ({text}) => {
    return (
        <div>
            <button className="btn bg-[#EC6861] px-5 text-xl hover:bg-[#f57871] border-0">{text}</ button>
        </div>
    );
};

export default CommonButton;