import { ContactType } from '../components/ContactCard';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export const contactsData: ContactType[] = [
    {
        icon: <MdEmail />,
        title: 'Email',
        value: 'lucaslcfjf@hotmail.com',
        type: 'email',
    },
    {
        icon: <FaLinkedinIn />,
        title: 'LinkedIn',
        value: '@lucaslc-freitas',
        link: 'https://www.linkedin.com/in/lucaslc-freitas/',
        type: 'link',
    },
    {
        icon: <FiGithub />,
        title: 'GitHub',
        value: '@LucaslcFreitas',
        link: 'https://github.com/LucaslcFreitas',
        type: 'link',
    },
];
