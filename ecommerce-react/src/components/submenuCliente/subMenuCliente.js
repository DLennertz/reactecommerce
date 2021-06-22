import React from 'react';
import './subMenuCliente.scss'
import { Link } from 'react-router-dom';

const SubMenuCliente = () => {
    const [startAnimate, setStartAnimate] = React.useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = React.useState(0);
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setStartAnimate(false);
        setCurrCount(count);
        setStateHighlightTopPosition(count * 52);

        setTimeout(() => {
            setStartAnimate(true);
        }, 100);
    }

    React.useEffect(() => {

        setTimeout(() => {
            setStartAnimate(true);
        }, 500);

        return () => {

        }
    }, []);

    return (


        <div className="sidebar">
            <div style={{ top: `${highlightTopPosition}px` }} className={`sidebar__highlight ${startAnimate && 'sidebar__highlight__animate'}`}></div>
            {/* note: will still have to think about this implementation */}
            {/* <div style={{ position: "absolute", height: "500px", width: "50px", backgroundColor: "#049DBF", zIndex: "-1" }}></div> */}

            <Link className={currCount === 0 && 'active'} href="#listar" to="/ListarCliente">
                <span className={currCount === 0 && 'text-active'}><i class="fas fa-arrow-right"></i> Listar</span>
            </Link>
            <Link className={currCount === 1 && 'active'} href="#achar" to="/EncontrarCliente">
                <span className={currCount === 1 && 'text-active'}><i class="fas fa-arrow-right"></i> Achar</span>
            </Link>
            <a className={currCount === 2 && 'active'} href="#deletar" >
                <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i> Deletar</span>
            </a>
            <a className={currCount === 3 && 'active'} href="#atualizar">
                <span className={currCount === 3 && 'text-active'}><i class="fas fa-arrow-right"></i> Atualizar</span>
            </a>
        </div>

    )
}


export default SubMenuCliente