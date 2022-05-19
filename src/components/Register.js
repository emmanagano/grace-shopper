const Register = () => {
    return (
        <div className="register_main">
            <form>
                <input
                    type="text"
                    placeholder="Username*"
                />
                <input
                    type="text"
                    placeholder="Email*"
                />
                <input
                    type="text"
                    placeholder="Password*"
                />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register;