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

        try (PrintWriter out = response.getWriter()) {
            String level = request.getParameter("level");
            /*response to save button*/
            if(Integer.parseInt(level)>1000){
                /*get current max level from userinfobean*/
                /* update database with current level*/

                String query = "UPDATE qixchen.account SET Level='" + Integer.toString(Integer.parseInt(level)-1000) + "' WHERE Id='" + ((Bean.UserInfoBean)request.getSession().getAttribute("UserInfo")).getUserId() + "'";
                JdbcConnector.excuteUpdate(query);
                ((UserInfoBean) request.getSession().getAttribute("UserInfo")).setLevel(Integer.parseInt(level)-1000);
                request.getRequestDispatcher("level.jsp").forward(request, response);
            }else {
                /*if user lost the game, back to orignal level without change*/
                if (Integer.parseInt(level)>100) {
                    ((UserInfoBean) request.getSession().getAttribute("UserInfo")).setLevel(Integer.parseInt(level)-100);
                    request.getRequestDispatcher("level.jsp").forward(request, response);

                    /* if user win the game, check the current level*/
                }else {

                    /*check the next level number*/
                    int newlevel = Integer.parseInt(level) + 1;

                    /*if next level greater than current level, then updata the userinfobean level record*/
                    if (newlevel > ((Bean.UserInfoBean)request.getSession().getAttribute("UserInfo")).getLevel()) {
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