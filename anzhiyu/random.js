var posts=["2023/11/11/深大Aurora第一批入队赛WP/","2023/11/17/Triode的RSA学习笔记（1）/","2023/12/15/Anshel–Anshel–Goldfeld-密钥交换体系-Anshel–Anshel–Goldfeld-key-exchange/","2023/12/17/LCG笔记/","2024/03/09/连分数（Continued-Fractions）笔记/","2024/03/24/向量空间（Vector-Space）学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };