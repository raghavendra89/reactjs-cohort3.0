import { Header,Footer, Container } from "../Components/imports-components";
import CheckoutSection from "./CheckoutSection";

export default function AmazonCheckout(){

    return(<>
            <Header/>
            <Container className="py-4 bg-slate-200 !max-w-full">
                <CheckoutSection />
            </Container>
            <Footer />
        </>
    );
}