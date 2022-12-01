let newUser = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
  body: JSON.stringify({
    name: "Pupkin Vasily",
    status: "active",
    gender: "male",
    email: "pupkin@dgmail.com",
  }),
};

let newPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
  body: JSON.stringify({
    title: "Post3",
    body: "something different fot me post3",
    user_id: "4980",
  }),
};

let delComments = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
  body: JSON.stringify({
    id: "1753",
  }),
};

let newComment = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
  body: JSON.stringify({
    name: "Pcom3",
    email: "pupkin@dmail.com",
    body: " comment3 something different fot me comments",
    post_id: "1839",
  }),
};

let updateUser = {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
  body: JSON.stringify({
    email: "pupkin@23dmai1.com",
  }),
};

let GetPosts = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 017f287d187c889396ebde574d1162096ebf76ea37fab776d15e0ff5367006d0",
  },
};

// fetch("https://gorest.co.in/public/v2/users/4980/posts", GetPosts) //get posts
//   .then((response) => response.json())
//   .then((response) => console.log(response));

fetch("https://gorest.co.in/public/v2/posts/1838/comments", GetPosts)
  .then((response) => response.json())
  .then((response) => console.log(response));

// fetch("https://gorest.co.in/public/v2/users", newUser)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// fetch("https://gorest.co.in/public/v2/users/4980/posts", newPost)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// fetch("https://gorest.co.in//public/v2/posts/1838/comments", newComment)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// fetch("https://gorest.co.in/public/v2/users/4980", updateUser)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// fetch("https://gorest.co.in/public/v2/posts/1838/comments", delComments)
//   .then((response) => response.json())
//   .then((response) => console.log(response));
