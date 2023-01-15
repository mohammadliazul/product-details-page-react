import React from 'react';

const DetailsThumb = ({images, handleImgChange, smImgsRef}) => {
    return (
        <div className="thumb" ref={smImgsRef}>
            {
                images.map((img, index) =>(
                    <img src={img} alt="small img" key={index} 
                        onClick={() => handleImgChange(index)}
                    />
                ))
            }
        </div>
    );
};

export default DetailsThumb;