import React from "react";

const Contact = () =>{
    return(
        <div className="contact-content">
            <h1>Contact Me</h1>
            <p>If you would like to get in touch, feel free to reach out through any of the methods below!</p>
            <ul>
                <li>
                    <strong>Email:</strong> <a href="mailto:yourname@example.com">yourname@example.com</a>
                </li>
                <li>
                    <strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a>
                </li>
                <li>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
                </li>
                <li>
                    <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
                </li>
            </ul>
        </div>

    );
}

export default Contact;