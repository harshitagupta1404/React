import Header from "../Header"
import { Provider } from "react-redux"
import {render,screen} from '@testing-library/react'
import appStore from '../../utils/appStore'
import UserContext from "../../utils/UserContext"

it("Should load a header component with login button",()=>{
    // render something
    render(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: 'Harshita' }}>
                <Header/>
            </UserContext.Provider>
        </Provider>
    )
    // find something
    const loginButton = screen.getByText('Login');
    // assert something
    expect(loginButton).toBeInTheDocument();
})