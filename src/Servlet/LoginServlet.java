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


public class LoginServlet extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException,SQLException {
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Access-Control-Allow-Origin","*");
        try (PrintWriter out = response.getWriter()) {
            //get user info from gogole assign
            String Id = request.getParameter("id");
            String Name= request.getParameter("name");
            int Level = 1;
            System.out.println(0);
            if(Id.equalsIgnoreCase("Guest")){
                Bean.UserInfoBean userInfo = (Bean.UserInfoBean)request.getSession().getAttribute("UserInfo");
                /*check guest userbean if exit*/
                if(userInfo == null){
                    /*if guest does not exit 30 minutes ago, we ceate new guest infobean*/
                    userInfo = new Bean.UserInfoBean();
                    userInfo.setUserId(Id);
                    userInfo.setName(Name);
                    userInfo.setLevel(Level);
                    request.getSession().setAttribute("UserInfo", userInfo);
                }else{
                    /*if google userbean exit, we reset bean to  guest*/
                    if(! userInfo.getName().equalsIgnoreCase("Guest")){
                        userInfo.setUserId(Id);
                        userInfo.setName(Name);
                        userInfo.setLevel(Level);
                    }

                }

                System.out.println("3-1");
                /* if google user login*/
            }else{
                System.out.println(4);
                /*user is not in the database, set level to 1*/
                // abtain user info from database
                String query = "select * from account where Id = '" + Id + "'";
                ResultSet rs = JdbcConnector.excuteQuery(query);
                if (rs.first()) {
                    // if user already in the datase, get user level
                    Level = rs.getInt("Level");
                    JdbcConnector.closeDatabase();
                } else {
                    System.out.println(6);
                    //else insert user info to datavase
                    JdbcConnector.closeDatabase();
//                  query = "INSERT INTO userInfo(Id,Name,Level) VALUES (" + Id +','+Name+",1)";
                    query = "INSERT INTO account VALUES ('" + Id + "', '" + Name + "','" + 1 + "','" + 0 + "')";
                    boolean r1 = JdbcConnector.excuteUpdate(query);
                    if (r1) {
                        out.println("Add User to acct list successfully");
                    }
                }
                /* create userinfo bean */
                Bean.UserInfoBean UserInfo = new Bean.UserInfoBean();
                UserInfo.setUserId(Id);
                UserInfo.setName(Name);
                UserInfo.setLevel(Level);
                request.getSession().setAttribute("UserInfo", UserInfo);
            }
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
