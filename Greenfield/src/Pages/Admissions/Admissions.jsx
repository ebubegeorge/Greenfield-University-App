import React from 'react';
import Hero from '../../Components/Hero/Hero';
import admissionsHero from '../../assets/admissionsImg.jpg';
import "./Admissions.css";

const Admissions = () => {
    return (
        <>
            <Hero
                title="Admissions"
                subtitle="Start your journey with Greenfield University"
                background={admissionsHero}
            />

            <section className="admissions-info">
                <h2>Apply to Greenfield University</h2>
                <p>
                    We welcome students from diverse backgrounds. Complete the form
                    below to begin your application process.
                </p>
            </section>

            <form className="admissions-form">

                <h2>College Admission Form</h2>

                <div className="form-group">
                    <h3>Personal Information</h3>

                    <div className="form-row">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Middle Name" />
                        <input type="text" placeholder="Last Name" required />
                    </div>

                    <div className="form-row">
                        <input type="date" required />
                        <input type="email" placeholder="Email Address" required />
                    </div>
                </div>

                <div className="form-group">
                    <h3>Contact Details</h3>

                    <input type="tel" placeholder="Phone Number" required />

                    <input type="text" placeholder="Permanent Address" required />

                    <div className="form-row">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="Zip Code" />

                        <select required>
                            <option value="">Select Country</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <h3>Parent / Guardian Information</h3>

                    <div className="form-row">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Middle Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>

                    <input type="tel" placeholder="Parent/Guardian Phone Number" />
                </div>

                <div className="form-group">
                    <h3>Academic Information</h3>

                    <input type="number" placeholder="High School Graduation Year" />

                </div>

                <div className="form-group">
                    <h3>Program Selection</h3>

                    <select required>
                        <option value="">Select Program</option>
                        <option>Computer Science</option>
                        <option>Business Administration</option>
                        <option>Engineering</option>
                        <option>Mass Communication</option>
                        <option>Biological Sciences</option>
                    </select>
                </div>

                <button type="submit">Submit Application</button>

            </form>    </>
    );
};

export default Admissions;