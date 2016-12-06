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
            Bean.UserInfoBean userinfo = (UserInfoBean) request.getSession().getAttribute("UserInfo");
            /*response to save button*/
            if(level.equalsIgnoreCase("save")){
                /*get current max level from userinfobean*/
                String maxLevel = Integer.toString(userinfo.getLevel());
                /* update database with current level*/
                out.print("Please,wait saving data...");
                String query = "UPDATE qixchen.account SET Level='" + maxLevel + "' WHERE Id='" + userinfo.getUserId() + "'";
                JdbcConnector.excuteUpdate(query);

                request.getRequestDispatcher("level.jsp").forward(request, response);
            }else {
                /*if user lost the game, back to orignal level without change*/
                if (level.equalsIgnoreCase("lose")) {
                    System.out.println("lose");
                    request.getRequestDispatcher("level.jsp").forward(request, response);
                    /* if user win the game, check the current level*/
                } else {
                    System.out.println("level: " + level);
                    /*check the next level number*/
                    int newlevel = Integer.parseInt(level) + 1;

                    /*if next level greater than current level, then updata the userinfobean level record*/
                    if (newlevel > userinfo.getLevel()) {
                        ((UserInfoBean) request.getSession().getAttribute("UserInfo")).setLevel(newlevel);
                    }

                    request.getRequestDispatcher("level.jsp").forward(request, response);
                }
            }
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
