import React from "react";

import styles from '../styles/sidebar.css'

class Sidebar extends React.Component {

    render() {
        return (
            <div styleName={'styles.sidebar'}>
                <nav styleName={'styles.nav'}>
                <h1>Categories</h1>
                    <ul>
                        <li styleName={'active'}>
                            <a href="/general">General</a>
                        </li>
                        <li>
                            <a href="/business">Business</a>
                        </li>
                        <li>
                            <a href="/entertainment">Entertainment</a>
                        </li>
                        <li>
                            <a href="/health">Health</a>
                        </li>
                        <li>
                            <a href="/science">Science</a>
                        </li>
                        <li>
                            <a href="/sports">Sports</a>
                        </li>
                        <li>
                            <a href="/technology">Technology</a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Sidebar