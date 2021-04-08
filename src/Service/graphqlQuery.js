import { gql, } from '@apollo/client';

export const Companies = gql`
    query GetCompanies {
        companies {
            id,
            name,
            slug,
            websiteUrl,
            logoUrl,
            jobs {
                id
                title,
                slug,
                company {
                name
                }
                tags {
                id
                name
                }
                description
                commitment {
                title
                }
                cities {
                name
                }
                remotes {
                name
                }
                countries {
                name,
                isoCode
                }
                userEmail
                applyUrl
            },
            twitter,
            emailed
        }
    }
`;

export const Jobs = gql`
    query GetJobs {
        jobs {
            id,
            title,
            slug,
            company {
                id,
                name
            },
            tags {
                name
            },
            description
            commitment {
                title
            }
            cities {
                name
            }
            remotes {
                name
            }
            countries {
                name,
                isoCode
            }
            userEmail
            applyUrl
          }
    }
`;