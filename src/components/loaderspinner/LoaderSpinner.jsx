import './LoaderSpinner.css';
import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = ({ width = 700, height = 700, color = getComputedStyle(document.body).getPropertyValue('--brown-yellow') }) => {
    return (
        <div
            className="loader d-flex justify-content-center align-items-center my-5"
            // className='loader position-fixed-centered'
        >
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