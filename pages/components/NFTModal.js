// import React from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '2rem',
//     borderRadius: '0.5rem',
//     boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// };

// Modal.setAppElement('#__next');

// function NFTModal({ isOpen, onRequestClose, nft }) {
//   const { name, image, description, owner, permalink } = nft;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//     >
//       <h2 className="text-2xl mb-4">{name}</h2>
//       <img src={image} alt={name} className="w-full mb-4" />
//       <p className="mb-4">{description}</p>
//       <p className="mb-4">
//         Owner: <a href={`https://etherscan.io/address/${owner}`}>{owner}</a>
//       </p>
//       <a
//         href={permalink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-all duration-200 ease-in-out"
//       >
//         Purchase
//       </a>
//     </Modal>
//   );
// }

// export default NFTModal;