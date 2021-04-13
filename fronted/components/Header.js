import React, { useState } from 'react';
import { APP_NAME } from '../config'
import Link from 'next/link';
import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav lang="en" className="ml-auto" navbar>
                        {!isAuth() && (<React.Fragment>
                            <NavItem>

                                <Link href="/signup">
                                    <NavLink >Signup</NavLink>

                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/signin">
                                    <NavLink >Signin</NavLink>

                                </Link>
                            </NavItem>
                        </React.Fragment>
                        )}


                        {isAuth() && (<NavItem>

                            <NavLink onClick={() => signout(() => Router.replace('/signin'))} >Signout</NavLink>


                        </NavItem>)}

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                  </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                    </DropdownItem>
                                <DropdownItem>
                                    Option 2
                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Header;