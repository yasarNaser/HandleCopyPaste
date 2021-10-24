import './App.css';

function App() {
    const handleKeyDown = (event) => {
        // event.preventDefault();
        let charCode = String.fromCharCode(event.which).toLowerCase();
        if ((event.ctrlKey || event.metaKey) && charCode === 'c') {
            event.metaKey ? console.log("Meta+C Pressed") : console.log("CTRL+C Pressed");

        } else if ((event.ctrlKey || event.metaKey) && charCode === 'v') {
            event.metaKey ? console.log("Meta+V Pressed") : console.log("CTRL+V Pressed");
        }

    }

    return (
        <div className="App">
            <form>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        onKeyDown={handleKeyDown}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        onKeyDown={handleKeyDown}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
