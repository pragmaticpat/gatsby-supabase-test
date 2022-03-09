import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello Bitches!</h1>
    <p>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </p>
  </div>
);

export default IndexPage;

export const query = graphql`
  {
    allSupabaseQuiz {
      nodes {
        options {
          name
          correct
        }
      }
    }
  }
`;
