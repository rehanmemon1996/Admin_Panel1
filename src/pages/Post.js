import React, { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { db } from "./firestore";
import { auth, storage, db } from "../config/firebase";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import { set, ref,push } from "firebase/database";


const Post = () => {
  const [postType, setPostType] = useState('text');
  const [postContent, setPostContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleupload = (e) => {

    console.log(e.target.files[0]);
  
    const storageref = sRef(storage, `imagesfiles/${e.target.files[0].name}`);
  
    uploadBytes(storageref, e.target.files[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            setImageFile(url)
            // toast.success("Your image Upload...",{
            //   autoClose:2000
            // })
          })
          .catch((e) => {});
      })
      .catch((e) => {});
  };

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageFileChange = (e) => {
     
    setImageFile(e.target.files[0]);
  };

  const handleVideoFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
  
    if(imageFile!=null){
      let obj = {
      imageFile,
      postType,
      postContent
      };

      let dbref = ref(db, `Post/${postType}`); //ref,path
    await  push(dbref,obj);

    }
    else{

    }
      
    // Handle form submission logic here
    console.log('Form submitted:', { postType, postContent, imageFile, videoFile });
    // Reset form fields after submission
    setPostType('text');
    setPostContent('');
    setImageFile(null);
    setVideoFile(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Admin Post</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">
            Post Type:
            <select
              value={postType}
              onChange={handlePostTypeChange}
              className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Post Content:
            <textarea
              value={postContent}
              onChange={handlePostContentChange}
              className="w-full border p-2 mt-1 focus:outline-none focus:border-blue-500 rounded"
            />
          </label>
        </div>
        {postType === 'image' && (
          <div className="mb-4">
            <label className="block text-gray-700">
              Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleupload}
                className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
              />
            </label>
          </div>
        )}
        {postType === 'video' && (
          <div className="mb-4">
            <label className="block text-gray-700">
              Video:
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoFileChange}
                className="mt-1 block w-full border p-2 focus:outline-none focus:border-blue-500 rounded"
              />
            </label>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default Post;
