import React from "react";

// Course Component
export default function Course({ course }) {

    // Destructuring Course Properties
    const { id, title, description, price, link, image } = course;

    return (
        <div className="course">
            {/* Course Image */}
            <img src={image} alt="Course" className="course-image" />
            {/* Course Title */}
            <h4 className="course-title">{title}</h4>
            {/* Course Description */}
            <p className="course-desc">{description}</p>
            {/* Course Price */}
            <h3 className="course-price">{price}&#128522; </h3>
            <div>
                {/* Course Link Button */}
                <div className="course-link">
                    <a href={link} target="_blank" className="button-link">
                        BAŞLAT
                    </a>
                </div>
            </div>
        </div>
    );
}
