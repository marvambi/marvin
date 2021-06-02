import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
        <header className="header">
            <h1>
                { title }
            </h1>
            <Button onClick={onClick} color='green' text='Capture' />
        </header>
    )
}

Header.defaultProps = {
    title: "Memories",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
