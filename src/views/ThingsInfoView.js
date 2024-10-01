// Standart Import

// Local Import
import '../styles/ThingsInfoView.css'

// Functions

// Main
export default function ThingsInfoView ({thingsObj, isEditMode=false}) {
    return (
        <div>
            <input>{thingsObj.name}</input>
        </div>
    )
}
