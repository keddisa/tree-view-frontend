import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="title title-about">
                    The Numbers Generator
                </div>
                <div className="about-cards">
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                            <path d="M0.69 11.331l1.363 0.338 1.026-1.611-1.95-0.482c-0.488-0.121-0.981 0.174-1.102 0.66-0.121 0.483 0.175 0.973 0.663 1.095zM18.481 11.592l-4.463 4.016-5.247-4.061c-0.1-0.076-0.215-0.133-0.338-0.162l-0.698-0.174-1.027 1.611 1.1 0.273 5.697 4.408c0.166 0.127 0.362 0.189 0.559 0.189 0.219 0 0.438-0.078 0.609-0.232l5.028-4.527c0.372-0.334 0.401-0.906 0.064-1.277s-0.911-0.4-1.284-0.064zM8.684 7.18l4.887 3.129c0.413 0.264 0.961 0.154 1.24-0.246l5.027-7.242c0.286-0.412 0.183-0.977-0.231-1.26-0.414-0.285-0.979-0.182-1.265 0.23l-4.528 6.521-4.916-3.147c-0.204-0.131-0.451-0.174-0.688-0.123-0.236 0.053-0.442 0.197-0.571 0.4l-7.497 11.767c-0.27 0.422-0.144 0.983 0.28 1.25 0.15 0.096 0.319 0.141 0.486 0.141 0.301 0 0.596-0.149 0.768-0.42l7.008-11z"></path>
                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">Technologies Used</div>
                            <div className="about-text-main">This APP has been developed using MERN Stack (MongoDB, Express, React, Node.js)
                        </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                            <path d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
							<path d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">Responsive Frontend Design</div>
                            <div className="about-text-main">All you see on this page has been designed purely with CSS Grid and SASS, and is reponsive to screen sizes
                        </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                            <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">CRUD Functionality</div>
                            <div className="about-text-main">Create, Read, Update and Delete functionalities have been implemented through calls to a custom built API
                        </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                        <path d="M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782
								c0,2.163,1.516,4.133,3.903,5.122v3.091c0,0.251,0.144,0.478,0.372,0.586c0.087,0.042,0.182,0.062,0.276,0.062
								c0.148,0,0.295-0.051,0.412-0.15l3.678-3.038c0.14-0.022,0.275-0.057,0.413-0.084c0.655,0.666,1.544,1.185,2.607,1.46
								c0.198,0.051,0.401,0.094,0.608,0.125l2.641,2.182c0.118,0.099,0.264,0.15,0.413,0.15c0.094,0,0.188-0.02,0.276-0.062
								c0.228-0.108,0.372-0.335,0.372-0.586v-2.135c1.74-0.761,2.84-2.231,2.84-3.846C19.405,8.862,17.456,7.073,14.9,6.707z
								 M8.885,12.552c-0.019,0.003-0.032,0.018-0.051,0.022c-0.101,0.022-0.2,0.056-0.281,0.123l-2.76,2.28v-2.161
								c0-0.275-0.175-0.521-0.434-0.612C3.253,11.467,1.89,9.871,1.89,8.138c0-2.474,2.68-4.487,5.975-4.487
								c2.604,0,4.801,1.265,5.617,3.014c0.187,0.401,0.302,0.823,0.33,1.268c0.005,0.069,0.028,0.134,0.028,0.205
								c0,1.819-1.481,3.438-3.706,4.129c-0.115,0.037-0.224,0.08-0.343,0.111C9.497,12.455,9.196,12.513,8.885,12.552z M15.703,13.809
								c-0.259,0.091-0.434,0.336-0.434,0.612v1.199l-1.723-1.422c-0.095-0.079-0.211-0.129-0.333-0.144
								c-0.219-0.028-0.431-0.068-0.636-0.121c-0.545-0.14-1.023-0.364-1.433-0.64c2.423-0.969,3.99-2.942,3.99-5.155
								c0-0.024-0.004-0.047-0.005-0.071c1.718,0.385,2.98,1.553,2.98,2.948C18.11,12.202,17.165,13.299,15.703,13.809z"></path>
							<path d="M4.68,7.591h6.167c0.358,0,0.648-0.29,0.648-0.648s-0.29-0.648-0.648-0.648H4.68
								c-0.358,0-0.648,0.29-0.648,0.648S4.323,7.591,4.68,7.591z"></path>
							<path d="M8.709,8.636H4.68c-0.358,0-0.648,0.29-0.648,0.648c0,0.358,0.29,0.648,0.648,0.648h4.028
								c0.358,0,0.648-0.29,0.648-0.648C9.356,8.926,9.067,8.636,8.709,8.636z"></path>                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">Data Management and Persistence</div>
                            <div className="about-text-main">Redux has been used for data and state management and MongoDB has been used to persist the data
                    </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                            <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">Form Validation</div>
                            <div className="about-text-main">Accept names without special characters, numbers are within expected range, and lower range number is less than upper range number
                    </div>
                        </div>
                    </div>
                    <div className="about-card">
                        <svg className="about-icon" viewBox="0 0 40 40">
                        <path d="M14.013,4.93h-0.997c-0.134-1.315-1.093-2.387-2.358-2.668V1.16c0-0.364-0.294-0.657-0.657-0.657c-0.363,0-0.657,0.293-0.657,0.657v1.102C8.077,2.543,7.118,3.615,6.984,4.93H5.987c-0.363,0-0.657,0.292-0.657,0.657v2.005c0,0.341,0.264,0.614,0.598,0.644V18.84c0,0.365,0.294,0.657,0.657,0.657h6.829c0.363,0,0.657-0.292,0.657-0.657V8.236c0.334-0.031,0.598-0.303,0.598-0.644V5.587C14.67,5.222,14.376,4.93,14.013,4.93z M7.243,18.182V8.249h5.515v9.933H7.243z"></path>                        </svg>
                        <div className="about-text">
                            <div className="about-text-title">Injections Protection</div>
                            <div className="about-text-main">To avoid injections, a noSQL database has been used (MongoDB) and form validation as an extra layer of protection
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default About;