import React from 'react';
import URL from './Url';
import TitleWithYear from './TitleWithYear';

const Publication = ({ doi, title, year, collaborators, demo, description, conference }) => {
    return (
        <div className="text-left space-y-2 text-black mt-4">
            <TitleWithYear title={title} url={doi} year={year} />

            {
                collaborators && (
                    <p className="text-lg">
                        Collaborators:{' '}
                        {collaborators.map((collaborator, index) => (
                            <span key={index}>
                                <URL url={collaborator.url} text={collaborator.name} />
                                {index < collaborators.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                )
            }

            { demo &&
                <p className='text-left'>
                    {demo.title}: <URL url={demo.url} text={demo.text} />
                </p>
            }

            <p>{description}</p>

            {
                conference && (
                    <p>
                        Conference:{' '}
                        <URL url={conference.url} text={conference.name} />
                    </p>
                )
            }
        </div>
    );
};

export default Publication;


