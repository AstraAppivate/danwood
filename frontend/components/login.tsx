export function Login() {
    return (
        <div className="login">
        <div className="border border-white">
            <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}