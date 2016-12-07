package Bean;
import java.io.Serializable;
import java.lang.String;

public class UserInfoBean implements Serializable{
    private String userId ="Guest";
    private String name = "Guest";
    private int level = -1;




    public String getUserId(){
        return userId;
    }
    public String getName(){
        return name;
    }
    public int getLevel(){
        return level;
    }
    public void setUserId(String userId){
        this.userId = userId;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setLevel(int level){
        this.level = level;
    }
}
