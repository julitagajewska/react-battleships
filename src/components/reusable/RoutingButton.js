import React from 'react';
import { Link } from 'react-router-dom';
import './RoutingButton.css'

export default function RoutingButton(props) {
    return (
        <Link to={props.to} className={`${props.type}`}>{props.iconVisible ? props.icon : ''}{props.value}</Link>
    )
}
