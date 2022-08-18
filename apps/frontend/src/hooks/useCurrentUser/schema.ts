import { gql } from "graphql-request";

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    currentUser {
      id
      name
      imageUrl
      following {
        nodes {
          followingUserId
        }
      }
    }
  }
`;
