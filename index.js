const linkedInPosts = [
  {
    id: 1,
    user: "Tezi khan",
    description: "Software Engineer",
    content:
      "Which CSS framework is good for Angular Projects\napart from bootstrap",
    likes: 50,
    comments: 10,
  },
  {
    id: 2,
    user: "Harshit Ahluwalla",
    description: "Data Scientist",
    content:
      "Recent #datascience #internship and #jobs\nComment 'Add me' and I will add you to our close Telegram channel\nData Science Internship - Corner Stone Solutions\nData Science Internship - UpTricks Services\nPlease find all above internship here: https://bit.ly/2YAhEQu\n---- Hope this helps!\n#dataanalyst #jobs #deeplearning #machinelearning #harshitahluwalia",
    likes: 200,
    comments: 10,
  },
  {
    id: 3,
    user: "Arpit Shrotriya",
    description: "App Developer Intern",
    content:
      "Hey Folks!\nHope everyone is doing well.\nAs #SIH2020 is coming closer than ever! And Gearing up to be an online event this year (that's a bummer tbh).\nIt would be really helpful for us if any of you great developers would like to help us in the field of Web Development for our project and become the mentor of Team Kaizen for #SIH2020.\nTeam Kaizen: Hemshree Madaan Shubham Gupta SUMIT KUMAR Simrann Arora Anirudh Jain\nHope A mentoring opportunity interest you.\n#SIH #Mentor #Developers #Project",
    likes: 30,
    comments: 10,
  },
  {
    id: 4,
    user: "Tezi khan",
    description: "Software Engineer",
    content:
      "Which CSS framework is good for Angular Projects\napart from bootstrap",
    likes: 50,
    comments: 10,
  },
  {
    id: 5,
    user: "Harshit Ahluwalla",
    description: "Data Scientist",
    content:
      "Recent #datascience #internship and #jobs\nComment 'Add me' and I will add you to our close Telegram channel\nData Science Internship - Corner Stone Solutions\nData Science Internship - UpTricks Services\nPlease find all above internship here: https://bit.ly/2YAhEQu\n---- Hope this helps!\n#dataanalyst #jobs #deeplearning #machinelearning #harshitahluwalia",
    likes: 200,
    comments: 10,
  },
  {
    id: 6,
    user: "Arpit Shrotriya",
    description: "App Developer Intern",
    content:
      "Hey Folks!\nHope everyone is doing well.\nAs #SIH2020 is coming closer than ever! And Gearing up to be an online event this year (that's a bummer tbh).\nIt would be really helpful for us if any of you great developers would like to help us in the field of Web Development for our project and become the mentor of Team Kaizen for #SIH2020.\nTeam Kaizen: Hemshree Madaan Shubham Gupta SUMIT KUMAR Simrann Arora Anirudh Jain\nHope A mentoring opportunity interest you.\n#SIH #Mentor #Developers #Project",
    likes: 30,
    comments: 10,
  },
  {
    id: 4,
    user: "Tezi khan",
    description: "Software Engineer",
    content:
      "Which CSS framework is good for Angular Projects\napart from bootstrap",
    likes: 50,
    comments: 10,
  },
  {
    id: 5,
    user: "Harshit Ahluwalla",
    description: "Data Scientist",
    content:
      "Recent #datascience #internship and #jobs\nComment 'Add me' and I will add you to our close Telegram channel\nData Science Internship - Corner Stone Solutions\nData Science Internship - UpTricks Services\nPlease find all above internship here: https://bit.ly/2YAhEQu\n---- Hope this helps!\n#dataanalyst #jobs #deeplearning #machinelearning #harshitahluwalia",
    likes: 200,
    comments: 10,
  },
  {
    id: 6,
    user: "Arpit Shrotriya",
    description: "App Developer Intern",
    content:
      "Hey Folks!\nHope everyone is doing well.\nAs #SIH2020 is coming closer than ever! And Gearing up to be an online event this year (that's a bummer tbh).\nIt would be really helpful for us if any of you great developers would like to help us in the field of Web Development for our project and become the mentor of Team Kaizen for #SIH2020.\nTeam Kaizen: Hemshree Madaan Shubham Gupta SUMIT KUMAR Simrann Arora Anirudh Jain\nHope A mentoring opportunity interest you.\n#SIH #Mentor #Developers #Project",
    likes: 30,
    comments: 10,
  },
];
window.onload = () => {
  let posts = document.getElementById("Posts");
  for (var i = 0; i < linkedInPosts.length; i++) {
    let userPost = linkedInPosts[i];
    let post = document.createElement("div");
    post.className = "Post";
    let header = document.createElement("div");
    header.className = "Post-header";
    let userImg = document.createElement("img");
    userImg.className = "Post-user-img";
    userImg.src = "./assets/linkedin.png";
    userImg.alt = "avatar";
    header.appendChild(userImg);
    let userInfo = document.createElement("div");
    userInfo.className = "Post-user-info";
    let userName = document.createElement("p");
    userName.className = "Post-user-name";
    let userDesc = document.createElement("p");
    userDesc.className = "Post-user-desc";
    userName.innerHTML = userPost.user;
    userDesc.innerHTML = userPost.description;
    userInfo.appendChild(userName);
    userInfo.appendChild(userDesc);
    header.appendChild(userInfo);
    post.appendChild(header);
    let postContent = document.createElement("div");
    postContent.className = "Post-content";
    let userContent = document.createElement("p");
    userContent.className = "Post-content-text";
    userContent.innerHTML = userPost.content;
    postContent.appendChild(userContent);
    post.appendChild(postContent);
    let reactions = document.createElement("div");
    reactions.className = "Post-reaction";
    let like = document.createElement("img");
    let comment = document.createElement("img");
    let share = document.createElement("img");
    let send = document.createElement("img");
    like.className = "Post-like";
    comment.className = "Post-comment";
    share.className = "Post-share";
    send.className = "Post-send";
    like.src = "./assets/like.svg";
    comment.src = "./assets/comment.svg";
    share.src = "./assets/share.svg";
    send.src = "./assets/send.svg";
    reactions.appendChild(like);
    reactions.appendChild(comment);
    reactions.appendChild(share);
    reactions.appendChild(send);
    post.appendChild(reactions);
    posts.appendChild(post);
  }
};
