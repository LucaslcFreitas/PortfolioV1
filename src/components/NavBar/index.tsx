import NavBarLink from '../NavBarLink';
import * as Styled from './styles';

//Icons
import { ImProfile } from 'react-icons/im';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { RiContactsBookFill } from 'react-icons/ri';

function NavBar() {
    return (
        <Styled.NavContainer>
            <NavBarLink text="Sobre" icon={<ImProfile />} to="#about" />
            <NavBarLink text="Habilidades" icon={<GiSkills />} to="#skills" />
            <NavBarLink text="Projetos" icon={<GrProjects />} to="#projects" />
            <NavBarLink
                text="Contatos"
                icon={<RiContactsBookFill />}
                to="#contacts"
            />
        </Styled.NavContainer>
    );
}

export default NavBar;
