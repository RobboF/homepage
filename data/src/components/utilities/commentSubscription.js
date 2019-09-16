import {gql} from 'apollo-boost';

const commentSubscription = gql`
    subscription comments {
        comments {
            comment
            date
            id
            projectId
            username
        }
    }
`;

export default commentSubscription;