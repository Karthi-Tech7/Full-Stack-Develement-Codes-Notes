<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="java.util.*" errorPage="Error.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>JSP</title>
</head>
<body>
<h1>JSP concept in servlet</h1>
     <%
        out.println("Hello Jsp");
        List l = new ArrayList<>();
        l.add("name");
        l.add(1234);
        l.add(2.3);
        l.add(true);
        l.add('a');
        
        out.println(l);
     %>
     <%out.println(2/0); %>
     <%="hello world" %>
     <% String name="java"; %>
     <%=name %>
     
</body>
</html>