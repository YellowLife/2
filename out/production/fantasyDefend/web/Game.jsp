<%--
  Created by IntelliJ IDEA.
  User: Rex
  Date: 10/27/16
  Time: 10:06 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Game Page</title>
</head>
<body>
<h1>User Info</h1>
<jsp:useBean id="UserInfo" class="Bean.UserInfoBean" scope="request"/>
<h1>
    Id: <%=UserInfo.getUserId()%><br>
    Name: <%=UserInfo.getName()%><br>
    Level: <%=UserInfo.getLevel()%><br>
    Balance: <%=UserInfo.getBalance()%><br>
</h1>

</body>
</html>
