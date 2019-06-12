import React from 'react'
import PropTypes from 'prop-types'

import { Link, } from 'react-router-dom'
import { Menu, } from 'antd'

class HeaderNav extends React.Component {
    static propTypes = {
        navList: PropTypes.array.isRequired,
        mode: PropTypes.string
    }

    static defaultProps = {
        mode: 'horizontal'
    }

    render() {
        const { navList, mode } = this.props
        return (
            <Menu mode={mode} className="header-nav">
                {navList.map(nav => (
                    <Menu.Item key={nav.link}>
                        <Link to={nav.link}>
                            <span className="nav-text">{nav.title}</span>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }
}

export default HeaderNav