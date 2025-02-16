import type { IconLink } from './types';

const follow: IconLink[] = [
    { href: 'https://github.com/abbieschenk', icon: 'github' },
    { href: 'https://www.linkedin.com/in/abbie-schenk/', icon: 'linkedin' },
    { href: 'https://bsky.app/profile/abbieschenk.com', icon: 'bluesky' },
    { href: 'https://instagram.com/abbieschenk', icon: 'instagram' },
    { href: 'mailto:abbieschenk@protonmail.ch', icon: 'mail' },
];

export default { cloudinary: { cloudName: 'abbieschenk' }, links: { follow } };
