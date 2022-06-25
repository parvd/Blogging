API

1. getAllArticle get- gets all article
2. getUserDetails get-  gets user details
3. signup post
3. login post
3. addArticle post - add articles and send for approval
4. approveArticle post - approves article.


DataBase:

User{
    id:
    name:
    password:
    role:
}

Article:{
    id:
    author:
    desrc:
    isApproved:
    Time:
}

Histroy_article:{
    {
        id:
        Time:
    }
    ..
}