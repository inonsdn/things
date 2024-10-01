// Standart Import

// Local Import
import '../styles/SideMenu.css'
import '../styles/lightBase.css'

// Functions
const menuItems = [
    {
        name: 'Home',
    },
    {
        name: 'Analysis',
    },
]

// Main
export default function SideMenu (props) {

    let style = {}
    if (!props.isShow) {
        style = {
            display: 'none'
        }
    }

    const onToggle = () => {
        props.onClickToggle(!props.isShow)
    }

    return (
        <div className='side-menu bg-item'>
            <div className='menu-item-expand' onClick={onToggle}>
                <h2>=</h2>
            </div>
            <div className='menu-item light-text'>
                <h3>Things</h3>
            </div>
            <div className='menu-item light-text'>
                <h3>Add Things</h3>
            </div>
            <div className='menu-item light-text'>
                <h3>Setting</h3>
            </div>
            <div className='menu-item light-text'>
                <h3>Setting Account test long long text multiline text</h3>
            </div>
        </div>
    )
}