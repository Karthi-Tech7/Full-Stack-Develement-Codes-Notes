package org.task;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/cn")
public class GetAndPost extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String pa = req.getParameter("email");
		String pm = req.getParameter("pass");
		
		PrintWriter m = resp.getWriter();
		m.println("Successful Login");
		
	}
}
