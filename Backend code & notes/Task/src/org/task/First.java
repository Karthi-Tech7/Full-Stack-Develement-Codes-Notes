package org.task;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//@WebServlet("/cn")
public class First extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter w = resp.getWriter();
		w.println("Welcome to Java\n");
		
		String a = req.getParameter("a");
		String b = req.getParameter("b");
		
//		<servlet>
//	       <servlet-name>first</servlet-name>
//	       <servlet-class>org.task.First</servlet-class>
//	  </servlet>
//	  
//	  <servlet-mapping>
//	         <servlet-name>first</servlet-name>
//	         <url-pattern>/cn</url-pattern>
//	  </servlet-mapping>
		
		int p = Integer.parseInt(a);
		int p1 = Integer.parseInt(b);
		w.println("Addition result:"+(p+p1)+"\ncalculate using arithmetic op:\n"+"Add:"+(p1+p1)+"\nsub:"+(p-p1)+"\nmult:"+(p*p1)+"\ndivi:"+(p/p1));
		
		String Mynm = req.getParameter("nm");
		w.println("Welcome "+Mynm);
		
		String em = req.getParameter("em");
		String id = req.getParameter("id");
		String sa = req.getParameter("sa");
		w.println("\nEmpName:"+em+"\nEmpId:"+id+"\nEmpSalary:"+sa);
		
	}
}
