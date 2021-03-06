package Servlet;

import Connector.JdbcConnector;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by Rex on 10/26/16.
 */

public class LoginServlet extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException,SQLException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin","*");

        try (PrintWriter out = response.getWriter()) {
            String Id = request.getParameter("id");
            String Name= request.getParameter("name");
            /*default level sign for guest player*/
            int Level = -1;
            /*check if the player is guest*/
            if(!(Id.equalsIgnoreCase("Guest"))){
                /*if not guest, we get info from DB*/
                String query = "select * from account where Id = '" + Id + "'";
                ResultSet rs = JdbcConnector.excuteQuery(query);
                /*based on DB, get user info*/
                if (rs.first()) {
                    Level = rs.getInt("Level");
                    JdbcConnector.closeDatabase();
                    /* otherwise create a new user info in DB*/
                } else {
                    JdbcConnector.closeDatabase();
                    query = "INSERT INTO account VALUES ('" + Id + "', '" + Name + "','" + 1 + "','" + 0 + "')";
                    boolean r1 = JdbcConnector.excuteUpdate(query);
                    Level = 1;
                    if (r1) {
                        out.println("Add User to acct list successfully");
                    }
                }
            }
            /*clear up old user info bean in session*/
            request.getSession().invalidate();
            /*create an user info bean in session*/
            Bean.UserInfoBean UserInfo = new Bean.UserInfoBean();
            UserInfo.setUserId(Id);
            UserInfo.setName(Name);
            UserInfo.setLevel(Level);
            request.getSession().setAttribute("UserInfo",UserInfo);
            request.getRequestDispatcher("Game.jsp").forward(request, response);
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