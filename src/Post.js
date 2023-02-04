const Post = ({ post }) => {
    return (
        <article>
            <h2>{post.fname} {post.lname}</h2>
            <p>Email: {post.email}</p>
            <p>Department ID: {post.department_id}</p>
            <p>Employee ID: {post.employee_id}</p>
            <p>Hire date: {post.hire_date}</p>
            <p>Job ID: {post.job_id}</p>
            <p>Manager ID: {post.manager_id}</p>
            <p>Phone Number: {post.phone}</p>
            <p>Salary: {post.salary}</p>
        </article>
    )
}
export default Post