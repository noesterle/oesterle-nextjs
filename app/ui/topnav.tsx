import Link from 'next/link';


export default function TopNav() {
    return (
        <div className='float-right'>
            <ul className='flex flex-grow-0'>
                <li className='p-1'>
                    <Link 
                    href="https://www.linkedin.com/in/nathan-oesterle/"
                    className="mb-2 flex h-10 items-center justify-start rounded-lg p-1 md:h-10 hover:bg-gray-600 hover:text-white"
                    target="_blank"
                    rel='noopener noreferrer'
                    >
                    LinkedIn
                    </Link>
                </li>
                <li className='p-1'>
                    <Link 
                    href="https://github.com/noesterle/"
                    className="mb-2 flex h-10 items-center justify-start rounded-lg p-1 md:h-10 hover:bg-gray-600 hover:text-white"
                    target="_blank"
                    rel='noopener noreferrer'
                    >
                    GitHub
                    </Link>
                </li>
                <li className='p-1'>
                    <Link 
                    href="/"
                    className="mb-2 flex h-10 items-center justify-start rounded-lg p-1 md:h-10 hover:bg-gray-600 hover:text-white"
                    target="_blank"
                    rel='noopener noreferrer'
                    >
                    Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
}