import './Sidebar.css';
import logo from '../../assets/gab.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return ( <
        div className = { sidebarOpen ? "sidebar-responsive" : "" }
        id = "sidebar" >
        <
        div className = "sidebar__title" >
        <
        div className = "sidebar__img" >
        <
        img src = { logo }
        alt = "logo" / >
        <
        h1 > usguri < /h1>                <
        /div> <
        i onClick = {
            () => closeSidebar() }
        className = "fa fa-times"
        id = "sidebarIcon" >
        < /i> <
        /div> <
        div className = "sidebar__menu" >
        <
        div className = "sidebar__link active_menu_link" >
        <
        i className = "fa fa-minus-square" > < /i> <
        a href = "h" > Home < /a> <
        /div>  <
        h2 > ADMIN < /h2> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-tachometer" > < /i> <
        a href = "h" > Area Administrativa < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-building" > < /i> <
        a href = "h" > Lojas < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-archive" > < /i> <
        a href = "h" > Produtos < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-bars" > < /i> <
        a href = "h" > Categorias < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-cutlery" > < /i> <
        a href = "h" > Pedidos < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-cutlery" > < /i> <
        a href = "h" > Pedidos < /a> <
        /div>  <
        h2 > PESSOAS < /h2> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-male" > < /i> <
        a href = "h" > Administradores < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-user-circle" > < /i> <
        a href = "h" > Usuarios < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-money" > < /i> <
        a href = "h" > Pagamento < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-tasks" > < /i> <
        a href = "h" > Plataforma < /a> <
        /div> <
        div className = "sidebar__link" >
        <
        i className = "fa fa-file-text" > < /i> <
        a href = "h" > Politica de Privacidade < /a> <
        /div> <
        div className = "sidebar__logout" >
        <
        i className = "fa fa-power-off" > < /i> <
        a href = "h" > Logout < /a> <
        /div> <
        /div> <
        /div>
    )
}

export default Sidebar;