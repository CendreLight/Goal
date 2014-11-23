package goal.controller.servlet;

import goal.model.manager.ManageSearch;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/search")
public class SearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String query = request.getParameter("search");
		if(query.length() > 0) {
			ManageSearch manageSearch = new ManageSearch();
			request.setAttribute("query", query);
			if(manageSearch.search(query)) {
				request.setAttribute("results", manageSearch.getResults());
			}
		}
		request.getRequestDispatcher("jsp/search.jsp").forward(request, response);
	}

}
