import Button from "../../Reusables/reusable-imports"

export default function LogoutBtn(props){
    //all the function definitions are after the return statement
    
    return <Button onClick={logoutHandler} {...props}>
            Logout
        </Button>;

    function logoutHandler(){
        console.log(`Logout Button Clicked`);
    }
}