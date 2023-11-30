import User from "../userId/userid"

const Procceed = ({isOpen,onCancel}) => {
    return (
        <>
        { isOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <p>Thankyou for chosing to work with blackie Networks  Enter your mpesa-number  below
                        We value Our Client.
                    </p>
                        <User/>
                    <div className="button-container">
                        <button className="prompt-button" onClick={onCancel}>Close</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Procceed