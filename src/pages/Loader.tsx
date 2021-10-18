import React, { FC } from 'react'
import Loader from "react-loader-spinner";
// import CSS from 'csstype';

export type LoaderProp = {
    width:number;
    height:number;
    style?:{};
}

// const styles: CSS.Properties = {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "100px"
// };

const ReactLoader: FC<LoaderProp> = ({width, height}) => {
    return (
        <Loader
        type='TailSpin'
        color='#00000059'
        height={height}
        width={width}
      ></Loader>
    )
}

export default ReactLoader;

