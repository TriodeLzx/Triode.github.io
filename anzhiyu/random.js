var posts=["2023/11/11/深大Aurora第一批入队赛WP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };