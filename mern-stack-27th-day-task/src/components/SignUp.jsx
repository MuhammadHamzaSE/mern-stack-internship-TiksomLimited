import React from 'react'
import { useState } from 'react';
import Pic from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.png"
import "./SignUp.css"

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    gender: "",
    skills: [],
    semester: "",
  });


  const [errors, setErrors] = useState({});

  const [submittedStudent, setSubmittedStudent] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setUser((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!user.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!user.department) {
      newErrors.department = "Please select department";
    }

    if (!user.gender) {
      newErrors.gender = "Please select gender";
    }

    if (user.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    if (!user.semester) {
      newErrors.semester = "Please select semester";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

   
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStudent(null);
      return;
    }

    setErrors({});
    setSubmittedStudent(user);
  };


  const handleReset = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      department: "",
      gender: "",
      skills: [],
      semester: "",
    });

    setErrors({});
    setSubmittedStudent(null);
  };
  return (
    <div className='container'>

        <div className='container2'>
        <h1>Get Started Now</h1> 
        <form onSubmit={handleSubmit} action="">
            <div>
                <label htmlFor="">Name :</label>
                <input 
                type="text"
                name='name'
                value={user.name} 
                onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>

                <div>
                <label htmlFor="">Email :</label>
                <input 
                type="text"
                name='email'
                value={user.email} 
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
                <div>
                <label htmlFor="">Phone :</label>
                <input 
                type="text"
                name='phone'
                value={user.phone} 
                onChange={handleChange}
                />
                {errors.phone && <p>{errors.phone}</p>}
            </div>
            
            <div>
                <label htmlFor="">Department :</label>
                <select name="department" id="" value={user.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select>
                {errors.department && <p>{errors.department}</p>}
            </div>

            <div>
                <label htmlFor="">Gender :</label>
                          <label>
            <input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input type="radio"name="gender" value="Female" checked={user.gender === "Female"} onChange={handleChange}
            />
            Female
          </label>
          {errors.gender && <p>{errors.gender}</p> }
            </div>
                    <div>
          <label>Skills:</label>

          <label>
            <input
              type="checkbox"
              name="skills"
              value="React"
              checked={user.skills.includes("React")}
              onChange={handleChange}
            />
            React
          </label>

          <label>
            <input
              type="checkbox"
              name="skills"
              value="JavaScript"
              checked={user.skills.includes("JavaScript")}
              onChange={handleChange}
            />
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              name="skills"
              value="CSS"
              checked={user.skills.includes("CSS")}
              onChange={handleChange}
            />
            CSS
          </label>

          {errors.skills && <p>{errors.skills}</p>}
        </div>
        <div>
          <label>Semester:</label>

          <select
            name="semester"
            value={user.semester}
            onChange={handleChange}
          >
            <option value="">Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
            <option value="3rd">3rd Semester</option>
            <option value="4th">4th Semester</option>
            <option value="5th">5th Semester</option>
            <option value="6th">6th Semester</option>
            <option value="7th">7th Semester</option>
            <option value="8th">8th Semester</option>
          </select>

          {errors.semester && <p>{errors.semester}</p>}
        </div>

        <br />

        <button type="submit">
          Register
        </button>

        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>

            </form> 
        </div>
    </div>
  )
}

export default SignUp
