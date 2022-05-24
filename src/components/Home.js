const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="mt-3"><b>Requirement:</b>
                <br/>
                    Use API from https://reqres.in/ website to create website
                </div>
                <div>
                    Use the React library to create a basic website screen that includes the following functions:
                </div>
                <ul style={{ listStyleType: "none" }}>
                    <li>1. Login</li>
                    <li>2. Add User</li>
                    <li>3. Edit User</li>
                    <li>4. Delete User</li>
                    <li>5. Show All Users</li>
                    <li>6. Find User By Email and Name</li>
                    <li>7. Sort By Name and Id</li>
                    <li>8. Import User From CSV File</li>
                    <li>9. Export User to a CSV File</li>
                </ul>
                <div>
                    The website has a user interface, has a reasonable layout, and is compatible with many devices
                </div>
                <div>
                    Commit and push the source code to github public.
                    <br/>
                    Deploy the website to Heroku for demo.
                </div>
                <br/>
                <b>Result: </b>
                Completion time 1-3 days
                <br/>
                Backend requirements (optional)
                <br/>
            </div>
        </>
    )
}

export default Home;