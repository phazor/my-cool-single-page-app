import React from 'react';

const Cog = ({className, onClick}) => (
  <div onClick={onClick}>
    <svg className={className} viewBox="0 0 64 64" width="64" height="64" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <path d="M 27.85368649427099 0 L 36.14631350572901 0 L 37.99826471205134 9.795927840953144 A 23 23 0 0 1 43.459236340373984 12.05793635313907 L 51.69553060114317 6.440696605204129 L 57.55930339479587 12.304469398856835 L 51.94206364686093 20.540763659626016 A 23 23 0 0 1 54.20407215904686 26.001735287948662 L 64 27.85368649427099 L 64 36.14631350572901 L 54.20407215904686 37.99826471205134 A 23 23 0 0 1 51.94206364686093 43.459236340373984 L 57.55930339479587 51.69553060114317 L 51.69553060114317 57.55930339479587 L 43.459236340373984 51.94206364686093 A 23 23 0 0 1 37.99826471205134 54.20407215904686 L 36.14631350572901 64 L 27.85368649427099 64 L 26.001735287948662 54.20407215904686 A 23 23 0 0 1 20.540763659626016 51.94206364686093 L 12.304469398856835 57.55930339479587 L 6.440696605204129 51.69553060114317 L 12.05793635313907 43.45923634037398 A 23 23 0 0 1 9.795927840953148 37.998264712051345 L 0 36.14631350572902 L 0 27.853686494270995 L 9.795927840953144 26.001735287948662 A 23 23 0 0 1 12.057936353139063 20.540763659626023 L 6.440696605204122 12.304469398856835 L 12.304469398856826 6.440696605204128 L 20.540763659626016 12.05793635313907 A 23 23 0 0 1 26.001735287948677 9.79592784095314 M 32 23 A 9 9 0 0 0 32 41 A 9 9 0 0 0 32 23"></path>
    </svg>
  </div>
)

export default Cog;
