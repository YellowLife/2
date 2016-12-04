package Servlet;

import Bean.UserInfoBean;
import Connector.JdbcConnector;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;


/**
 * Created by Rex on 11/20/16.
 */

public class SaveServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException,SQLException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin","*");
        try (PrintWriter out = response.getWriter()) {
            String level = request.getParameter("level");
            int newlevel = Integer.parseInt(level);
            System.out.println("1");
            UserInfoBean userinfo = (UserInfoBean) request.getSession().getAttribute("UserInfo");
            userinfo.setLevel(newlevel);
            request.getSession().setAttribute("UserInfo",userinfo);
            String query = "UPDATE qixchen.account SET Level='"+ newlevel +"' WHERE Id='"+ userinfo.getUserId()+"'";
            JdbcConnector.excuteUpdate(query);

            request.getRequestDispatcher("level.jsp").forward(request, response);
        }
    }



    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(LoginServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
