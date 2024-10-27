import React from 'react';
import URL from './Url';

const Publication = ({ doi, title, year, collaborators, demo, description, conference }) => {
    return (
        <div className="text-left space-y-2 text-black mt-4">
            <h2 className="flex flex-row items-center justify-between gap-4 text-2xl font-bold">
                <URL
                    className="overflow-wrap break-words flex-1"
                    url={doi}
                    text={title} />

                <div className="italic text-right whitespace-nowrap">{year}</div>
            </h2>

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


