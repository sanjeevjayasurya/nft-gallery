import React, { useState, useEffect } from 'react';

const Media = ({ url }) => {
  const [fileType, setFileType] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const ext = url.split('.').pop().toLowerCase();

    switch (ext) {
      case 'gif':
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'svg':
        setFileType('image');
        setFileURL(url);
        setIsLoading(false);
        break;
      case 'mp4':
      case 'webm':
      case 'ogg':
        setFileType('video');
        setFileURL(url);
        setIsLoading(false);
        break;
      case 'mp3':
      case 'wav':
        setFileType('audio');
        setFileURL(url);
        setIsLoading(false);
        break;
      case 'glb':
      case 'gltf':
        setFileType('model');
        setFileURL(url);
        setIsLoading(false);
        break;
      default:
        console.error(`Invalid file type: ${ext}`);
        setIsLoading(false);
        break;
    }
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!fileType || !fileURL) {
    return <div>File not found.</div>;
  }

  switch (fileType) {
    case 'image':
      return <img src={fileURL} alt="NFT" />;
    case 'video':
      return (
        <video width="100%" height="auto" controls autoplay loop>
          <source src={fileURL} type={`video/${fileType}`} />
          Your browser does not support the video tag.
        </video>
      );
    case 'audio':
      return (
        <audio controls>
          <source src={fileURL} type={`audio/${fileType}`} />
          Your browser does not support the audio tag.
        </audio>
      );
    case 'model':
      return <model-viewer src={fileURL} alt="NFT" />;
    default:
      return null;
  }
};

export default Media;