import './LoaderSpinner.css';
import { RotatingLines } from "react-loader-spinner";

const LoaderSpinner = ({ width = 700, height = 700, color = "#555" }) => {
    return (
        <div
            className="loader d-flex justify-content-center align-items-center my-5"
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