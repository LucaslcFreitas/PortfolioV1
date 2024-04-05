import NavBarLink from '../NavBarLink';
import * as Styled from './styles';

function NavBar() {
    return (
        <Styled.NavContainer>
            <NavBarLink text="Sobre" to="#about" />
            <NavBarLink text="Habilidades" to="#skills" />
            <NavBarLink text="Projetos" to="#projects" />
            <NavBarLink text="Contatos" to="#contacts" />
        </Styled.NavContainer>
    );
}

export default NavBar;
