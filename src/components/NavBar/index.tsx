import NavBarLink from '../NavBarLink';
import * as Styled from './styles';

function NavBar() {
    return (
        <Styled.NavContainer>
            <NavBarLink text="Sobre" to="#about" selected />
            <NavBarLink text="Habilidades" to="#about" />
            <NavBarLink text="Projetos" to="#about" />
            <NavBarLink text="Contatos" to="#about" />
        </Styled.NavContainer>
    );
}

export default NavBar;
