package org.test2;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
//@WebServlet("/add")
public class Web extends HttpServlet{

	@Override
	//service
	//doGet
	protected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		//getparameter
		String email = arg0.getParameter("reg");
		String password = arg0.getParameter("pass");
		String login = arg0.getParameter("log");
		String repass = arg0.getParameter("passa");
		
		int parseInt = Integer.parseInt(password);
		int parseInt2 = Integer.parseInt(repass);
		
		//getwriter
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			PrintWriter writer = arg1.getWriter();
//			writer.println("Successful login");
//		}else {
//			PrintWriter writer = arg1.getWriter();
//			writer.println("Somthing is wrong/n try again");
//		}
		
		//getRequestDispatcher
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			RequestDispatcher rd = arg0.getRequestDispatcher("rq");
//			rd.forward(arg0, arg1);
//		}
		
		//sendRedirect
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			arg1.sendRedirect("rq");
//			arg1.sendRedirect("rq?k="+email+password);
//		}
		
		//getSession
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			HttpSession session = arg0.getSession();
//			//getattribute
//			session.setAttribute("k",email);
//			arg1.sendRedirect("rq");
//			
//		}
		//cookies
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			Cookie cookie = new Cookie("k",email);
//			arg1.addCookie(cookie);
//			Cookie cookie2 = new Cookie("l",password);
//			arg1.addCookie(cookie2);
//			
//			arg1.sendRedirect("rq");
//		}
		//getservletcontext
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			ServletContext sc = getServletContext();
//			String ip = sc.getInitParameter("email");
//			Cookie cookie = new Cookie("k",ip);
//			arg1.addCookie(cookie);
//			
//			ServletContext sc2 = getServletContext();
//			String ip2 = sc2.getInitParameter("password");
//			Cookie cookie2 = new Cookie("l",ip2);
//			arg1.addCookie(cookie2);
//			
//			arg1.sendRedirect("rq");
//		}
		
		//getservletconfig
//		if(email.equals(login) &&  parseInt==parseInt2) {
//			ServletContext sc = getServletContext();
//			String ip = sc.getInitParameter("name");
//			
//			ServletConfig sc2 = getServletConfig();
//			String ip2 = sc2.getInitParameter("pass");
//			Cookie cookie = new Cookie("k",ip+ip2);
//			arg1.addCookie(cookie);
//			
//			arg1.sendRedirect("rq");
//		}
		//@WebServlet
		if(email.equals(login)&& parseInt==parseInt2) {
			Cookie cookie = new Cookie("k",email);
		    arg1.addCookie(cookie);
		
     		arg1.sendRedirect("rq");
		}
	}

	

}
