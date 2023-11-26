
const Procceed = ({isOpen,onCancel}) => {
    return (
        <>
        { isOpen && (
            <div className="modal-overlay">
                <div className="modal">
                    <p>Thankyou for chosing to work with blackie Networks wait for STK prompt Enter your mpesa pin
                        We value Our Client.
                    </p>
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