import React from 'react';
import URL from './Url';
import TitleWithYear from './TitleWithYear';

const Publication = ({ doi, title, year, collaborators, demo, description, conference }) => {
    return (
        <div className="text-left space-y-2 text-black mt-4">
            <TitleWithYear title={title} year={year} />

            {
                collaborators && (
                    <p>
                        <span className='text-subtitle-gray'>Collaborators:</span>{' '}
                        {collaborators.map((collaborator, index) => (
                            <span key={index}>
                                <URL url={collaborator.url} text={collaborator.name} />
                                {index < collaborators.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                )
            }

            {
                conference && (
                    <p>
                        <span className='text-subtitle-gray'>Conference:</span>{' '}
                        <URL url={conference.url} text={conference.name} />
                    </p>
                )
            }

            { doi &&
                <p className='text-left'>
                    <span className='text-subtitle-gray'>DOI:</span>{' '}
                    <URL url={doi} text={doi} />
                </p>
            }

            { demo &&
                <p className='text-left'>
                    <span className='text-subtitle-gray'>{demo.title}:</span>{' '}
                    <URL url={demo.url} text={demo.text} />
                </p>
            }

            <p>{description}</p>
        </div>
    );
};

export default Publication;


