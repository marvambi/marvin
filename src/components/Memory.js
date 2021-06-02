import { FaTimes } from 'react-icons/fa'

const Memory = ({ memory, onDelete }) => {
    return (
        <div className="task">
            <h3>
                {memory.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(memory.id)} />
            </h3>
            <p>{memory.day}</p>
        </div>
    )
}

export default Memory
