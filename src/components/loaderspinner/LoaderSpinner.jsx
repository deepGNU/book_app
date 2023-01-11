import './LoaderSpinner.css';
import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = ({ width = 200, height = 200, color = getComputedStyle(document.body).getPropertyValue('--brown-yellow') }) => {
    return (
        <div className='loader'>
            <RotatingLines
                width={width}
                height={height}
                color={color}
                strokeColor={color}
            />
        </div>
    );
};

export default LoaderSpinner;