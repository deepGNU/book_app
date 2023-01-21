import { AiFillCloseCircle } from 'react-icons/ai';

const CloseBtn = ({ onClose }) => {
    return (
        <button
            className='btn close'
            title='Close'
            onClick={onClose}
        >
            <AiFillCloseCircle />
        </button>
    )
};

export default CloseBtn;