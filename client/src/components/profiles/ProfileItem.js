import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//TODO: ul parsed but not rendered in the DOM - line 29
//TODO: user returns only an id - name & avatar absent!! - { _id, name, avatar }
const ProfileItem = ({
  profile: {
    user,
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      {/* <img src={avatar} alt='' className='round-img' /> */}
      <div>
        {/* <h2>{name}</h2> */}
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${user}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
