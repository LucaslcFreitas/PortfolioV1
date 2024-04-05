import { ContactType } from '../ContactCard';
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
        value: '@lucas-freitas-82b560205',
        link: 'https://www.linkedin.com/in/lucas-freitas-82b560205/',
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
