import ContactCard, { ContactType } from '../ContactCard';
import * as Styled from './styles';

type ContactsProps = {
    contacts: ContactType[];
};

function Contacts({ contacts }: ContactsProps) {
    return (
        <Styled.ContactsContainer>
            {contacts.map((item, index) => (
                <ContactCard key={index} {...item} />
            ))}
        </Styled.ContactsContainer>
    );
}

export default Contacts;
