import gql from "graphql-tag";

const GET_LESSONS_QUERY = gql`
	query {
		lessons {
			id
			title
		}
	}
`;

export { GET_LESSONS_QUERY };
