import * as Styled from './styles';

function Presentation() {
    const handleContact = () => {
        window.open('mailto:lucaslcfjf@hotmail.com', '_blank');
    };

    return (
        <Styled.Container id="presentation">
            <Styled.Content>
                <Styled.ProfileBox>
                    <Styled.ImgProfile
                        src="./assets/profile.png"
                        alt="Imagem de Lucas Lino"
                    />
                </Styled.ProfileBox>
                <div>
                    <Styled.Presentation>Olá, eu sou o </Styled.Presentation>
                    <Styled.Name>Lucas Lino</Styled.Name>
                    <Styled.Description>
                        Desenvolvedor Front-End
                    </Styled.Description>
                    <Styled.ButtonContact onClick={handleContact}>
                        Entrar em Contato
                    </Styled.ButtonContact>
                </div>
            </Styled.Content>
        </Styled.Container>
    );
}

export default Presentation;
