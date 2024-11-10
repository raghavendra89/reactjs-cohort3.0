import Container from "../Container";
import {Logo} from "../../reusables/imports-reusables";

export default function Header(){
    console.log('Header Component');
    return (
    <Container className="!max-w-full !p-0">
        <div className="bg-slate-700 text-white p-2 w-full">
            <div className="flex flex-wrap justify-between w-full">
                <Logo />
                <div id="header-right-part" className="flex space-x-4">
                        <span>Hello, User</span>
                        <span>History</span>
                </div>
            </div>
        </div>
    </Container>);
}