package org.test2;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
//@WebServlet("/rq")
public class Sub extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		String para = req.getParameter("k");
		
//		HttpSession s = req.getSession();
//		Object para = s.getAttribute("k");
		
//		String para="";
//		Cookie[] cookies = req.getCookies();
//		for(Cookie c:cookies) {
//			if(c.getName().equals("l")) {
//				para = c.getValue();
//			}
//		}
		String em="";
		Cookie[] cookies2 = req.getCookies();
		for(Cookie c2:cookies2) {
			if(c2.getName().equals("k"))
			{
				em=c2.getValue();
			}
		}
//		ServletConfig scf = getServletConfig();
//		String para = scf.getInitParameter("log");
		PrintWriter writer = resp.getWriter();
		writer.println("Hello World"+em);
	}
	
	
	//servlet tags
//	<display-name>ServletTest2</display-name>
//	  <servlet>
//	     <servlet-name>first</servlet-name>
//	     <servlet-class>org.test2.Web</servlet-class>
//	     
//	   <init-param>
//	       <param-name>pass</param-name>
//	       <param-value>1234567</param-value>
//	  </init-param>
//	  
//	  </servlet>
//	  <servlet-mapping>
//	      <servlet-name>first</servlet-name>
//	      <url-pattern>/add</url-pattern>
//	  </servlet-mapping>
//	  
//	  <servlet>
//	     <servlet-name>second</servlet-name>
//	     <servlet-class>org.test2.Sub</servlet-class>
//	     
//	   <init-param>
//	      <param-name>log</param-name>
//	      <param-value>karthi</param-value>
//	  </init-param>
//	  
//	  </servlet>
//	  
//	  <servlet-mapping>
//	      <servlet-name>second</servlet-name>
//	      <url-pattern>/rq</url-pattern>
//	  </servlet-mapping>
//	  
//	  <context-param>
//	      <param-name>name</param-name>
//	      <param-value>karthi</param-value>
//	  </context-param>
	  
}
