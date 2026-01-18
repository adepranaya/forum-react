import PropTypes from 'prop-types';
import React from 'react';

function MyProfile({ name, email, avatar }) {
  return (
    <div className="bg-white dark:bg-[#1b252f] p-6 rounded-2xl flex flex-col items-center text-center shadow-sm border border-slate-100 dark:border-slate-800/50 order-3 mt-4">
      <div className="relative mb-4">
        <div
          className="size-24 rounded-full border-4 border-primary overflow-hidden"
          data-alt="Bronze medal user avatar"
        >
          <img alt={name} className="w-full h-full object-cover" src={avatar} />
        </div>
      </div>
      <h3 className="text-lg font-bold">Mike Johnson</h3>
      <p className="text-slate-500 dark:text-[#9cabba] text-xs uppercase tracking-wider mt-1 font-semibold">
        {email}
      </p>
    </div>
  );
}

MyProfile.propTypes = {
  name: PropTypes.func.isRequired,
  email: PropTypes.func.isRequired,
  avatar: PropTypes.func.isRequired,
};

export default MyProfile;
