function Navbar(){
    
    const activeStyle={
        backgroundColor: 'purple',
        color: 'white'
    }

    return(
        <div>
            <ul>
                <li><NavLink to = "/main" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
            </ul>
        </div>
    )
}