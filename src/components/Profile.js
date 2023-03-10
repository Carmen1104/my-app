function Profile(props) {
    return (
    <div>
        <h3>Name: {props.fullname}</h3>
        <h3>Student ID: {props.stuID}</h3>
    </div>
    );
}

export default Profile;