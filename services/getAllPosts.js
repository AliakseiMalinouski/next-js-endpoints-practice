import 

export const getAllPosts = async () => {
    const response = await fetch("http://localhost:3000/api/posts");
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
  };