import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Content() {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header
            className='content'
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color : isDark ? "white" : "black",
            }}
        >
            <h1>{user}님, 좋은 하루 되세요</h1>
        </header>
      )
    }
    